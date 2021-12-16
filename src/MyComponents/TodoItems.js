import React from 'react'

const Todo=({todo,style,onDelete}) => {
    return <>
    <div className='btn-success mx-auto' style={style}>
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
        <button type="button" class="btn btn-danger" onClick={() =>{onDelete(todo)}}>Delete</button>
    </div>
    </> 
}
export default Todo;