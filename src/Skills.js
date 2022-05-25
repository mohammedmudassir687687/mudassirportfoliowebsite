import React from 'react'
import './Skills.css';
import Card from './Card';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <div className='skills__heading'>
            <h1>SKILLS</h1>
        </div>
        <div className='skills__content'>
            <h3 className='skills__info'>Click on the cards for more info!</h3>
            <div className='cards__list'>
                <Card 
                title='Web Development'
                paragraph=' MongoDB, Express, React, Node, Mongoose, Firebase, Firestore, REST API, Postman,MongoDB Compass, JWT OAuth, Bcrypt, HTML, CSS, CSS Flexbox, Git.'
                />
                <Card 
                title='Libraries and Frameworks'
                paragraph='Bootstrap, Material-UI, JQuery, Next.js'
                />
                <Card 
                title='Unit Testing'
                paragraph='Jest, Supertest'
                />
                <Card 
                title='Backend'
                paragraph='SQL, Database Modeling'
                />
                <Card 
                title='Cloud'
                paragraph='Firebase Cloud Functions, AWS'
                />
                <Card 
                title='CLI'
                paragraph='Powershell, Git Bash, Linux Bash'
                />
                <Card 
                title='Deployment'
                paragraph='Heroku, Vercel, Github'
                />
                <Card 
                title='DevOps'
                paragraph='Redis, Docker'
                />
                <Card 
                title='Academic'
                paragraph='Algorithms, Data structures, Distributed Systems, Systems Programming, Operating Systems, Artificial Intelligence'
                />
                <Card 
                title='Operating Systems'
                paragraph='Ubuntu, Fedora, Kali Linux, Windows'
                />
                <Card 
                title='IDEs'
                paragraph='Visual Studio Code (VS Code), PyCharm, Eclipse, Atom, IntelliJ IDEA, Sublime Text, CodeBlocks'
                />
            </div>
        </div>
        
    </div>
  )
}

export default Skills