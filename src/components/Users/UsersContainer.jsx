import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  followSuccess,
  setCurrentPage,
  unfollowSuccess,
  getUsers,
  toggleFollowingInProgress,
} from '../../redux/users-reducer';

// TODO: IMAGES

import Preloader from '../common/Preloader/Preloader';
//! getUsers изнасяме логиката в друг файл за да напарвим функцията ЧИСТА тя трябва само да рисува и държи връзка с потребителя.
class UsersContainer extends Component {
  // TODO: Метод жизнен цикъл - Life cycle
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.followSuccess}
          unfollow={this.props.unfollowSuccess}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  // TODO: Всичко е тук в return  може да се използва чрез props.
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
// TODO: Това е по дългия запис на обекта който е в connect{follow,unfollow,setUsers,setCurrentPage,toggleIsFetching} защото в негоима вграден mapToDispatchProps
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         }
//     }
// };

export default connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers,
})(UsersContainer);
