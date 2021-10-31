import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={HomePage} />
        {/*
        
        //TODO 404 route without changing url 
        https://github.com/remix-run/react-router/blob/v3/docs/guides/Histories.md#creatememoryhistory
        
        */}
      </Switch>
    </>
  )
}
