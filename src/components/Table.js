import React from 'react'
import TodoItem from './TodoItem'


export default function Table(props) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TODO</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} checkToggle={props.onCheckToggle} deleteClick={props.onDeleteClick}/> )}
        </tbody>
      </table>
    </div>
  )
}
