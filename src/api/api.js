// TODO: SERVER GET
import * as axios from 'axios';
//!Promise тук връщаме не това от get, а това което ни е върнал then в вози случй това е data което получаваме от API(https://social-network.samuraijs.com/docs#auth_me_get)

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '64c581f4-8246-4c7e-b42d-06402768460a',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/
      ${userId}`,
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/
      ${userId}`,
    );
  },
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance.get(`follow=${currentPage}&count=${pageSize}`).then((response) => {
    return response.data;
  });
};
