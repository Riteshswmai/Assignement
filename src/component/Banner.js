import React from "react";
import { Image } from 'react-native'
import './Banner.css'
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
          <Image 
  source={require('./rk.jpg')}  
  style={{width: 400, height: 400, borderRadius: 400/ 2}} 
/>
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Ritesh Kumar</h6>
            <h3>Frontend Developer</h3>
            <p>
              
From Pilani, Rajasthan. 
I am pursuing my graduation from Lovely Professional University. My current CGPA is 7.2.<br/>
My goal is to get a job in a reputed company.<br/>
My strengths are I'm a hardworking and a quick learner.<br/>
My weaknesses are I'm emotional.
</p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;