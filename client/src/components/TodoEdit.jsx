import React from 'react'

export default function TodoEdit({data}) {
  const { title, content, lastEditTime, id } = data;
  const history = useHistory();

  function openEdit() {
    history.push(`/todo/${id}/edit`)
  }

  return (
    <Card onClick={openEdit}>
      <p>{title}</p>
      <p>{content}</p>
      <p>{lastEditTime}</p>
    </Card>
  )
}
