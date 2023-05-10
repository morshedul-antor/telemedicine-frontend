import React from 'react'
import { Link } from 'react-router-dom'
import a1 from '../../../assets/img/a4.png'
import docAll from '../../../assets/img/doctor/doctors.png'
import classes from './About.module.css'

export default function About() {
    return (
        <div className={classes.aboutWrapper} id="about">
            <div className={classes.about}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        <p>We're determined for your better life.</p>
                    </div>
                    <p>
                        You can get the care you need 24x7 be it online or in person. You will be treated by caring
                        specialist doctors.We think that everyone should have easy access to excellent healthcare. Our
                        aim is to make the procedure as simple as possible for our patients and to offer treatment no
                        matter where they are in person or at their convenience.
                    </p>

                    <div className={classes.buttonContainer}>
                        <Link to="/register">
                            <button>
                                Free Registration <span>&#8594;</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={classes.box}>
                    <img src={a1} className={classes.bgImg} alt="" />
                    <img src={docAll} className={classes.docImg} alt="" />
                </div>
            </div>
        </div>
    )
}
