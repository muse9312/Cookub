import React from "react";
import Slider from 'react-animated-slider';
import content from '../component/carousel/content'
import '../assets/css/Main.css'

import Navigation from '../component/Navigation'



function Main() {
  return (
    <>
      <Navigation />
      <div id="ls-1">
        <Slider id="ls-1" autoplay={2200}>
          {content.map((item, index) => (
            <div
              key={index}

              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </>
  );
}

export default Main;