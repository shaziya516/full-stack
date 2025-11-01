import React, { useState } from 'react'

const TodoList = () => {

    const [todo,setTodo] = useState([]);

    const [input , setInput] = useState("");

const handleSubmit = e =>{
     e.preventDefaults() 

     if (input.trim()){
        setTodo([...todo ,input])
        setInput("");
     }
};

const handleChange = e =>{
    setInput(e.target.value)
}



  return (
   <div>
    <h1>Todo List</h1>
    <form  onSubmit={handleSubmit}>
        <input type="text"  value={input} onChange={handleChange} placeholder='Add new Todo'/>
        <button type='submit'>ADD TODO</button>
    </form>

<ul>
    {todo.map((todo , index)=>(
        <li key={index}>{todo}</li>
    ))}
</ul>



   </div>
  )
}

export default TodoList