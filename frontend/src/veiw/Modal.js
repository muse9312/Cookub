import React, { useEffect, useState } from 'react';
import style from './Modal.module.css'
import{RiCloseCircleLine}from 'react-icons/ri';
import{TiEdit} from 'react-icons/ti';
import CreateChap4 from './CreateChap4';

function Modal({ closeModal }) {

  const [createMod, setCreateMod] = useState(0); 
  const [chapter1List, setChapter1List] = useState('');
  const [chapter2List, setChapter2List] = useState([]);
  const [chapter3List, setChapter3List] = useState([]);
  const [chapter4List, setChapter4List] = useState();

  const [cookMethods, setCookMethods] = useState([]);
  

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
                          setChapter3List={setChapter3List}
                          setCookMethods={setCookMethods} />}
        {createMod === 3 && <CreateChap4 
                          closeModal={closeModal} 
                          setCreateMod={setCreateMod}
                          chapter1List={chapter1List}
                          chapter2List={chapter2List}
                          chapter3List={chapter3List}
                          chapter4List={chapter4List}
                          setChapter4List={setChapter4List}
                          cookMethods={cookMethods}/>}
      </div>
    </div>
  );
  
  



//??????1
function CreateChap1({ closeModal, setCreateMod }){

  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
      <form>
        <div className={style.title}><h1>????????? ????????? ??????????????????</h1></div>
        <div >
          <input className={style.input}
                placeholder={window.sessionStorage.getItem("title")?window.sessionStorage.getItem("title"):null}
                type="text"
                name='recipeTitle' 
                id="recipe" 
                label="recipe"></input>
        </div>
        <div className={style.footer}>
          <button className={style.footerBt} onClick={() => { 
                      closeModal(false)
                      window.sessionStorage.clear(); }}>?????????</button>
          <button className={style.footerBt2} type='submit'
                    onClick={(e)=>{
                      e.preventDefault();
                      let test = document.querySelector('[name=recipeTitle]').value
                      window.sessionStorage.setItem("title",test);
                      setCreateMod(1)
                      }}>????????????</button>
        </div>
      </form>
    </>
  );
}



//??????2
function CreateChap2({ closeModal, setCreateMod,chapter2List, setChapter2List }){
  const [ingreList, setIngreList] = useState([]);
  

  useEffect(()=>{
    setIngreList(chapter2List) 
    //??????2??? ?????????????????? chapter2List ?????????????????? ??????????????? ????????????
    //???????????? ????????? ????????? ????????? chapter2List?????? ????????????. 
    //??????????????? ??????????????? ???????????? ????????? ???????????? ????????? ???????????? ????????? ?????? ????????? ?????????.
  },[]);

  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
      <div className={style.title2}><h2>???????????? ????????? ??????????????????</h2></div>
      <div >
        <form >  
          <input 
            placeholder="????????? ???????????????."
            type="text"
            name="ingre_list"
            id="ingre" 
            label="ingre"
            className={style.proc_input}></input> 

          <button type='submit' className={style.proc_button} onClick={(e)=>{
            e.preventDefault();
            let copy = [...ingreList]
            copy.push({ingredientName:document.querySelector('[name=ingre_list]').value, amount:"??????????????????"})
            setIngreList(copy);
            document.querySelector('[name=ingre_list]').value=""; //???????????????
             } } >??????</button>
        </form>

        <div className={style.lists}>
          {ingreList && ingreList.map((value, index)=>{
            const indexStr = index.toString();
            const gram = "gramIndex" + indexStr;
          return(
            <div className={style.proc_row}>
              <div className={style.list_item}>{value.ingredientName}</div>
              <div className={style.inputAndDelete}>
                <input placeholder={value.amount ? value.amount:0} type="text" name={gram} id="gram" className={style.amount_textInput} ></input>
                <div><RiCloseCircleLine className={style.delete_icon} onClick={(e)=>{
                  e.preventDefault();
                  let copy = [...ingreList];
                  delete copy[indexStr];
                  let removeList = copy.filter(i => i !== null);//????????? ????????? delete ??? ????????? empty ??????
                  setIngreList(removeList);
                }}/></div>
              </div>
            </div>
              )  
          })} 
        </div>
    </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => { 
                setChapter2List(ingreList)
                setCreateMod(0)}}>????????????</button>
        <button className={style.footerBt2} onClick={()=>{

                for(var i=0;i<ingreList.length;i++){
                  let copy = [...ingreList];
                  copy[i].amount = document.querySelector(`[name=gramIndex${i}]`).value;
                  setIngreList(copy);
                }

                console.log(ingreList)

                window.sessionStorage.setItem("ingredients",JSON.stringify(ingreList))
                setChapter2List(JSON.parse(window.sessionStorage.getItem("ingredients")))
                setCreateMod(2)
          }}>????????????</button>
      </div>
    </>
  );

  
}



//??????3
function CreateChap3({ closeModal, setCreateMod, chapter3List, setChapter3List, setCookMethods }){

  const [procList, setProcList] = useState([]);
  const [stepNum, setStepNum] = useState(1);
  const [descImg, setDescImg] =  useState([]);

  useEffect(()=>{
    setProcList(chapter3List);
  },[]);


  return(
    <>
      <button onClick={() => { closeModal(false)
                              window.sessionStorage.clear()
                               }} className={style.closeBt}>X</button>
      <div className={style.title}><h1>??????????????? ??????????????????</h1></div>
      <div >
        <form >  
        <input 
          placeholder="??????????????? ???????????????.."
          type="text"
          name="proc_list"
          id="proc" 
          label="proc"
          className={style.proc_input}
        ></input>
          <button type='submit' className={style.proc_button} onClick={(e)=>{
            e.preventDefault();
            let copy = [...procList];
            copy.push({step:stepNum, description:document.querySelector('[name=proc_list]').value, picture:""});
            setStepNum(stepNum + 1); //??????????????? 0????????? ?????? 1?????? ???????????? ??????
            setProcList(copy);
            document.querySelector('[name=proc_list]').value="";
          } } >??????</button>
        </form>
      <div className={style.lists}>
        {procList.map((value,index)=>(
        <div className={style.proc_row}>
          <div className={style.list_item} key={value}>{value.description}</div>
          <div className={style.fileAndIcon}>
            <input type="file" placeholder="???????????? ????????????" className={style.image_fileInput} 
            class="hidden" onChange={(e)=>{
                  const file = e.target.files[0];//???????????? ?????? ??????????????????
                  //??????????????? ???????????? ""??????????????? ????????? ???????????? ????????? ???????????? ?????????????????? ??????4?????? ??????!!!
                  let copy = [...procList];
                  copy[index].picture = file.name;
                  setProcList(copy);

                  setDescImg([...descImg,e.target.files[0]]) //????????? ????????? ??????????????? ????????? ????????? append?????? ??????

            }}/>
            <div><TiEdit className={style.edit_icon} /></div> {/* ?????????????????? ?????? ????????? */}
          </div>
        </div>
        ))}
      </div>
    </div>
      <div className={style.footer}>
        <button className={style.footerBt} onClick={() => {  
          setCreateMod(1)
          setChapter3List(procList)
         }}>????????????</button>
        <button className={style.footerBt2} onClick={()=>{
          setChapter3List(procList)
          window.sessionStorage.setItem("cookMethods",JSON.stringify(procList))
          console.log(descImg);
          setCookMethods(descImg); //?????? ?????? ??????????????? ????????????
          setCreateMod(3)
          }}>????????????</button>
      </div>
    </>
  );
}

}
export default Modal;