import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import TodoDetailsPage from './pages/TodoDetailsPage';
import TodoEditPage from './pages/TodoEditPage';

const todos = [
  {
    id: 1,
    title: 'First todo',
    content: '..and it\'s content',
    lastEditTime: new Date('04 Oct 2021 01:12:00 GMT'),
  },
  {
    id: 2,
    title: 'Thoughts',
    content: 'This and that',
    lastEditTime: new Date('06 Oct 2021 05:24:32 GMT'),
  },
  {
    id: 3,
    title: 'Shopping List',
    content: 'potatoes\n\nbeans\n\nflour',
    lastEditTime: new Date('07 Oct 2021 10:11:03 GMT'),
  },
  {
    id: 4,
    title: '',
    content: 'No title',
    lastEditTime: new Date('08 Oct 2021 01:12:00 GMT'),
  },
  {
    id: 5,
    title: 'Earlier date than above, and no content',
    content: '',
    lastEditTime: new Date('03 Oct 2021 00:03:00 GMT'),
  },
];

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // TODO get todos from db
    setTodoList(todos)
  }, []);
  
  return (
    <>
      <UserContext.Provider value={{todoList}}>
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
    </>
  )
}
