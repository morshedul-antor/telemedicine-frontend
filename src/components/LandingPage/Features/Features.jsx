import P1 from '../../../assets/feature/1.png'
import P2 from '../../../assets/feature/2.png'
import P3 from '../../../assets/feature/3.png'
import P4 from '../../../assets/feature/4.png'
import P5 from '../../../assets/feature/5.png'
import P6 from '../../../assets/feature/6.png'
import classes from './Features.module.css'

export default function Features() {
    return (
        <div className={classes.wrapper} id="features">
            <div className={classes.logo}>
                <span>-----</span> Features <span>-----</span>
            </div>
            <div className={classes.grid}>
                <div>
                    <p>
                        <img src={P1} alt="" />
                        <div>
                            <h2>Doctor Digital Profile</h2>
                            <span>
                                Academic detail, Professional detail, Experience of patient consultation in one digital
                                portal through a digital platform can make a doctor more engaging with patient easily,
                                efficiently & effectively that may ensure a physician more prominent figure to the
                                health care professionals locally and globally.
                            </span>
                            <div>
                                <li>Patient Engagement Activity</li>
                                <li>Achievement Archive</li>
                                <li>Doctor Promotion</li>
                                <li>Individual Profile</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={P2} alt="" />
                        <div>
                            <h2>Patient Serial Management</h2>
                            <span>
                                Revolutionize Doctor chamber by combining enhanced performance with an improved service,
                                manage the Multiple Chamber with Flexible appointment schedule for online & Physical
                                chamber consultation.
                            </span>
                            <div>
                                <li>24x7 Appointment Booking From Patient-end </li>
                                <li>Hassle Free & Flexible Schedule Setup </li>
                                <li>Appointment Detail Dashboard </li>
                                <li>Organize Multiple Chamber </li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={P3} alt="" />
                        <div>
                            <h2>E-Prescription</h2>
                            <span>
                                Convenient, alternative to paper prescription with user friendly interface including
                                largest drug data-base with pre-fill & auto suggestion.
                            </span>
                            <div>
                                <li>
                                    Comprehensive 30 thousand drug data base, 10 thousand Patients complaints, 10
                                    thousand lab test, 15 thousand advice.
                                </li>
                                <li>Preloaded & Auto-fill Suggestion in C/C, Drug Data-Base, Lab-test, Advice.</li>
                                <li> Digitally access to patient’s Profile with history & Medical Record</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={P4} alt="" />
                        <div>
                            <h2>Patient Medical Record</h2>
                            <span>
                                Easy access to the patient medical history & record through my health portal which helps
                                the doctor provide more efficient, accurate, and appropriate care for patient.
                            </span>
                            <div>
                                <li>File share with Health Professional </li>
                                <li>Patient health tracking Indicator </li>
                                <li>Medicine Record </li>
                                <li>Medical Report </li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={P5} alt="" />
                        <div>
                            <h2>Patient Data Analysis</h2>
                            <span>
                                Having digitally access to patient’s profile, medical history, Health data & other
                                records, Doctor will be benefited for analysis & Correlation of disease prevalence
                                easily.
                            </span>
                            <div>
                                <li>Patient Analysis by age, gender, disease & area wise</li>
                                <li>Patient Medical record for analysis & Correlation</li>
                                <li>Comparative study of Patient number</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={P6} alt="" />
                        <div>
                            <h2>Continuous Medical Education</h2>
                            <span>
                                Enhance the Doctors’ knowledge by focusing on the understanding and application of key
                                scientific principles, with interactive course to develop a better management for a
                                patient.
                            </span>
                            <div>
                                <li>Online Academic Content </li>
                                <li>Online Certified Course </li>
                                <li>Online Clinical Content </li>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
