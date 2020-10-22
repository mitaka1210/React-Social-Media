import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE ';
const SET_STATUS = 'SET_STATUS';
let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are u?', likeCounts: 12 },
    { id: 2, message: "It's my first post", likeCounts: 11 },
    { id: 3, message: 'Here?', likeCounts: 33 },
    { id: 4, message: 'Do you want go eat?', likeCounts: 1 },
    { id: 5, message: 'Do you want go eat?', likeCounts: 7 },
  ],

  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: action.newText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newText) => {
  return {
    type: ADD_POST,
    newText: newText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
    // TODO: Akо искам да взема всички страници от сървъра трябва да разкоментирам всичко свързано с setTotalUsersCount
    // this.props.setTotalUsersCount(response.data.totalCount);
  });
};
//? Взимаме статуса на потребителя
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
    // TODO: Akо искам да взема всички страници от сървъра трябва да разкоментирам всичко свързано с setTotalUsersCount
    // this.props.setTotalUsersCount(response.data.totalCount);
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }

    // TODO: Akо искам да взема всички страници от сървъра трябва да разкоментирам всичко свързано с setTotalUsersCount
    // this.props.setTotalUsersCount(response.data.totalCount);
  });
};

export default profileReducer;
