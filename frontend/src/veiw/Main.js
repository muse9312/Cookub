import React from "react";
import Navigation from "../component/Navigation"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from '../component/carousel/content'
import '../assets/css/ex.css'



function Main() {
  return (
    <>
      <Navigation />

      <div id="ls-1">
        <Slider autoplay={2200}>
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



      {/* <div className="sl-1">
        <Slider autoplay={500}>
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
      </div> */}





    </>
  );
}

export default Main;