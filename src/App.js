import React, { Component } from 'react'
import { Fade as SlideShowFade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './App.css'

const fadeImages = [
  "https://i.imgur.com/jTeMXIX.png",
 "https://i.imgur.com/FCV9ZlD.png",
 "https://i.imgur.com/gX72rNA.png",
 "https://i.imgur.com/oBADh8G.png",
 "https://i.imgur.com/hbHsgPO.png"
];

const caption = [
  "From the South East Asia to New York City", 
  "Professional Achievements", 
  "Professional Achievements", 
  "Current Project: M.O.R.U.S Zine Collection Website", 
  "Career Trajectory and Future Goals", 
]



class App extends Component {

 state = {}

 render() {
  return(
   <div className = "slide-div">
       <SlideShowFade duration = {25000}>
      <div className="each-fade">
        <div className="caption-title">
        <h2 className = "caption">{caption[0]}</h2>
        </div>
        <img src={fadeImages[0]} className = "vh-image"/>
      </div>
      <div className="each-fade">
        <div className="prof-title">
          <h2 className = "professional">{caption[1]}</h2>
        </div>
        <img src={fadeImages[1]} className = "vh-image"/>
      </div>
      <div className="each-fade">
      <div className="prof-title">
        <h2 className = "professional">{caption[1]}</h2>
      </div> 
        <img src={fadeImages[2]} className = "vh-image"/>
      </div>
      <div className="each-fade">
        <div className = "zine-title">
        <h2 className = "zine">{caption[3]}</h2>
        </div>
        <img src={fadeImages[3]} className = "vh-image"/>
      </div>
      <div className="each-fade">
        <div className = "career-title">
          <h2 className = "career">{caption[4]}</h2>
        </div>
        <img src={fadeImages[4]} className = "vh-image"/>
      </div>
    </SlideShowFade>
   </div>
    )
   }
 }


export default App
