import React, { useEffect, useState } from 'react';
import style from './Modal.module.css'
import TodoList from './todoTest/TodoList';
import{RiCloseCircleLine}from 'react-icons/ri';
import{TiEdit} from 'react-icons/ti';
import { BsFillAlarmFill } from "react-icons/bs";
import Input from '@mui/material/Input';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import axios from 'axios';

function Modal({ closeModal }) {

  const [createMod, setCreateMod] = useState(0); 
  const [chapter1List, setChapter1List] = useState('');
  const [chapter2List, setChapter2List] = useState([]);
  const [chapter3List, setChapter3List] = useState([]);
  const [chapter4List, setChapter4List] = useState();
  

  return (
    <div className={style.modalBackground}>
      <div className={style.madalContainer}>

        {createMod === 0 && <CreateChap1
                          closeModal={closeModal}
                          setCreateMod={setCreateMod}
                          setChapter1List={setChapter1List}
                          chapter1List={chapter1List}/>}
        {createMod === 1 && <CreateChap2 
                          closeModal={closeModal}
                          setCreateMod={setCreateMod}
                          chapter2List={chapter2List}
                          setChapter2List={setChapter2List}/>}
        {createMod === 2 && <CreateChap3 
                          closeModal={closeModal} 
                          setCreateMod={setCreateMod}
                          chapter3List={chapter3List}
                          setChapter3List={setChapter3List} />}
        {createMod === 3 && <CreateChap4 
                          closeModal={closeModal} 
                          setCreateMod={setCreateMod}
                          chapter1List={chapter1List}
                          chapter2List={chapter2List}
                          chapter3List={chapter3List}
                          chapter4List={chapter4List}
                          setChapter4List={setChapter4List}/>}
      </div>
    </div>
  );
  
  



//챕터1
function CreateChap1({ closeModal, setCreateMod ,setChapter1List, chapter1List}){

  const [recipeTitle, setRecipeTitle] = useState('');

  useEffect(()=>{
    setRecipeTitle(chapter1List);
  },[]);

  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <form>
        <div className={style.title}><h1>레시피 제목을 입력해주세요</h1></div>
        <div >
          <input className={style.input}
                placeholder={recipeTitle}
                type="text"
                name='recipeTitle' 
                id="recipe" 
                label="recipe"></input>
        </div>
        <div className={style.footer}>
          <button className={style.footerBt} onClick={() => { closeModal(false) }}>나가기</button>
          <button className={style.footerBt2} type='submit'
                    onClick={(e)=>{
                      e.preventDefault();
                      let test = document.querySelector('[name=recipeTitle]').value
                        setRecipeTitle(test)
                        setChapter1List(test)
                        setCreateMod(1)
                        }}>다음단계</button>
        </div>
      </form>
    </>
  );
}



//챕터2
function CreateChap2({ closeModal, setCreateMod,chapter2List, setChapter2List }){
  const [ingreList, setIngreList] = useState([]);

  useEffect(()=>{
    setIngreList(chapter2List);
  },[]);

  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title2}><h2>사용되는 재료를 입력해주세요</h2></div>
      <div >
        <form >  
          <input 
            placeholder="사용되는 재료를 입력하세요."
            type="text"
            name="ingre_list"
            id="ingre" 
            label="ingre"
            className={style.proc_input}></input>
          <button type='submit' className={style.proc_button} onClick={(e)=>{
            e.preventDefault();
            let test = [...ingreList];
            test.push(document.querySelector('[name=ingre_list]').value);
            document.querySelector('[name=ingre_list]').value="";
            setIngreList(test);
             } } >추가</button>
        </form>
        <div className={style.lists}>
          {ingreList.map((value)=>(
            <div className={style.proc_row}>
              <div className={style.list_item}>{value}</div>
              <div>
                <RiCloseCircleLine className={style.delete_icon}/>
                <TiEdit className={style.edit_icon}/>
              </div>
            </div>
          ))}
        </div>
    </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => { 
                setChapter2List(ingreList)
                setCreateMod(0)}}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{
                setChapter2List(ingreList)
                setCreateMod(2)
          }}>다음단계</button>
      </div>
    </>
  );
}



