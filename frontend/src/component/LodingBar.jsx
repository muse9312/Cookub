import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Section, Article, list2 } from "./generic";

const LoadingBar = () =>{
  return(
    <>
      <Section>
        <Article key={list2.prop}>
          <ReactLoading type={list2.prop} color="#2c2c2c" />
        </Article>
      </Section>
    </>
  )
}
export default LoadingBar;