import React from 'react'
import './About.css'
import Experience from './Experience'
import profilephoto from './profilephoto.png'
import unewhaven from './unewhaven.png'

const Skills = () => {
  return (
    <div className='about' id='about'>
        <div className='about__heading'>
            <h1>ABOUT</h1>
        </div>
        
        <div className='about__photo__section'>
            <div className='about__photo__left'>
              <img className='profile__photo' src={profilephoto} alt='profile photo'/>
            </div>
            <div className='about__photo__right'>
              <h1 className='about__para__heading'>Introduction</h1>
              <h4 className='about__para'>Hi! I am a software developer based in West Haven, Connecticut. I am experienced in building full-stack web applications using MERN stack. Skilled in both front-end and
back-end of the application in creating a beautiful user interface, REST APIs, authentication, and routes at the back-end. </h4>
            </div>
        </div>
        
        <div className='about__experience'>
          <h1 className='experience__heading'>Experience:</h1>
          <Experience 
            title='University of New Haven | West Haven, Connecticut
Teaching Assistant - Artificial Intelligence | 01/2022 - Present'
            image={unewhaven}
            text='Facilitated intensive study tutorial sessions with 90 graduate students over a 20-hour period weekly, debugging, helping
students with code and concepts for two courses Data Science and Computer Science.
Responsible for grading and correcting of assignments, quizzes, and exams.'
          />
          <Experience 
            title='University of New Haven | West Haven, Connecticut
Teaching Assistant - Data Structures | 09/2021 - 12/2021'
            image={unewhaven}
            text='Facilitated intensive study tutorial sessions with 60 graduate students over a 20-hour period weekly, debugging, helping
students with code and concepts.'
          />
          <h1 className='experience__heading'>Awards:</h1>
          <Experience 
            title='Outstanding Graduate Service Award (Computer Science) - 2022'
            text='Awarded TCoE Outstanding Graduate Service Award - 2022 for the Computer Science program by the University of
New Haven which is presented to an outstanding senior in each program in recognition of high academic achievement
and active participation in department, college, or university activities.'
            image={unewhaven}
          />
        </div>
    </div>
    
  )
}

export default Skills