import React from 'react';

function About() {
    return (
        
        <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
    
            <div className="section-title">
              <h2>About</h2>
             <a href="https://drive.google.com/file/d/1-KtILRrlb5Yqv4JlKwsxBIGnU1RaRBtp/view?usp=sharing" target='blank'>
             <button className="btn btnGeneral" >Download CV</button>
             </a>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
               
                <div id="resume" className="resume">
                  <div className="container" data-aos="fade-up">
            
                    <div className="row">
                      <div className="col-lg-6">
                             
                        <h3 className="resume-title">&#10094; Education &#x2215; &#10095;</h3>
                        <div className="resume-item">
                          <h5>Azerbaijan State Economic University</h5>
                          <h5>2013-2017</h5>
                          <p><em>Bachelor</em></p>
                    
                        </div>
                        <div className="resume-item">
                          <h5>Azerbaijan State Economic University</h5>
                          <h5>2017-2019</h5>
                          <p><em>Master</em></p>
              
                        </div>
                        <br/>
                        <div className="resume-item">
                          <h5>Matrix Traning Center</h5><br/>
                          <h5>2019-2020</h5>
                          <p><em>Front End Developer Course</em></p>
              
                        </div>
                      </div>
    
    
                      <div className="col-lg-6">
                        <h3 className="resume-title">&#10094; Work Experience &#x2215; &#10095;</h3>
                        <div className="resume-item">
                          <h5> "Sourced Agile" LLC</h5>
                          <h5>2020 June/ 2021 January</h5>
                          <p><em>Front End Developer</em></p>
              
                        </div>

                        <div className="resume-item">
                          <h5>"Girls Code" Azerbaijan </h5><br/>
                          <h5>2020</h5>
                          <p><em>Front End developer-intern</em></p>

                        </div>
                       
                         
                      </div>
                    </div>
            
                  </div>
                </div>
               
    
              </div>
            </div>
    
          </div>
        </section>
    
      </main>
 
    );
  }
  
  export default About;