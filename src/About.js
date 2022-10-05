import React from 'react'
import './About.css'
import Experience from './Experience'
import profilephoto from './profilephoto.png'
import unewhaven from './unewhaven.png'
import osmania from './osmania.png'

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
              <h4 className='about__para'>Hi! I am a Full Stack Software Developer based in West Haven, Connecticut. I am experienced in building full-stack web applications using MERN stack. Skilled in both front-end and
back-end of the application in creating a beautiful user interface, REST APIs, authentication, and routes at the back-end. </h4>
            </div>
        </div>
        
        <div className='about__experience'>
          <h1 className='experience__heading'>Experience:</h1>
          <Experience 
            title="University of New Haven | West Haven, Connecticut | 
Provost's Teaching Assistant - Artificial Intelligence | Spring 2022 - Fall 2022"
            image={unewhaven}
            path='https://www.newhaven.edu/'
            text='Promoted to Provost’s Teaching Assistant for Spring 2022 and Fall 2022; led weekly meetings and supervised
three classes consisting of 98 students in total for the courses, CSCI 6660-01, CSCI 6660-02, and CSCI 4478-01,
Intro to Artificial Intelligence. Facilitated intensive study tutorial sessions over a 20-hour period weekly, debugging, and helping students
with code and concepts. Responsible for grading and correcting of assignments, quizzes, and exams.'
          />
          <Experience 
            title='University of New Haven | West Haven, Connecticut | Graduate Teaching Assistant - Data Structures | Fall 2021'
            image={unewhaven}
            path='https://www.newhaven.edu/'
            text='Promoted to Teaching Assistant in Fall 2021; supervised 60 graduate students for the course CSCI 6620, Data
Structures. Facilitated intensive study tutorial sessions over a 20-hour period weekly, debugging, and helping
students with code and concepts.'
          />
          <Experience 
            title='Computer Society of India - Student Chapter - Osmania University | Hyderabad, India | Web Development Head | Jun 2018 - Jun 2020'
            image={osmania}
            path='https://www.osmania.ac.in/'
            text='Promoted to Web Development Head in Jun 2018 for the student chapter ‘Computer Society of India’ at the
university. Organized various coding events and sessions teaching and encouraging juniors at the university to
learn to code.'
          />
          <h1 className='experience__heading'>Awards:</h1>
          <Experience 
            title='Outstanding Graduate Service Award (Computer Science) - 2022'
            text='Awarded TCoE Outstanding Graduate Service Award - 2022 for the Computer Science program by the University of
New Haven which is presented to an outstanding senior in each program in recognition of high academic achievement
and active participation in department, college, or university activities.'
            image={unewhaven}
            path='https://www.newhaven.edu/'
          />
          <Experience 
            title='Provost’s Assistantship - 2022'
            text='Awarded Provost’s Teaching Assistantship for Spring 2022 and Fall 2022 with a tuition assistance of 75% for
being one of the highest achieving graduate students at the university'
            image={unewhaven}
            path='https://www.newhaven.edu/'
          />
        </div>
    </div>
    
  )
}

export default Skills