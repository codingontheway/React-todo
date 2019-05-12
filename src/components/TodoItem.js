import React from 'react'

export default function TodoItem(props) {
    const {id, text, checked} = props.todo
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{text}</td>
        <td><input type="checkbox" /></td>
        <td><button type="button" className="btn btn-danger">DELETE</button></td>
    </tr>
  )
}