//챕터3
function CreateChap3({ closeModal, setCreateMod, chapter3List, setChapter3List }){

  const [procList, setProcList] = useState([]);

  useEffect(()=>{
    setProcList(chapter3List);
  },[]);


  return(
    <>
      <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
      <div className={style.title}><h1>조리과정을 입력해주세요</h1></div>
      <div >
        <form >  
        <input 
          placeholder="조리과정을 입력하세요.."
          type="text"
          name="proc_list"
          id="proc" 
          label="proc"
          className={style.proc_input}
        ></input>
          <button type='submit' className={style.proc_button} onClick={(e)=>{
            e.preventDefault();
            let test = [...procList];
            test.push(document.querySelector('[name=proc_list]').value);
            document.querySelector('[name=proc_list]').value="";
            setProcList(test);
          } } >등록</button>
        </form>
      <div className={style.lists}>
        {procList.map((value)=>(
        <div className={style.proc_row}>
          <div className={style.list_item}>{value}</div>
          <div>
            <RiCloseCircleLine className={style.delete_icon}/>
            <TiEdit className={style.edit_icon}/>
          </div>
        </div>
        ))}
      </div>
    </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  
          setCreateMod(1)
          setChapter3List(procList)
         }}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{
          setChapter3List(procList)
          setCreateMod(3)
          }}>다음단계</button>
      </div>
    </>
  );
}





//챕터4
function CreateChap4({ closeModal, setCreateMod, chapter4List,chapter1List,chapter2List,chapter3List, setChapter4List }){
  const [chap4info, setChap4info]= useState();

  useEffect(()=>{
    setChap4info(chapter4List);
  },[]);

  return(
    <>
    <button onClick={() => { closeModal(false) }} className={style.closeBt}>X</button>
    <div >
          <input name="keypoint" 
                className={style.keypoint} 
                placeholder="Keypoint를 적어주세요!"
                // placeholder={chap4info.keypoint === null ?"Keypoint를 적어주세요!":chap4info.keypoint}
                ></input>
        </div>
    <div className={style.container}>
        
        <div className={style.item}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={['공개','비공개']}
            sx={{ width: 170 }}
            renderInput={(params) => <TextField name="publicOrNot" {...params} label="레시피 공개 여부" />} />
        </div>
        <div className={style.item}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={['상','중','하']}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField name="recipeLevel" {...params} label="요리난이도" />} />
        </div>
        <div className={style.item}>
          <input className={style.cooktime_input} name='cookingTime' 
                  placeholder="조리시간 (Minute)"
                // placeholder={chap4info.cookingTime === null ?"조리시간 (Minute)":chap4info.cookingTime}
                ></input>
          <BsFillAlarmFill size="20" color="gray"/>
        </div>
        <div className={style.item}>
          <Input accept="image/*" id="icon-button-file" name="file" type="file" />
        </div>
      </div>

      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  
                            setCreateMod(2)
                            const keypoint = document.querySelector('[name=keypoint]').value;
                            const publicOrNot = document.querySelector('[name=publicOrNot]').value;
                            const recipeLevel = document.querySelector('[name=recipeLevel]').value;
                            const cookingTime = document.querySelector('[name=cookingTime]').value;
                            const file = document.querySelector('[name=file]').value;
                            let obj = {keypoint:keypoint,publicOrNot:publicOrNot,recipeLevel:recipeLevel,
                              cookingTime:cookingTime,file:file};
                            setChap4info(obj)
                            setChapter4List(obj)
                             }}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{
                            const keypoint = document.querySelector('[name=keypoint]').value;
                            const publicOrNot = document.querySelector('[name=publicOrNot]').value;
                            const recipeLevel = document.querySelector('[name=recipeLevel]').value;
                            const cookingTime = document.querySelector('[name=cookingTime]').value;
                            const file = document.querySelector('[name=file]').value;
                            let obj = {keypoint:keypoint,publicOrNot:publicOrNot,recipeLevel:recipeLevel,
                              cookingTime:cookingTime,file:file};
                            setChap4info(obj)
                            setChapter4List(obj)

                            // const formData = new FormData();
                            
                            // formData.append('chapter1List' , chapter1List)
                            // console.log(chapter1List);
                            // formData.append('chapter2List' , chapter2List)
                            // console.log(chapter2List);
                            // formData.append('chapter3List' , chapter3List)
                            // console.log(chapter3List);
                            // formData.append('chapter4List' , chapter4List)
                            // console.log(chapter4List);
                            const val={
                              title:chapter1List,
                              level:chapter4List.recipeLevel,
                              keypoint:chapter4List.keypoint,
                              isOpenable:chapter4List.publicOrNot,
                              cookingTime:chapter4List.cookingTime,
                              likeCnt:0,
                              views:0,
                              cookMethods:chapter3List,
                              ingredients:chapter2List,
                              keywordList:[]};
                            console.log(val);
                            const userId = 1;
                            axios
                              .post(`http://localhost:8080/mypage/recipe/${userId}`, JSON.stringify(val), {
                                headers: {
                                  "Content-Type": `application/json`,
                                },
                              })
                              .then((res) => {
                                console.log(res);
                              })
                            // closeModal(false)
                            }}>완료</button>
      </div>
    </>
  );
}}
export default Modal;