import React, { useState } from 'react';
import Procedure from '../component/procedure/Procedure';
import style from './Modal.module.css'
import TodoList from './todoTest/TodoList';

function Modal({ closeModal }) {

  const [createMod, setCreateMod] = useState(0); 

  return (
    <div className={style.modalBackground}>
      <div className={style.madalContainer}>

        {createMod === 0 && <CreateChap1 closeModal={closeModal} setCreateMod={setCreateMod}/>}
        {createMod === 1 && <CreateChap2 closeModal={closeModal} setCreateMod={setCreateMod}/>}
        {createMod === 2 && <CreateChap3 closeModal={closeModal} setCreateMod={setCreateMod} />}
        {createMod === 3 && <CreateChap4 closeModal={closeModal} setCreateMod={setCreateMod}/>}
        
      </div>
    </div>
  );
}





//챕터1
function CreateChap1({ closeModal, setCreateMod }){
  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title}><h1>레시피 제목을 입력해주세요</h1></div>
      <div >
        <input className={style.input}></input>
      </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => { closeModal(false) }}>나가기</button>
        <button className={style.footerBt2} onClick={()=>{setCreateMod(1)}}>다음단계</button>
      </div>
    </>
  );
}





//챕터2
function CreateChap2({ closeModal, setCreateMod }){
  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title2}><h2>사용되는 재료를 입력해주세요</h2></div>
      <div className={style.modalBody}>
        <TodoList />
      </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => { setCreateMod(0)}}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{setCreateMod(2)}}>다음단계</button>
      </div>
    </>
  );
}





//챕터3
function CreateChap3({ closeModal, setCreateMod, setpro }){
  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title}><h1>조리과정을 입력해주세요</h1></div>
      <div >
        <Procedure />
      </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  setCreateMod(1) }}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{setCreateMod(3)}}>다음단계</button>
      </div>
    </>
  );
}





//챕터4
function CreateChap4({ closeModal, setCreateMod }){
  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title}><h1>추가 정보를 입력해주세요</h1></div>
      <div >
        
      </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  setCreateMod(2) }}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{closeModal(false)}}>완료</button>
      </div>
    </>
  );
}
export default Modal;