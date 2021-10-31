import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';

const fakeTodoData = [
  {
    title: 'First todo',
    content: '..and it\'s content',
    lastEditTime: Date.parse('04 Oct 2021 01:12:00 GMT'),
  },
  {
    title: 'Thoughts',
    content: 'This and that',
    lastEditTime: Date.parse('06 Oct 2021 05:24:32 GMT'),
  },
  {
    title: 'Shopping List',
    content: 'potatoes\n\nbeans\n\nflour',
    lastEditTime: Date.parse('07 Oct 2021 10:11:03 GMT'),
  },
  {
    title: '',
    content: 'No title',
    lastEditTime: Date.parse('08 Oct 2021 01:12:00 GMT'),
  },
  {
    title: 'Earlier date than above, and no content',
    content: '',
    lastEditTime: Date.parse('03 Oct 2021 00:03:00 GMT'),
  },
];

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={LoginPage} />
        
        <UserContext.Provider value={{fakeTodoData}}>
          <Route path='/' component={HomePage} />
        </UserContext.Provider>
        
        {/*
        
        //TODO 404 route without changing url 
        https://github.com/remix-run/react-router/blob/v3/docs/guides/Histories.md#creatememoryhistory
        
        */}
      </Switch>
    </>
  )
}
