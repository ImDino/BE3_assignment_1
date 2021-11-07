import axios from 'axios';

export const getToken = () => {
  return localStorage.getItem('TOKEN_KEY');
};
export const setToken = token => {
  localStorage.setItem('TOKEN_KEY', token);
};

const serverLogin = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_ROOT,
  });
};

const serverDefault = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_ROOT,
    headers: {
      authorization: `Bearer ${getToken()}`
    },
  });
};

export const FetchKit = {
  login: googleToken => {
    return serverLogin().post('/auth/google', {tokenId: googleToken});
  },
  getUserData: () => {
    return serverDefault().get('/user/getData');
  },
  getTodos: () => {
    return serverDefault().get('/todo');
  },
  updateTodo: (id, todo) => {
    return serverDefault().patch(`/todo/${id}`, { todo: todo });
  },
  createTodo: (todo) => {
    return serverDefault().post('/todo', { todo: todo });
  },
  deleteTodo: id => {
    return serverDefault().delete(`/todo/${id}`);
  },
};