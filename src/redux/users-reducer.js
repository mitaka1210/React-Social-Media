import { usersAPI } from '../api/api';

//! Избягване на грешки при изписването на имената на case:

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 90,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
  // TODO: обявяваме променлива: stateCopy

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((u) => {
          // TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }

          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map((u) => {
          // TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }

          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};
// TODO: КРАТКИЯ ВАРИАНТ НА ДВАТА ACTION доло

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
//
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: isFetching,
  userId: userId,
});

export const getUsers = (requestPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(requestPage));

    // TODO: Въпрос на сървъра
    usersAPI.getUsers(requestPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true, userId));

    // TODO: Въпрос на сървъра
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true, userId));

    // TODO: Въпрос на сървъра
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
