import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import style from './TodoList.module.css';

function TodoList() {

  const [todos,setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){ return;}
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){return;}
    setTodos(prev=>prev.map(item=>(item.id === todoId ? newValue:item)));
  };

  return (
    <>
    <TodoForm onSubmit={addTodo} />
    <div className={style.list}>
      <Todo todos={todos} completeTodo={(id)=>{
        let updatedTodos = todos.map(todo=>{
          if(todo.id === id){
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      }} removeTodo={(id)=>{
        const removedArr = [...todos].filter(todo=>todo.id !==id);
      setTodos(removedArr);
      }}
      updateTodo={updateTodo}/>
    </div>
    </>
  );
}

export default TodoList;