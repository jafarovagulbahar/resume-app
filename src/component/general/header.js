import React from 'react';
import {Link} from 'react-router-dom';

const headerLinks=[
  {
    id:1,
    page: 'Home',
    path: '/',
    icon: 'bx bx-home'
 },
   {
     id:2,
     page: 'About',
     path: '/about',
     icon: 'bx bx-user'
 },
   {
     id:3,
     page: 'Portfolio',
     path: '/portfolio',
     icon: 'bx bx-book'
   },
   {
     id:4,
     page: 'Skills',
     path: '/skills',
     icon: 'bx bx-code-alt'  
   },
   {
     id:5,
     page: 'Contact',
     path: '/contact',
     icon: 'bx bx-envelope'  
   }

   
]

export default function Header(){
    return (

 <div>        
   <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

        <header id="header" className="col-12 d-flex  justify-content-center">
         <nav className="nav-menu">
            <ul>
            {headerLinks.map(({path ,page, icon}, id) =>(
             <li key={id}>
               <Link to={path}>
                  <i className={icon}></i> <span>{page}</span>
              </Link>
              </li>
           ))}
            </ul>
          </nav>
        </header>
  </div>
      
    );
  }

  