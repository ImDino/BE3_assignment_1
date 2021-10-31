import React from 'react'

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

export default function HomePage() {
  return (
    <div>
      Todos
    </div>
  )
}
