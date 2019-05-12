import React from 'react'

export default function TodoItem(props) {
    const {id, text, checked} = props.todo
  return (
    <tr>
        <th scope="row">{id}</th>
        <td style={checked ? {textDecoration : 'line-through'} : {}}>{text}</td>
        <td><input type="checkbox" onChange={props.checkToggle.bind(this,id)}/></td>
        <td><button type="button" className="btn btn-success" onClick={props.deleteClick.bind(this,id)}>DELETE</button></td>
    </tr>
  )
}

