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
      `follow/
      ${userId}`,
    );
  },
  unfollow(userId) {
    return instance.delete(
      `unfollow/
      ${userId}`,
    );
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  //! Четем какво можем да отправяме на сървъра в наши случай то е само status който може да има дължина до 300 символа.Това всичко го пише в документацията на API
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
