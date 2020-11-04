export const getUsersForPage = (state) => {
  return state.usersPage.users;
};
export const getUsersPage = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentUsersPage = (state) => {
  return state.usersPage.currentPage;
};
export const getUsersFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getUsersFollowing = (state) => {
  return state.usersPage.followingInProgress;
};
