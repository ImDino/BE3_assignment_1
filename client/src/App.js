import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import TodoDetailsPage from './pages/TodoDetailsPage';
import TodoEditPage from './pages/TodoEditPage';
import { FetchKit, getToken, setToken } from './data/FetchKit';
import Navbar from './components/Navbar';
import MessageBanner from './components/MessageBanner';
import TodoCreatePage from './pages/TodoCreatePage';

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
  
  const validateToken = () => {
    FetchKit.getUserData()
      .then(res => {
        const { data } = res;
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
        message, setMessage,
        messageRed, setMessageRed,
        handleError, kickUser,
        history}}
    >
      <Navbar />
      {message && (<MessageBanner />)}
      <h1>My Todo App</h1>
      <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/todo/create' component={TodoCreatePage} />
          <Route path='/todo/:id/edit' component={TodoEditPage} />
          <Route path='/todo/:id' component={TodoDetailsPage} />
          <Route exact path='/' component={HomePage} />
          <Route>404</Route>
      </Switch>
    </UserContext.Provider>
  );
};