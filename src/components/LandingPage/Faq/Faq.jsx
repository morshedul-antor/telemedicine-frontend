import React from 'react'
import classes from './Faq.module.css'

export default function Faq() {
    return (
        <div className={classes.content} id="faq">
            <div className={classes.logo}>
                <span>-----</span> Frequently Asked Questions <span>-----</span>
            </div>
            <div>
                <div>
                    <input type="checkbox" id="q4" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q4" className={classes.question}>
                        What is Smart Doctor solution?
                    </label>
                    <div className={classes.answers}>One stop Digital solution for the Doctors.</div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        How can I register ?
                    </label>
                    <div className={classes.answers}>
                        By BMDC registration number, unique mobile number with some basic information, can register
                        easily.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        What are the benefits a doctor can get from this solution?
                    </label>
                    <div className={classes.answers}>
                        Doctor Digital Profile, Doctor promotion, E-prescription, Patient Health record, medical
                        Education content & many more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        How will update my info & store any achievement in smart doctor solution?
                    </label>
                    <div className={classes.answers}>
                        As, Smart doctor Solution is for individual doctor, so one can easily update any sort of info by
                        pressing into profile & can review, update & store achievement, whatever you want.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        Can I see any patients previous health record?
                    </label>
                    <div className={classes.answers}>
                        Yes, though my health portal & patient health record, Doctor can easily excess into patient
                        previous health record.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q12" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q12" className={classes.question}>
                        Can I prescribe through this solution?
                    </label>
                    <div className={classes.answers}>
                        E-Prescription is one of the feature of smart doctor solution. Using E-prescription, doctor
                        easily can prescribe for the patient.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q13" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q13" className={classes.question}>
                        As a Doctor, how can i promote by smart doctor solution?
                    </label>
                    <div className={classes.answers}>
                        Patient can find a doctor from doctor portal, By static promotion through our website and also
                        writing blogs, through recorded video of a doctor easily smart doctor solution will promote a
                        doctor for patient engagement.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q16" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q16" className={classes.question}>
                        For emergency support - how can I reach?
                    </label>
                    <div className={classes.answers}>
                        Call to our contact number, send text at +8801322658481 or email us at contact@healthx.com.bd
                    </div>
                </div>
            </div>
        </div>
    )
}
