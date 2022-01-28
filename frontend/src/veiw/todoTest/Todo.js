import React, { useState } from 'react';
import TodoForm from './TodoForm';
import{RiCloseCircleLine}from 'react-icons/ri';
import{TiEdit} from 'react-icons/ti';
import style from './Todo.module.css';

const Todo = ({todos, completeTodo, removeTodo, updateTodo})=>{
  
  const[edit, setEdit]=useState({id:null, value:''});

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({id:null, value:''});
  };

  if(edit.id){
    return<TodoForm edit={edit} onSubmit={submitUpdate}/>;
  }

  return todos.map((todo,index)=> (
    <div className={todo.isComplete ? style.complete : style.todo_row}
      key={index}>
        <div className={style.list}>
          <div className={style.icons}>
            <div className={style.list_item} key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}</div>
            <div className={style.icon}>
              <input className={style.gram} placeholder='재료량'/>
              <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
              className={style.delete_icon}/>
              <TiEdit onClick={()=>setEdit({id:todo.id, value:todo.text})}
              className={style.edit_icon}/>
            </div>
          </div>
        </div>
    </div>
  ));
}

export default Todo;