import { useEffect, useState , useRef} from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'



const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    
    useEffect(() =>{
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    const sendEmail=(e)=>{

        // prevent default submitting
        e.preventDefault();

        emailjs.sendForm('service_e99i6nh', 'template_do913ui', form.current, 'YPVRif9EROFxfiUfm')
        .then(() => {
            alert('message sent successfully!')
            window.location.reload(false)
        }, 
        () => {
            alert('failed to send the message, try again plz')
        });
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-area'> 
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}/>
                    </h1>

                    <div className='contact-form'>
                       <form ref={form} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='email' required />
                                </li>
                                {/* <li>
                                    <input type="text" className="sub-class" placeholder="Subject" name="subject" required />
                                </li> */}
                                <li>
                                    <textarea placeholder='message' name="message" required />
                                </li>
                                    
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                       </form>
                    </div>
                </div>
                <div className='info-map'>
                    Dhan Bahadur Chhettri
                    <br/>
                    Kolkata, India
                    <br/>
                    <span>progcomp29@gmail.com</span>
                </div>   
                {/* <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                        <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>                  */}

            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact

// 22.50010966666667, 88.35620841666669