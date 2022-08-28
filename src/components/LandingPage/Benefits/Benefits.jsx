import React from 'react'
import P1 from '../../../assets/benefit/1.png'
import P2 from '../../../assets/benefit/2.png'
import P3 from '../../../assets/benefit/3.png'
import P4 from '../../../assets/benefit/4.png'
import P5 from '../../../assets/benefit/5.png'
import P6 from '../../../assets/benefit/6.png'
import a1 from '../../../assets/img/a4.png'
import docs from '../../../assets/img/docs.png'
import classes from './Bentefits.module.css'

export default function Benefits() {
    return (
        <div className={classes.sectionWrapper} id="benefits">
            <div className={classes.logo}>
                <span>-----</span> Benefits <span>-----</span>
            </div>
            <div className={classes.section}>
                <div className={classes.box}>
                    <img className={classes.iconAll} src={docs} alt="" />
                    <img className={classes.iconBg} src={a1} alt="" />
                </div>
                <div className={classes.box}>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P1} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>Doctor Digital Profile</p>
                            <span>
                                Doctor Digital Profile will help to more engage with patient all around the world for
                                24x7 that will make a physician more prominent figure to the health care professionals
                                locally and globally.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P2} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>Doctor Promotion</p>
                            <span>
                                Doctor promotion with adding profile in Doctor portal helps a physician to interact with
                                patients and healthcare staff more engaging and will make professional networks for
                                knowledge sharing & publicity as well.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P3} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>E-Prescription</p>
                            <span>
                                Hassle free, less time consuming, easy to use, Convenient, alternative to paper
                                prescription with user friendly interface including largest drug data-base with pre-fill
                                & auto suggestion.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P4} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>Pre-filled & Auto Filled Feature</p>
                            <span>
                                Comprehensive DGDA approved 30 thousand drug data base, 10 thousand Patients complaints,
                                10 thousand lab test, 15 thousand advice is prefilled & auto-suggested, which helps to
                                generate e-prescription error free & less time consuming for a doctor.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P5} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>Patient Health Record</p>
                            <span>
                                Digitally access to my health portal for patient’s medical history, Health data & other
                                medical records for analysis & Correlation for disease prevalence can be easier by
                                patient health record of Smart Doctor solution.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <div>
                            <img className={classes.icon} src={P6} alt="" />
                        </div>
                        <div>
                            <p className={classes.title}>Medical Education Content</p>
                            <span>
                                Enhance the Doctors’ knowledge by focusing on the understanding and application of key
                                scientific principles, with interactive course to develop a better management for a
                                patient.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
