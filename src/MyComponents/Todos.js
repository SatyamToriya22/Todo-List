import React from 'react'
import Todo from './TodoItems'
export default function Todos(props) {
    return <>
    {props.todos.length===0 ?
    <h2 className='btn-success mx-auto' style={props.style, {textAlign:'center',margin:'20px',padding:'20px'}}>No Todo Items Left</h2>
    :
    <div className='d-grid gap-2 position-relative' style={{marginBottom:'10px'}}>
    {props.todos.map((todo) => <Todo key={todo.key}todo={todo} style={props.style} onDelete={props.onDelete}/>)}
    <br/>
    </div>
    }
    </>
}