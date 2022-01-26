import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

function Procedure() {

  let state = useSelector((state)=>state);
  let dispatch = useDispatch();

  return (

    <div>
      <form >  
      <input 
        placeholder="조리과정을 입력하세요.."
        type='text'
      ></input>
        <button type='submit' onClick={(e)=>{
          dispatch({type:'add', payload:e.target.value})
          console.log(state.reducer3)
        } } >등록</button>
        
      </form>
    </div>
  );
}


export default Procedure;