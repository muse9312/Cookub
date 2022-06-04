import React from "react";
import ReactLoading from "react-loading";
import { Section, Article, list2 } from "./generic";

const LoadingBar = () =>{
  return(
    <>
      <Section>
        <Article key={list2.prop}>
          <ReactLoading type={list2.prop} color="#999A9A" />
        </Article>
      </Section>
    </>
  )
}
export default LoadingBar;