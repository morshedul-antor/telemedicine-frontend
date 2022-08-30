import React from 'react'
import { Link } from 'react-router-dom'
import bgnew from '../../assets/img/plus-bg.png'
import Logo from '../../assets/logo/hx-blue-fit.png'
import About from './About/About'
import Benefits from './Benefits/Benefits'
import Faq from './Faq/Faq'
import Features from './Features/Features'
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
                            <div className={classes.logo}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className={classes.navList}>
                                <a href="#features">Features</a>
                                <a href="#benefits">Benefits</a>
                                <a href="#faq">FAQ</a>
                                <Link to="/login">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div>hero</div>

                    <About />
                    <Service />
                    <Features />
                    <Benefits />
                    <Faq />
                    <Footer />
                </div>
            </div>
        </>
    )
}
