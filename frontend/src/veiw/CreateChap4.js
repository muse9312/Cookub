import React, { useEffect, useState } from 'react';
import style from './Modal.module.css'
import { BsFillAlarmFill } from "react-icons/bs";
import Input from '@mui/material/Input';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import Cookies from 'universal-cookie';
import AWS from 'aws-sdk';




function CreateChap4({ closeModal, setCreateMod, chapter4List,chapter1List,chapter2List,chapter3List, setChapter4List, cookMethods}){
  const [chap4info, setChap4info]= useState([]);
  const [keyword, setKeyword] = useState([]);

  const cookies = new Cookies();

  useEffect(()=>{
    setChap4info(chapter4List);
    console.log(cookMethods);//챕터3에서 넘어온 만드는법에 첨부되는 사진들
  },[]);

  //아래 코드는 S3용코드
  const[selectedFile, setSelectedFile] = useState([]);
  const[foodImg, setFoodImg] = useState("");

  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  // const RESION = 'us-east-2';
  // const S3_BUCKET = 's3-bucket-react-file-upload-test-5jo';
  const RESION = 'us-east-2';
  const S3_BUCKET = '5jo-test';


  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
  });

  const myBucket = new AWS.S3({
    params : {Bucket: S3_BUCKET},
    region : RESION,
  })
  const handleFileInput = e =>{
    const file = e.target.files[0];
    const randomName = Math.random().toString(36).substr(2,11);
    const imgName = randomName +"_"+ file.name  
    console.log(imgName);
    setFoodImg(imgName)
    const fileExt = file.name.split('.').pop();  //파일익스텐션값 가져오기
    if(file.type !== 'image/jpeg' || fileExt !=='jpg'){ //파일타입과 익스텐션이 jpg인것만
      alert('jpg 파일만 업로드 가능합니다.');
      return;
    }
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = file => { //챕터4!의 사진을 업로드 하는 코드
    const params = {
      Bucket: S3_BUCKET,
      Key: "upload/" + foodImg,
      Body: file
    };
    myBucket.putObject(params)
    .on('httpUploadProgress',(evt)=>{
      setTimeout(()=>{
        setSelectedFile(null);
      }, 3000)
    })
    .send((err)=>{
      if(err)console.log(err)
    })
  }

    const uploadFile2 = (file,i) => { //챕터3!의 사진들을 업로드하는 코드
      //아래 4줄의 코드는 챕터3에서 저장한 세션데이터준 DB에 저장될 사진이름을 고치는 코드임.
      const randomName = Math.random().toString(36).substr(2,11);
      let sessionData = JSON.parse(window.sessionStorage.getItem("cookMethods"))
      let newFileName = randomName + "_"+ file.name;

      sessionData.map((v,i)=>{  //세션의 cookMethods 를 반복문돌려
        if(v.picture === file.name){   //file이름을 가지고 있는 인덱스를 찾기위한 조건문
          sessionData[i].picture = newFileName;  //기존에 파일 이름이 있는 새로운 파일 이름을 넣기
        }
      })
      // sessionData[i].picture = randomName + "_"+ file.name;

      window.sessionStorage.setItem("cookMethods",JSON.stringify(sessionData))

      const params = {
        Bucket: S3_BUCKET,
        Key: "upload/" + randomName + "_"+ file.name,
        Body: file
      };
      myBucket.putObject(params)
      .on('httpUploadProgress',(evt)=>{
        setTimeout(()=>{
          setSelectedFile(null);
        }, 3000)
      })
      .send((err)=>{
        if(err)console.log(err)
      })
  }//S3 업로드 코드


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
          <br/>
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
          <Input accept="image/*" id="icon-button-file" name="file" type="file" onChange={handleFileInput}/>
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

                            uploadFile(selectedFile)//레시피 썸네일 사진 S3 업로드코드!
                            console.log(selectedFile);

                            cookMethods.map((file,i)=>{
                              uploadFile2(file,i)
                              //새로정의한 함수는 세션정보를 넣다뺐다하면서 사진이름을 바꾸는데 이때 사용하는 index번호를 매개변수로 추가전달해준다.
                              console.log(file);
                            })
                            

                            
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
                              "keywordList":JSON.parse(window.sessionStorage.getItem("keywordList")),
                              "foodImage" : foodImg
                            }
                           
                            axios //로그인된 사용자의 userId를 우선 하드코딩해서 넣어놨다. 
                              .post(`http://${process.env.REACT_APP_HOST}/mypage/recipe/${cookies.get('userId')}`, JSON.stringify(val), {
                                headers: {
                                  "Content-Type": `application/json`,
                                },
                              })
                              .then((res) => {
                                console.log(res);
                                closeModal(false) 
                                console.log(val);
                                // window.location.href = 'http://localhost:3000/mypage';
                                // window.sessionStorage.clear()
                              })

                            
                            
                            }}>완료</button>
      </div>
    </>
  );
}
export default CreateChap4;