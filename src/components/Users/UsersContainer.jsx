import React, {Component} from 'react';
import Users from "./Users";
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from '../../redux/users-reducer';

// TODO: SERVER GET
import * as axios from 'axios';

// TODO: IMAGES

import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends Component {


    // TODO: Метод жизнен цикъл - Life cycle
    componentDidMount() {

        this.props.toggleIsFetching(true);

        // TODO: Въпрос на сървъра

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                // TODO: Akо искам да взема всички страници от сървъра трябва да разкоментирам всичко свързано с setTotalUsersCount
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)

            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }


    render() {


        return <>
            {this.props.isFetching ? < Preloader  />  : null }
        <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
        </>

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
    }

}
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


export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    // setUsersTotalCount //
    })
    (UsersContainer);

