
import React from 'react';


const skillLink =[
    {
     id:1,
    skill:'HTML5',
    count: '80',
    },
    {
     id:2,
    skill:' CSS3 (Scss & Sass)',
    count: '70'
    },
    {
    id:3,
    skill:'Bootstrap',
    count: '70'
        },
    {
    id:4,
    skill:'Javascript',
    count: '40'
    },
    {
    id:5,
    skill:'Jquery',
    count: '50'
    },
    {
     id:6,
    skill:'AJAX',
    count: '40'
    },
    {
    id:7,
    skill:'React Js (Redux)',
    count: '50'
    },
    {
    id:9,
    skill:'Responsive Design',
    count: '80'
    },
    {
    id:10,
    skill:'Adobe XD to HTML',
    count: '90'
    },
    {
    id:11,
    skill:'Figma to HTML',
    count: '90'
    },
  
  ]

export default function Skills() {
    return (

        <section id="skills" className="skillsmain section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">
        
            <div className="section-title">
              <h2>Skills</h2> 
            </div>
        
            <div className="row skills-content">   
              <div className="col-lg-6">
             {skillLink.map(({skill, count}, id)=>   
                <div className="progress" key={id}>
                  <span className="skill"> {skill} <i className="val">{count}%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar"  ></div>
                  </div>
                </div>
                )}
                
              </div>
        
              <div className="col-lg-6">
        
              <div className="skills">
                <div className="bt"><img src="assets/img/bt.png" alt='bootstrap'/></div>
                <div className="ang"><img src="assets/img/ang.png" alt='angular'/></div>
                <div className="react"><img src="assets/img/react.png" alt='react'/></div>
                <div className="jq"><img src="assets/img/jq.png" alt='jquery'/></div>

  
                <div className="skills2">
                    <div className="js"><img src="assets/img/js.png" alt='javascript'/></div>
                    <div className="css"><img src="assets/img/css.png" alt='css'/></div>
                    <div className="html"><img src="assets/img/html5.png" alt='html'/></div>
                </div>
            </div>
                
              </div>
        
            </div>
        
          </div>
        </section>
        
        

    );
  }
  
  