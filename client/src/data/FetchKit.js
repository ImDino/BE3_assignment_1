import axios from 'axios';

export const getToken = () => localStorage.getItem('TOKEN_KEY');
export const setToken = (token) => {
  localStorage.setItem('TOKEN_KEY', token);
};

const serverLogin = () => axios.create({
  baseURL: process.env.REACT_APP_SERVER_ROOT,
});

const serverDefault = () => axios.create({
  baseURL: process.env.REACT_APP_SERVER_ROOT,
  headers: {
    authorization: `Bearer ${getToken()}`,
  },
});

export const FetchKit = {
  login: (googleToken) => serverLogin().post('/auth/google', { tokenId: googleToken }),
  getUserData: () => serverDefault().get('/user/getData'),
  getTodos: () => serverDefault().get('/todo'),
  updateTodo: (id, todo) => serverDefault().patch(`/todo/${id}`, { todo }),
  createTodo: (todo) => serverDefault().post('/todo', { todo }),
  deleteTodo: (id) => serverDefault().delete(`/todo/${id}`),
};
