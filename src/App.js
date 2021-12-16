import React, { useState } from 'react'
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  const [todoList, setTodoList] = useState([{ key: 0, title: 'Going For Market', content: 'I have to Go to the Shanichra Market' }, { key: 1, title: 'Office Work', content: 'I have to Work on Office Work' }, { key: 2, title: 'Making Food', content: 'I have to Making Food' }])

  let style = { padding: '20px', width: "600px", borderRadius: '15px', marginTop: '20px' };
  let styleF = { padding: '10px', width: "600px", borderRadius: '5px', width: '100%', textAlign: 'center' };

  const addTodo = (title, content) => {
    const newTodo = {
      key: todoList.length, title: title, content: content
    }
  return setTodoList([...todoList,newTodo])
  
 }

var handleDeleteBtn = (todo) => {
  setTodoList(todoList.filter((e) => {
    return e !== todo;
  })
  )
  console.log("delete clicked", todo)
}

return (
  <div style={{ backgroundColor: 'black' }}>
    <Navbar />
    <AddTodo addTodo={addTodo} />
    <Todos todos={todoList} style={style} onDelete={handleDeleteBtn} />
    <Footer styleF={styleF} />
  </div>
);
}

export default App;