import React, { useCallback, useEffect, useState } from 'react';
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
function CreateChap1({ closeModal, setCreateMod }){

  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
      <form>
        <div className={style.title}><h1>레시피 제목을 입력해주세요</h1></div>
        <div >
          <input className={style.input}
                placeholder={window.sessionStorage.getItem("title")}
                type="text"
                name='recipeTitle' 
                id="recipe" 
                label="recipe"></input>
        </div>
        <div className={style.footer}>
          <button className={style.footerBt} onClick={() => { 
                      closeModal(false)
                      window.sessionStorage.clear(); }}>나가기</button>
          <button className={style.footerBt2} type='submit'
                    onClick={(e)=>{
                      e.preventDefault();
                      let test = document.querySelector('[name=recipeTitle]').value
                      window.sessionStorage.setItem("title",test);
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
    setIngreList(chapter2List) 
    //챕터2로 돌아왔을때는 chapter2List 스테이트에서 값을가져와 보여주고
    //다음단계 버튼을 누르면 세션과 chapter2List둘다 저장된다. 
    //세션에서만 값을가져와 보여주는 방식을 사용하려 했으나 초기값이 없을때 계속 문제가 발생함.
  },[]);

  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
      <div className={style.title2}><h2>사용되는 재료를 입력해주세요</h2></div>
      <div >
        <form >  
          <input 
            placeholder="재료를 입력하세요."
            type="text"
            name="ingre_list"
            id="ingre" 
            label="ingre"
            className={style.proc_input}></input> 

          <button type='submit' className={style.proc_button} onClick={(e)=>{
            e.preventDefault();
            let copy = [...ingreList]
            copy.push({ingredientName:document.querySelector('[name=ingre_list]').value, amount:"재료량미기입"})
            setIngreList(copy);
            document.querySelector('[name=ingre_list]').value=""; //인풋초기화
             } } >추가</button>
             {console.log(ingreList)}
        </form>

        <div className={style.lists}>
          {ingreList && ingreList.map((value, index)=>{
            const indexStr = index.toString();
            const gram = "gramIndex" + indexStr;
          return(
            <div className={style.proc_row}>
              <div className={style.list_item}>{value.ingredientName}</div>
              <from>
                <input placeholder={value.amount ? value.amount:0} type="text" name={gram} id="gram"></input>
                <button type='submit' onClick={(e)=>{
                  e.preventDefault();
                  let copy = [...ingreList];
                  const gramName = "[name=" + gram + "]"
                  copy[index].amount = Number(document.querySelector(gramName).value);
                  setIngreList(copy);
                }}>입력</button>
              </from>
              <div><RiCloseCircleLine className={style.delete_icon} onClick={(e)=>{
                e.preventDefault();
                let copy = [...ingreList];
                delete copy[indexStr];
                let removeList = copy.filter(i => i !== null);//이코드 없으면 delete 한 자리에 empty 생김
                setIngreList(removeList);
              }}/></div>
            </div>
              )  
          })} 
        </div>
    </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => { 
                setChapter2List(ingreList)
                setCreateMod(0)}}>이전단계</button>
        <button className={style.footerBt2} onClick={()=>{
                window.sessionStorage.setItem("ingredients",JSON.stringify(ingreList))
                setChapter2List(JSON.parse(window.sessionStorage.getItem("ingredients")))
                setCreateMod(2)
          }}>다음단계</button>
      </div>
    </>
  );

  
}



//챕터3
function CreateChap3({ closeModal, setCreateMod, chapter3List, setChapter3List }){

  const [procList, setProcList] = useState([]);
  const [stepNum, setStepNum] = useState(1);

  useEffect(()=>{
    setProcList(chapter3List);
  },[]);


  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
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
            let copy = [...procList];
            copy.push({step:stepNum, description:document.querySelector('[name=proc_list]').value});
            setStepNum(stepNum + 1); //조리순서는 0부터가 아닌 1부터 시작으로 셋팅
            setProcList(copy);
            document.querySelector('[name=proc_list]').value="";
          } } >등록</button>
        </form>
      <div className={style.lists}>
        {procList.map((value,index)=>(
        <div className={style.proc_row}>
          <div className={style.list_item} key={value}>{value.description}</div>
          <div><TiEdit className={style.delete_icon} /></div> {/* 수정하기기능 구현 해야됨 */}
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
          console.log(procList);
          window.sessionStorage.setItem("cookMethods",JSON.stringify(procList))
          setCreateMod(3)
          }}>다음단계</button>
      </div>
    </>
  );
}





