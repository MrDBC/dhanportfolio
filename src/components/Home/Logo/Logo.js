import './Logo.scss'
import logoD from '../../../assets/images/D-logo/D.png'

const Logo=() =>{
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={logoD} alt='logo'/>
        </div>
    )
}

export default Logo