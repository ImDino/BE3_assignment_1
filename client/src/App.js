import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import TodoDetailsPage from './pages/TodoDetailsPage';
import TodoEditPage from './pages/TodoEditPage';
import { FetchKit, getToken, setToken } from './data/FetchKit';

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
  
  useEffect(() => {
    if (isLoggedIn && userInfo) {
      FetchKit.getTodos()
        .then(res => {
          const { todos } = res.data;
          setTodoList(todos);
        })
        .catch(error => {
          handleError(error);
        });
    }
  }, [isLoggedIn, userInfo]);
  
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
      setMessageRed(false);
    }, 2000);
  }, [message]);

  const validateToken = () => {
    FetchKit.getUserData()
      .then(res => {
        const { data } = res; //TODO make the response "res.data.token"
        setUserInfo(data);
        setIsLoggedIn(true);
      })
      .catch(error => {
        handleError(error);
      });
  };

  const handleError = (error) => {
    const { status } = error.response;
    
    if (status === 403) {
      setMessage('Session timed out, please sign in.');
      kickUser();
    } else {
      setMessageRed(true);
      setMessage('Something went wrong.');
    }
  };

  const kickUser = () => {
    setToken(null);
    setUserInfo(null);
    setIsLoggedIn(false);
    history.push("/login");
  };
  
  return (
    <UserContext.Provider
      value={{
        todoList, setTodoList,
        isLoggedIn, setIsLoggedIn,
        userInfo, setUserInfo,
        history, setMessage,
        messageRed, setMessageRed}}
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