//챕터4
function CreateChap4({ closeModal, setCreateMod, chapter4List,chapter1List,chapter2List,chapter3List, setChapter4List }){
  const [chap4info, setChap4info]= useState([]);
  const [keyword, setKeyword] = useState([]);

  useEffect(()=>{
    setChap4info(chapter4List);
    console.log(chap4info);
  },[]);


  return(
    <>
    <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
    <div className={style.container}>
        <div className={style.item}>
            <input name="keypoint" 
                    className={style.keypoint} 
                    placeholder={chap4info === undefined ? "Keypoint를 적어주세요!" : chap4info.keypoint}
                    ></input>
        </div>

        <div className={style.item}>
          <div className={style.HashWrapOuter}></div>
          <form>
            <input placeholder='키워드 입력'
                  type="text"
                  name="keyword_input"
                  id="keyword_input" 
                  label="keyword_input"
                ></input>
            <button type='submit' onClick={(e)=>{
              e.preventDefault();
              let copy =  [...keyword]
              copy.push({"keywordName":document.querySelector('[name=keyword_input]').value})
              setKeyword(copy)
              document.querySelector('[name=keyword_input]').value="";
            }}>추가</button>
            <button onClick={(e)=>{
              e.preventDefault();
              let copy = [...keyword]
              delete copy[copy.length-1]
              let removeCopy = copy.filter(i => i !== null);
              setKeyword(removeCopy)
            }}>제거</button>
          </form>
          <div>
            {keyword.map((value)=>(
            <span className={style.hashtag}>#{value.keywordName}</span>
            ))}
          </div>
          
          
        </div>  

        <div className={style.item}>
        <Autocomplete
            className={style.dropbox1}
            disablePortal
            id="combo-box-demo"
            options={['공개','비공개']}
            sx={{ width: 170 }}
            renderInput={(params) => 
            <TextField name="publicOrNot" {...params} 
                        label={chap4info === undefined ? "레시피 공개 여부" : chap4info.publicOrNot} />} />
        </div>

        <div className={style.item}>
          <Autocomplete
            className={style.dropbox2}
            disablePortal
            id="combo-box-demo"
            options={['상','중','하']}
            sx={{ width: 150 }}
            renderInput={(params) => 
            <TextField name="recipeLevel" {...params} 
                        label={chap4info === undefined ? "요리난이도" : chap4info.recipeLevel} />} />
        </div>

        <div className={style.item}>
          <input className={style.cooktime_input} name='cookingTime' 
                  placeholder={chap4info === undefined ? "조리시간 (Minute)" : chap4info.cookingTime}
                ></input>
          <BsFillAlarmFill size="20" color="gray"/>
        </div>

        <div className={style.item}>
          <Input accept="image/*" id="icon-button-file" name="file" type="file" />
        </div>
      </div>

      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  
                            const keypoint = document.querySelector('[name=keypoint]').value;
                            const publicOrNot = document.querySelector('[name=publicOrNot]').value;
                            const recipeLevel = document.querySelector('[name=recipeLevel]').value;
                            const cookingTime = Number(document.querySelector('[name=cookingTime]').value);
                            const file = document.querySelector('[name=file]').value;
                            let obj = {keypoint:keypoint,
                                      publicOrNot:publicOrNot,
                                      recipeLevel:recipeLevel,
                                      cookingTime:cookingTime,
                                      file:file};

                            setChap4info(obj)
                            setChapter4List(obj)
                            setCreateMod(2)
                             }}>이전단계</button>

        <button className={style.footerBt2} onClick={(e)=>{
                            e.preventDefault();

                            const keypoint = document.querySelector('[name=keypoint]').value;
                            const publicOrNot = document.querySelector('[name=publicOrNot]').value === '공개'
                                                ? 1
                                                : 0;  //공개면 1 비공개면 0을 저장.
                            const recipeLevel = document.querySelector('[name=recipeLevel]').value;
                            const cookingTime = Number(document.querySelector('[name=cookingTime]').value); //조리시간을 int로
                            const file = document.querySelector('[name=file]').value;
                            let obj = {keypoint:keypoint,
                                      publicOrNot:publicOrNot,
                                      recipeLevel:recipeLevel,
                                      cookingTime:cookingTime,
                                      file:file};

                            setChap4info(obj)
                            setChapter4List(obj)

                            window.sessionStorage.setItem("level",recipeLevel)
                            window.sessionStorage.setItem("keypoint",keypoint)
                            window.sessionStorage.setItem("isOpenable",publicOrNot)
                            window.sessionStorage.setItem("cookingTime",cookingTime)
                            window.sessionStorage.setItem("likeCnt","")
                            window.sessionStorage.setItem("views",0)
                            window.sessionStorage.setItem("keywordList",JSON.stringify(keyword))
                            
                            
                            // const val={
                            //   "title":window.sessionStorage.getItem("title"),
                            //   "level":recipeLevel,
                            //   "keypoint":keypoint,
                            //   "isOpenable":publicOrNot,
                            //   "cookingTime":cookingTime,
                            //   "likeCnt":0,
                            //   "views":0,
                            //   "cookMethods":JSON.parse(window.sessionStorage.getItem("cookMethods")),
                            //   "ingredients":JSON.parse(window.sessionStorage.getItem("ingredients")),
                            //   "keywordList":keyword
                            // };

                            const val={
                              "title":window.sessionStorage.getItem("title"),
                              "level":recipeLevel,
                              "keypoint":keypoint,
                              "isOpenable":publicOrNot,
                              "cookingTime":cookingTime,
                              "likeCnt":0,
                              "views":0,
                              "cookMethods":JSON.parse(window.sessionStorage.getItem("cookMethods")),
                              "ingredients":JSON.parse(window.sessionStorage.getItem("ingredients")),
                              "keywordList":JSON.parse(window.sessionStorage.getItem("ingredients"))
                            }
                           
                            axios //로그인된 사용자의 userId를 우선 하드코딩해서 넣어놨다. 
                              .post(`http://localhost:8080/mypage/recipe/2`, JSON.stringify(val), {
                                headers: {
                                  "Content-Type": `application/json`,
                                },
                              })
                              .then((res) => {
                                console.log(res);
                              })
                            closeModal(false)
                            }}>완료</button>
      </div>
    </>
  );
}}
export default Modal;