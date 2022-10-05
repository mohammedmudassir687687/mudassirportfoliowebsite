import React from 'react'
import ecommerce from './ecommerce.gif'
import chess from './chess.gif'
import portfolio from './portfolio.gif'
import blockchain from './blockchain.gif'
import medicalchat from './medicalchat.gif'
import java from './java.gif'
import './Projects.css'

const Projects = () => {
  return (  
    <div className='projects' id='projects'>
        <div className='projects__heading'>
            <h1>PROJECTS</h1>
        </div>
        
        <div className='main__proj__body'>
            <div className='project__container'>
                <div className='project__container__right'>
                    <h3 className='project__heading'>"CryptoSenderEth"</h3>
                    <p className='project__description'>A Full Stack Web3 Blockchain Ethereum Smart Contract DApp for making Ethereum worldwide using Metamask.

The frontend of the application i.e., client is built using HTML, Tailwind CSS, JavaScript, React, React-Context-Api and React-Custom-Hooks. The gifs for the transactions are implemented through giphy API from https://developers.giphy.com/

The backend i.e., the blockchain smart contract is done in Solidity programming language. Metamask is used for conencting Javascript context to the ethereum blockchain. The DApp is deployed on Alchemy.

The website is deployed on Netlify.</p>
                    <p className='project__buttons'><a className='project__link' href='https://cryptosendereth.netlify.app/' target='_blank' rel="noreferrer">Website</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/CryptoSenderEth' target='_blank' rel="noreferrer">GitHub</a></p>

                </div>
                <img src={blockchain} className="project__image" alt="crypto"/>
            </div>

            <div className='project__container'>
                <img src={ecommerce} className="project__image" alt="ecommerce"/>
                <div className='project__container__right'>
                    <h3 className='project__heading'>"Ecommerce Web Application"</h3>
                    <p className='project__description'>A Full Stack Ecommerce Application built using Node, Express, React.js, Redux, Express, Firebase Auth, Firestore, Stripe.js, react-currency-format, Material UI, CSS Flexbox with back-end NoSQL database deployed on Firebase Cloud Functions and the front-end is hosted on Firebase as well. Login functionality and authentication is done using Firebase Authentication. Functionality for users and order history storage, checkout cart items etc is done on Firestore database. The payments are processed through an external npm library stripe-js and react-stripe-js.</p>
                    <p className='project__buttons'><a className='project__link' href='https://clone-23e58.web.app/' target='_blank' rel="noreferrer">Website</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/EcommerceApp' target='_blank' rel="noreferrer">GitHub</a></p>

                </div>
            </div>

        <div className='project__container'>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Medical-Messager (Chat App)"</h3>
                <p className='project__description'>A Full Stack Chat Application for Medical Messaging between various departments and doctors/users built using React, Node, Express and Stream API. The front-end of the website is deployed on Netlify and the back-end on Heroku.</p>
                <p className='project__buttons'><a className='project__link' href='https://medical-messager.netlify.app/' target='_blank' rel="noreferrer">Website</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/ChatAppMERN' target='_blank' rel="noreferrer">GitHub</a></p>
            </div>
            <img src={medicalchat} className="project__image" alt="medicalchat"/>
        </div>
        
        <div className='project__container'>
                <img src={java} className="project__image" alt="java"/>
                <div className='project__container__right'>
                    <h3 className='project__heading'>"Java SpringBoot CRUD Application "</h3>
                    <p className='project__description'>Full Stack CRUD Application Frontend using HTML, CSS, BootStrap and React. The Website for the entire project and the Frontend is deployed on Netlify. The Backend is developed using Java, Spring Boot, Spring Web, JPA and Maven. The backend is hosted at the endpoint https://springbootfullstack-backend.herokuapp.com/users</p>
                    <p className='project__buttons'><a className='project__link' href='https://springboot-react.netlify.app/' target='_blank' rel="noreferrer">Website</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/JavaSpringBootCRUDFrontend' target='_blank' rel="noreferrer">GitHub Frontend</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/JavaSpringBootCRUDBackend' target='_blank' rel="noreferrer">GitHub Backend</a></p>

                </div>
            </div>

        <div className='project__container'>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Chess"</h3>
                <p className='project__description'>A chess game created in Python using pygame package</p>
                <p className='project__buttons'>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/chessProject' target='_blank' rel="noreferrer">GitHub</a>
                </p>
            </div>
            <img src={chess} className="project__image" alt="chess"/>
        </div>

        <div className='project__container'>
            <img src={portfolio} className="project__image" alt="portfolio"/>
            <div className='project__container__right'>
                <h3 className='project__heading'>"Portfolio Website"</h3>
                <p className='project__description'>My portfolio website made using HTML, CSS, React.js and Material UI. The icons are imported from Material UI. The main structure of the web page is done using CSS Flexbox. React is used for creating many different components such as Home, Skills, Projects, Contact etc. The website is deployed on Heroku.</p>
                <p className='project__buttons'><a className='project__link' href='https://mudassirportfoliowebsite.herokuapp.com/' target='_blank' rel="noreferrer">Website</a>
                    <a className='project__link' href='https://github.com/mohammedmudassir687687/mudassirportfoliowebsite' target='_blank' rel="noreferrer">GitHub</a></p>
            </div>
        </div>
            
    </div>
      </div>

  )
}

export default Projects