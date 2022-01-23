import React from "react";
import { Link } from "react-router-dom";
import img from '../assets/img/testfood.jpg';
import style from './Board.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardDetail from './BoardDetail.js';




function Board() {
  return (
      <section className={style.container}>
        <div className={style.public_recipes}>
          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>
          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>

          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>

          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>

          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>

          <div className={style.recipe}>
            <Link to="/board/detail" >
              <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
              <h2 className={style.recipe_title}>랍스터 카르파치오</h2>
              <h5 className={style.recipe_title2}>Lobster Carpaccio</h5>
              <ul className={style.recipe_genres}>Italia | Lobster | Finger Lime</ul>
              <p className={style.recipe_summary}>
                랍스터의 껍질을 제거한 뒤 오렌지, 다임, 소금, 후추를 넣고
                진공한 뒤 수비드 56도씨에서 2시간 돌린다 비스큐소스, 오렌지주스, 
                화이트와인비...
                </p>
            </Link>
          </div>
        </div>
      </section>
  );
}

export default Board;