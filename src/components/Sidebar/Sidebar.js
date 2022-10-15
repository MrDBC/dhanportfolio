import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo_title from '../../assets/images/DBC-title.png'
import dbcpic from '../../assets/images/D-logo/D2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faEnvelope, faHome,faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={dbcpic}  alt="my pic"/>
            <img className='sub-logo' src={logo_title} alt="logo-title" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active"  to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dhanbahadurchhettri/" >
                <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/MrDBC" >
                <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://leetcode.com/Mr_DBC/" >
                <FontAwesomeIcon icon={faCode}  color="#4d4d4e" />
                </a>
            </li>
        </ul>


    </div>
)


export default Sidebar



/*
    activeclass : which page we are currently on..

*/