import React, { useEffect, useRef, useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm(props) {
  const[input, setInput] = useState(props.edit ? props.edit.value:'');

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  });

  const handleChange = e =>{
    setInput(e.target.value);
  }

  const handleSubmit = e=>{
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text: input
    });
    setInput('');
  };

  return (
    <form className={style.todo_form} onSubmit={handleSubmit}>
      {props.edit ?(
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className={style.todo_input}
            />
          <button onClick={handleSubmit} className={style.todo_button}>
            수정
          </button>
        </>):(
          <>
            <input
            placeholder='재료를 입력하고 엔터를 눌러주세요'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className={style.todo_input}
            />
            <button onClick={handleSubmit} className={style.todo_button}>
              추가
            </button>
          </>
        )}
    </form>
  );
}

export default TodoForm;