import Dlogo from '../../assets/images/D-logo/D.png'
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a', 'n','.']
    const specialization = ['W','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() =>{
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        },8000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="main-text">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>   
                    <img src={Dlogo} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={16} />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={specialization}
                        idx={19}
                    />
                    </h1>
                    <h2>Web Developer/ Coder/ Freelancer</h2>
                    <Link to="/contact" className="flat-button" >CONTACT Me</Link>
                </div>

                <Logo />
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Home