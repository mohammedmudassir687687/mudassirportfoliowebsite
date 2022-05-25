import React from 'react'
import './Experience.css'

const Experience = ({image, text, title}) => {
  return (
    <div className='experience'>
        <div className='experience__left'>
            <h3 className='experience__title'>{title}</h3>
            <p className='experience__text'>{text}</p>
        </div>
        <div className='experience__right'>
            <a target='_blank' href='https://www.newhaven.edu/'><img className='experience__photo' src={image} alt='university of new haven' /></a>
        </div>
    </div>
  )
}

export default Experience