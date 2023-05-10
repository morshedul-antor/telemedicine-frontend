import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import bgnew from '../../assets/img/plus-bg.png'
import About from './About/About'
import Footer from './Footer/Footer'
import classes from './LandingPage.module.css'
import Service from './Service/Service'

export default function LandingPage() {
    return (
        <>
            <div
                style={{
                    background: `url(${bgnew})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '94vh',
                    position: 'absolute',
                    zIndex: '-1',
                    opacity: '.2',
                    top: '0',
                }}></div>
            <div className={classes.main}>
                <div className={classes.wrapper}>
                    <div className={classes.nav}>
                        <div className={classes.topNavbar}>
                            <Link to="#" className={classes.logo}>
                                <FontAwesomeIcon icon={faStethoscope} />
                                <span>LiveDoc</span>
                            </Link>
                            <div className={classes.navList}>
                                <a href="#features">How It works</a>
                                <a href="#departments">Departments</a>
                                <a href="#faq">Contact Us</a>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Registration</Link>
                            </div>
                        </div>
                    </div>
                    <div>hero</div>

                    <About />
                    <Service />
                    <Footer />
                </div>
            </div>
        </>
    )
}
