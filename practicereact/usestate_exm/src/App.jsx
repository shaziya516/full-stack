import  { useState } from 'react'
import TodoList from './component/TodoList';
import Profile from './component/Profile';

const App = () => {

  const [count,setCount]=useState(0);

  const handler = ()=>{
    setCount((count)=>count+1);
  };




  return (
    <section>
      <h1>count :{count}</h1>
      <button onClick={handler}>Increment</button>
      {/* <TodoList/> */}
      <Profile/>
    </section>
  )
}

export default App;