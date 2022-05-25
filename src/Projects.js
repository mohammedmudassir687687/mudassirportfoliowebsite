import React from 'react'
import amazon from './amazon.gif'
import chess from './chess.gif'
import portfolio from './portfolio.gif'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <div className='projects__heading'>
            <h1>PROJECTS</h1>
        </div>
        
        <div className='main__proj__body'>
            <div className='project__container'>
                <img src={amazon} className="project__image" alt="amazon"/>
                <div className='project__container__right'>
                    <h3 className='project__heading'>"Amazon Clone"</h3>
                    <p className='project__description'>A Full Stack Amazon clone built using React.js, Redux, Express, Firebase Auth, FireStore, Stripe.js, react-currency-format, Material UI, CSS Flexbox with back-end NoSQL database FireStore deployed on Firebase Cloud Functions and the front-end is hosted on Firebase as well.

Login functionality and authentication is done using Firebase Authentication. Functionality for users and order history storage, checkout cart items etc is done on Firestore database. The payments are processed through an external npm library stripe-js and react-stripe-js. The website for stripe is https://stripe.com.

The website for the project is https://clone-23e58.web.app/. The back-end for the project is deployed at the endpoint https://us-central1-clone-23e58.cloudfunctions.net/api.</p>
                </div>
            </div>

        <div className='project__container'>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Chess"</h3>
                <p className='project__description'>A chess game created in Python using pygame package</p>
            </div>
            <img src={chess} className="project__image" alt="chess"/>
        </div>

        <div className='project__container'>
            <img src={portfolio} className="project__image" alt="portfolio"/>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Portfolio Website"</h3>
                <p className='project__description'>My portfolio website made using HTML, CSS, React.js and Material UI. The icons are imported from Material UI. The main structure of the web page is done using CSS Flexbox. React is used for creating many different components such as Header, Navigation, Skills, Hobbies etc. The routing is done using react-router. The website is deployed on Heroku and is hosted at https://mudassirportfolio.herokuapp.com/</p>
            </div>
        </div>
            
    </div>
      </div>

  )
}

export default Projects