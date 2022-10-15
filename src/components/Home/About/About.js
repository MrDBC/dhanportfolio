import { faCss3, faGithub, faHtml5, faJava, faJs, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-area'>
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}  /* 15 means 1.5s delay */
                        />
                    </h1>
                    <p>
                        I'm very ambitious web developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on
                        improving my skill sets day by day.
                    </p>
                    <br />
                    <h2>My Projects</h2>
                    <ul className='projects'>
                        <div className='card'>
                            <li>O <a href='https://city-weather-infoo.netlify.app' >City Weather</a></li>
                        </div>
                        <div className='card'>
                            <li>O <a href='https://googole.netlify.app' >Googole</a></li>
                        </div>
                        <div className='card'>
                            <li>O <a href='https://themovieimdb.netlify.app' >RMDB</a></li>
                        </div>
                        <div className='card'>
                            <li>O <a href='https://mrdbc-salary-predictor-app-y4n7h5.streamlitapp.com' >Software Dev. Salary Predictor</a></li>
                        </div>
                    </ul>

                </div>

                {/* skills */}
                <div className='stage-cube-cont'>
                    <div className='cubespinner' >
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color="#fff" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faCode} color="#DD0031" />
                        </div>
                    </div>
                </div>

            </div>

            <Loader type="pacman" />
        </>
    )
}


export default About