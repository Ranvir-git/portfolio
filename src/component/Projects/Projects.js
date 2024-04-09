import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
// import '../../ScrollBar.css';
// import demoimage from '../../images/me.png';
import demoimage from '../../images/me.jpeg';
import node from "../../images/node.svg";
import react from '../../images/react.svg';
import firebase from '../../images/firebase.svg';
import css from '../../images/css.svg';
import javascript from '../../images/js.svg';
import html from '../../images/html.jpg';
// import vitalVault from '../../images/Vital Vault Video.mkv';
import covid from '../../images/covid_19.mp4'
// import coinworld from '../../images/coinworld.mp4';
import car from "../../images/CarShow.mp4";
// import webchat from '../../images/webchat.mp4';
import webchat from '../../images/sorting.mp4';


const Projects = () => {
    
    
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);


  const handleMouseEnter1 = () => {
    videoRef1.current.play();
};
const handleMouseEnter2 = () =>{
      videoRef2.current.play();

  }
  const handleMouseEnter3 = () =>{
    videoRef3.current.play();

}

  const handleMouseLeave1 = () => {
    videoRef1.current.pause();
    videoRef1.current.currentTime = 0;
};
const handleMouseLeave2 = () =>{
    videoRef2.current.pause();
    videoRef2.current.currentTime = 0;

  }
  const handleMouseLeave3 = () =>{
    videoRef3.current.pause();
    videoRef3.current.currentTime = 0;

  }

    return (
        <>
            <div className='project' id='projects'>
                <div className='projectdata'>
                    <h1 className='projectheading'>Projects📑<hr/></h1>
                    <div className='projectcontent'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>

                            <video ref={videoRef1} muted src={covid}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>Vital Vault🗳️<hr/></h2>
                            <p>Vital vault is a Full Stack Health Care💉 Data Management System🧑‍⚕️ where all
                                the healthcare data of patients❤️‍🩹 can be stored📥 and retrieved📤 as
                                per user’s and organisation’s needs.</p>
                            <div className='techused'>
                                <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>Javascript&nbsp;<img src={javascript}></img></div>
                                <div className='tech'>HTML&nbsp;<img src={html}></img></div>
                                <div className='tech'>CSS&nbsp;<img src={css}></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' href='https://github.com/Ranvir-git/covid_19'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' href='https://covid-19-sage.vercel.app/#home'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className='projectcontent reverse'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>

                                <video ref={videoRef2} muted src={webchat}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>Sorting Visualizer 📲<hr/></h2>
                            <p>It is a Sorting Visualizer🧑‍💻 Application app allowusers to witness real-life sorting and understand the time and space complexity
of each algorithm.🌅 from various users.</p>
                            <div className='techused'>
                            <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>JavaScript&nbsp;<img src={javascript}></img></div>
                                <div className='tech'>HTML&nbsp;<img src={html}></img></div>
                                <div className='tech'>CSS&nbsp;<img src={css}></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' href='https://github.com/Ranvir-git/Sorting-Visualizer'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' href='https://sorting-visualizer-opal-gamma.vercel.app/'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className='projectcontent'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>

                            <video ref={videoRef3} muted src={car}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>Car Show Room🪙<hr/></h2>
                            <p>The car showroom project is a modern architectural marvel, meticulously crafted to exude luxury and sophistication.🔍 It features dynamic displays of car models, smooth navigation, and engaging animations. Designed for user-friendly browsing, it offers an immersive experience to explore the latest models.</p>
                            <div className='techused'>
                            <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>HTML&nbsp;<img src={html}></img></div>
                                <div className='tech'>CSS&nbsp;<img src={css}></img></div>
                                <div className='tech'>JavaScript&nbsp;<img src={javascript}></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' href='https://github.com/Ranvir-git/CarShowRoom'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' href='https://ranvir-git.github.io/CarShowRoom/'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>


                </div>
            </div>
            
        </>
    );
}

export default Projects;
