import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css'
import useSound from 'use-sound'
import pop from './pop.mp3'

const Contact = () => {

    const [play, {stop}] = useSound(pop);

  return (
    <div className='contact' id='contact'>
        <div className='contact__heading'>
            <h1>CONTACT</h1>
        </div>
        <div className='social__links'>
            <a className='icon' href='https://www.instagram.com/mohammedmudassir__/' target='_blank' rel="noreferrer" onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><InstagramIcon fontSize='large' /></a>
            
            <a className='icon' href='https://www.linkedin.com/in/mohammed-mudassir-bb604a182/' target='_blank' rel="noreferrer" onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><LinkedInIcon fontSize='large' /></a>
            
            <a className='icon' href='https://github.com/mohammedmudassir687687' target='_blank' rel="noreferrer" onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><GitHubIcon fontSize='large' /></a>
        </div>

    
        <div className='contact__main'>
            
                <iframe title="maplocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47978.37378205846!2d-72.99244140394876!3d41.272991644205064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d87d9ef6c193%3A0x961955cf93705bc3!2sWest%20Haven%2C%20CT%2006516!5e0!3m2!1sen!2sus!4v1652166855984!5m2!1sen!2sus" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
        <div className='contact__socials'>
              <span className='small'><PhoneIcon fontSize='smaller'/> +1 (475) 227 7451</span>
              <span className='small'><MailOutlineIcon fontSize='smaller'/> mohammedmudassir687687@gmail.com</span>
              <span className='small'><LocationOnIcon fontSize='smaller'/> West Haven, Connecticut, United States</span>
        </div>
    </div>
  )
}

export default Contact