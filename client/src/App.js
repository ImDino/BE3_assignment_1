import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import TodoDetailsPage from './pages/TodoDetailsPage';
import TodoEditPage from './pages/TodoEditPage';
import { FetchKit, getToken, setToken } from './data/FetchKit';

/* 
NOTE mockdata example
const todos = [
  {
    id: 1,
    title: 'First todo',
    content: '..and it\'s content',
    lastEditTime: new Date('04 Oct 2021 01:12:00 GMT'),
  },
];
 */
export default function App() {
  const [todoList, setTodoList] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageRed, setMessageRed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (getToken() && getToken() !== 'null') {
      validateToken();
    } else {
      history.push("/login");
    }
  }, []);

  const validateToken = () => {
    FetchKit.getUserData()
      .then(res => {
        const { data } = res;

        if (data) {
          setUserInfo(data);
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        const { status } = error.response;

        if (status === 403) {
          setMessage('Session timed out, please sign in.');
        } else {
          setMessageRed(true);
          setMessage('Something went wrong.');
        }
        setToken(null);
        setUserInfo(null);
        setIsLoggedIn(false);
        history.push("/login");
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      FetchKit.getTodos()
        .then(res => {
          console.log(res)
        })
    }
  }, [isLoggedIn])

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
      setMessageRed(false);
    }, 2000);
  }, [message]);
    
  return (
    <UserContext.Provider
      value={{
        todoList, setTodoList,
        isLoggedIn, setIsLoggedIn,
        userInfo, setUserInfo,
        history, setMessage,
        setMessageRed}}
    >
      <Switch>
          <Route path='/login' component={LoginPage} />
          
          <Route path='/todo/:id/edit' component={TodoEditPage} />
          <Route path='/todo/:id' component={TodoDetailsPage} />
          <Route path='/' component={HomePage} />
        
        {/* //TODO 404 route without changing url 
        https://github.com/remix-run/react-router/blob/v3/docs/guides/Histories.md#creatememoryhistory
        */}
      </Switch>
    </UserContext.Provider>
  )
}