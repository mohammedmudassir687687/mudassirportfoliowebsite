import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import CalculateIcon from '@mui/icons-material/Calculate';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SchemaIcon from '@mui/icons-material/Schema';
import CallIcon from '@mui/icons-material/Call';
import Fab from '@mui/material/Fab';
import './Home.css'
import useSound from 'use-sound'
import pop from './pop.mp3'

const Home = () => {
    const nameStr = 'MOHAMMED MUDASSIR'
    const nameArr = nameStr.split('');
    const [play, {stop}] = useSound(pop);

    return (
    <div>
        <div className='home' id='home'>
            <div className='home__welcome'>
                <h1 className='home__heading'>Hi! I am {nameArr.map((i)=>(<span className='animate__name' onMouseEnter={()=>play()} onMouseLeave={()=>stop()}>{i}</span>))}</h1>
                <p className='home__text'>Software Developer</p>
                <a className='home__button' href='#about'>
                    <Fab size='small' variant="extended">
                        <InfoIcon sx={{ mr: 1 }}/>
                        ABOUT
                    </Fab>
                </a>
                <a className='home__button' href='#skills'>
                    <Fab size='small' variant="extended">
                        <CalculateIcon sx={{ mr: 1 }}/>
                        SKILLS
                    </Fab>
                </a>
                <a className='home__button' href='#projects'>
                    <Fab size='small' variant="extended">
                        <SchemaIcon sx={{ mr: 1 }}/>
                        PROJECTS
                    </Fab>
                </a> 
                
                <a className='home__button' href='#contact'>
                    <Fab size='small' variant="extended">
                        <CallIcon sx={{ mr: 1 }}/>
                        CONTACT
                    </Fab>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home