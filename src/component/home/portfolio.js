  import React from 'react';

  const potfolioLinks =[
    {
      index:11,
      title: 'Movie App',
      caption: ' ',
      img:'assets/img/portfolio/movie.jpg',
      link:'https://g-movie-app.herokuapp.com',
      github:'https://github.com/jafarovagulbahar/movie-app-master'
      
     },
    {
     index:1,
     title: 'Sourced Agile LLC',
     caption: 'Real Proje',
     img:'assets/img/portfolio/sourced.jpg',
     link:'https://sourcedagile.com/new/',
     github:'https://github.com/jafarovagulbahar/sourced'
     
    },
    {
     index:3,
     title: 'Girls Code Azerbaijan',
     caption: 'Real Proje',
     img:'assets/img/portfolio/girls.jpg',
     link:'https://jafarovagulbahar.github.io/girls-code-az/',
     github:'https://github.com/jafarovagulbahar/GirlsCode-say-t-New'
    },
    {
      index:4,
      title: 'Girls Code Azerbaijan Mini Conferance',
      caption: 'Real Proje',
      img:'assets/img/portfolio/girls2.jpg',
      link:'https://girls-code.herokuapp.com/',
      github:''
     },
     {
      index:5,
      title: 'Awesome App',
      caption: 'Amateur',
      img:'assets/img/portfolio/awesome.jpg',
      link:'https://jafarovagulbahar.github.io/responsive-website1/',
      github:'https://github.com/jafarovagulbahar/responsive-website1'
  
     },
     {
      index:6,
      title: 'Build Company',
      caption: 'Amateur',
      img:'assets/img/portfolio/build.jpg',
      link:"https://jafarovagulbahar.github.io/build-company/",
      github:'https://github.com/jafarovagulbahar/build-company'
  
     },
     {
      index:55,
      title: 'Login App',
      caption: '',
      img:'assets/img/portfolio/login.jpg',
      link:'',
      github:'https://github.com/jafarovagulbahar/responsive-website1'
  
     },
     {
      index:66,
      title: 'Contact App',
      caption: 'Amateur',
      img:'assets/img/portfolio/contact.jpg',
      link:"https://contact-user-list.netlify.app",
      github:'https://github.com/jafarovagulbahar/Contact-App'
  
     },
     {
      index:12,
      title: 'To Do List',
      caption: '',
      img:'assets/img/portfolio/todo.jpg',
      link:'https://todo-app-with-react-js.herokuapp.com',
      github:''
      
     },
     {
      index:8,
      title: 'My old Resume Portfoilo',
      caption: 'Amateur',
      img:'assets/img/portfolio/my.jpg',
      link:"https://jafarovagulbahar.github.io/main-portfolio-cv/",
      github:''
     },
     {
      index:7,
      title: 'BarCode Generator',
      caption: 'Amateur',
      img:'assets/img/portfolio/barcode.jpg',
      link:"https://jafarovagulbahar.github.io/barcode-testing/",
      github:'https://github.com/jafarovagulbahar/barcode-testing'
     }

  
  ]
 
export default function Portfolio() {
    return (

      // <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
           <div className="col-12 portfolio-container" data-aos="fade-up" data-aos-delay="200">
              <div className='col-12'>
                <div className='col-12 item-content'>
                {potfolioLinks && potfolioLinks.map(({title, caption, img, link, github}, index)=>      
                <div className="col-lg-6 col-md-6 portfolio-item filter-web" key={index}>
                  <div className="portfolio-wrap">
                    <img src={img} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h3>"{title}"</h3>
                      <h5>{caption}</h5>
                      
                      <div className="portfolio-links">
                       
                          <a href={link} target="blank"  title="Portfolio Details">
                            <button className="btn btn-light">
                            <i className="bx bx-link"></i>
                            <span>View more</span>
                            </button>    
                          </a>
                       
                      
                          <a href={github} target="blank"  title="Portfolio sourced Code">
                            <button className="btn btn-light">
                            <i className="bx bx-code"></i>
                            <span>Sourced Code</span>
                            </button>       
                          </a>   
                      </div>
                    </div>
                  </div>
                </div> 
                
                )}
                </div>
              </div>
          </div>
        </div>
    </section>


    );
  }
  