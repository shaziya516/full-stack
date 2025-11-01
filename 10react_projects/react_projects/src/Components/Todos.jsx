
import React from 'react'
import { useState } from 'react'
import '../style1.css';

const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => {

            return todos.concat({

                text: input,

                id: Math.floor(Math.random() * 10),
            });
        });

        setInput(" ");
    };

    const removeTodo = (id) =>
        setTodos((todos) => todos.filter((t) => t.id != id));




    return (
        <div className="container">
            <input type="text " placeholder='New Todos' value={input} onChange={e => setInput(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>


            <ul className="todos-list">
                {todos.map(({ text, id }) => (
                    <li className='todos' key={id}>


                        <div>
                            <span>{text}</span>
                        </div>

                        <div>

                            <button className='close' onClick={() => removeTodo(id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default Todos;