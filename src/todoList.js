import React, {useState} from 'react'


function TodoList () {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    function handleChange(e){
        setInputValue(e.target.value)
      }
      
      function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
      }
      function handleDelete(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
      }
      return (
        <div>
          <h1>Todo List</h1>
          <form>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <button id='subBut' onClick={handleSubmit}>Add Todo</button>
          </form>
          <ol>
            {todos.map((todo, index) => (
              <li key={index}>{todo}
              <button className='elBut' onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ol>
        </div>
      )
    };
  
  export default TodoList;