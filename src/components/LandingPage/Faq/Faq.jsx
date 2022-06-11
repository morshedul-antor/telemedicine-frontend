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
                    <input type="checkbox" id="q1" className={classes.questions} />
                    <span className={classes.plus}>+</span>
                    <label htmlFor="q1" className={classes.question}>
                        Who is eligible to participate?
                    </label>
                    <div className={classes.answers}>
                        Any practicing physician may come for assessment in the Smart Doctor Solution.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q2" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q2" className={classes.question}>
                        Why would a physician come to this solution?
                    </label>
                    <div className={classes.answers}>
                        To undergo assessment of an active medical condition that may affect the safe return to
                        practice.
                        <br />
                        For specialized training in resilience, time management and burnout prevention.
                        <br />
                        For customized preventive and surveillance examinations.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q3" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q3" className={classes.question}>
                        What does the program cost?
                    </label>
                    <div className={classes.answers}>
                        Most preventive services screening assessments are covered by your medical insurance. However,
                        for fitness-for-duty assessments, referrals are frequently covered by a participant's employer
                        if used to provide supplemental information to guide work restrictions, impairment clarification
                        or disability determination. Each visit also includes an administrative fee.
                    </div>
                </div>
            </div>
        </div>
    )
}
