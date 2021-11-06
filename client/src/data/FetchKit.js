import axios from 'axios';

const serverLogin = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ROOT,
});

export const getToken = () => {
  return localStorage.getItem('TOKEN_KEY');
}
export const setToken = token => {
  localStorage.setItem('TOKEN_KEY', token);
}

export const FetchKit = {
  login: googleToken => {
    return serverLogin.post('/auth/google', {tokenId: googleToken})
  }
}