import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import a1 from '../../../assets/img/a4.png'
import docAll from '../../../assets/img/cds.png'
import classes from './About.module.css'

export default function About() {
    return (
        <div className={classes.aboutWrapper} id="about">
            <div className={classes.about}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        <p>Smart Doctor Solution</p>
                        <span>One Stop Digital Solution For The Doctors</span>
                    </div>
                    <p>
                        Smart Doctor solution offers Doctor Digital Profile, promotion, Patient appointment management,
                        online & offline prescription, Patient history-medical record, health data analytics, clinical &
                        medical education etc.
                    </p>
                    <div className={classes.buttonContainer}>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                    {/* <div className={classes.counterWrapper}>
                        <div>
                            <CountUp start={10} end={1000} duration={3} useEasing={true} className={classes.counter} />
                            <p>Doctors</p>
                        </div>
                        <div>
                            <CountUp start={10} end={2000} duration={3} useEasing={true} className={classes.counter} />
                            <p>Patients</p>
                        </div>
                        <div>
                            <CountUp start={10} end={3000} duration={3} useEasing={true} className={classes.counter} />
                            <p>Services</p>
                        </div>
                        <div>
                            <CountUp start={10} end={5000} duration={3} useEasing={true} className={classes.counter} />
                            <p>Consultations</p>
                        </div>
                    </div> */}
                </div>
                <div className={classes.box}>
                    <img src={a1} className={classes.bgImg} alt="" />
                    <img src={docAll} className={classes.docImg} alt="" />
                </div>
            </div>
        </div>
    )
}
