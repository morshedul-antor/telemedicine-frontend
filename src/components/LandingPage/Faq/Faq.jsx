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
                    <div className={classes.answers}>
                        Smart Doctor is aimed to be a one-stop digital healthcare solution for physicians and allied
                        healthcare professionals for telemedicine consultations with patients, e-prescription handling
                        and storing, patient medical records handling and storing, patient serial and appointment
                        management. We are also currently developing various other solutions to be used as adjunct in
                        Smart Doctor such as medical news portal, case discussion lounge, CME news and updates and much
                        more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        How can I register?
                    </label>
                    <div className={classes.answers}>
                        You can register easily with your BMDC registration number, unique mobile number alongside some
                        basic information regarding qualifications, experience etc.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        What are the benefits a doctor can get from this solution?
                    </label>
                    <div className={classes.answers}>
                        Doctor Digital Profile, Doctor Promotion, E-prescription, Patient Health Record, Medical
                        Education Content & much more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        How will I update my information & store any achievement in Smart Doctor solution?
                    </label>
                    <div className={classes.answers}>
                        Smart Doctor is for individual doctors, so one can easily update any sort of info by visiting
                        our doctor portal to review, update & store all necessary information you wish to provide for
                        patients to look you up.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        Can I see any patient’s previous health record?
                    </label>
                    <div className={classes.answers}>
                        Yes, every patient’s previous health records that has been registered on the platform and used
                        our services or input their previous medical history can be seen.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q12" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q12" className={classes.question}>
                        Can I prescribe through this solution?
                    </label>
                    <div className={classes.answers}>
                        E-Prescription is one of the features of Smart Doctor. Using E-prescription, doctors can easily
                        prescribe for the patient.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q13" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q13" className={classes.question}>
                        As a Doctor, how can i be promoted by Smart Doctor solution?
                    </label>
                    <div className={classes.answers}>
                        There are numerous way for you to be promoted through our platform. Patient can find a doctor
                        from doctor portal. By static promotion through our website and also writing blogs. You can
                        subscribe to our premium packages to avail numerous extra benefits for promoting yourself to get
                        more patient engagement.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q16" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q16" className={classes.question}>
                        For any kind of query or support - how can I reach you?
                    </label>
                    <div className={classes.answers}>
                        You can reach us either by calling or messaging our support center at +880 1322-658481 or
                        emailing us at contact@healthx.com.bd
                    </div>
                </div>
            </div>
        </div>
    )
}
