import * as axios from 'axios';
//!Promise тук връщаме не това от get, а това което ни е върнал then в вози случй това е data което получаваме от API(https://social-network.samuraijs.com/docs#auth_me_get)

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '64c581f4-8246-4c7e-b42d-06402768460a',
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
    return response.data;
  });
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance.get(`follow=${currentPage}&count=${pageSize}`).then((response) => {
    return response.data;
  });
};
