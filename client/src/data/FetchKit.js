import axios from 'axios';

export const getToken = () => {
  return localStorage.getItem('TOKEN_KEY');
}
export const setToken = token => {
  localStorage.setItem('TOKEN_KEY', token);
}

const serverLogin = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ROOT,
});

const serverDefault = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ROOT,
  headers: {
    authorization: `Bearer ${getToken()}`
  },
})

export const FetchKit = {
  login: googleToken => {
    return serverLogin.post('/auth/google', {tokenId: googleToken})
  },
  getUserData: () => {
    return serverDefault.post('/user/getData')
  }
}