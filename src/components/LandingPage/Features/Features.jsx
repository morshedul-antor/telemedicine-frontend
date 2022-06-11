import React from 'react'
import a1 from '../../../assets/img/a2.png'
import chamber from '../../../assets/img/chamber.png'
import data from '../../../assets/img/data.png'
import docs from '../../../assets/img/docs.png'
import ep from '../../../assets/img/ep.png'
import report from '../../../assets/img/report.png'
import classes from './Features.module.css'

export default function Features() {
    return (
        <div className={classes.sectionWrapper} id="features">
            <div className={classes.logo}>
                <span>-----</span> Features <span>-----</span>
            </div>
            <div className={classes.section}>
                <div className={classes.box}>
                    <img className={classes.iconAll} src={docs} alt="" />
                    <img className={classes.iconBg} src={a1} alt="" />
                </div>
                <div className={classes.box}>
                    <div className={classes.boxContainer}>
                        <img className={classes.icon} src={ep} alt="" />
                        <div>
                            <p className={classes.title}>E Prescription</p>
                            <span>
                                User-friendly interface with paperless digital prescription generation. Complies with
                                Comprehensive Drug data base, Pathological lab test, Patients Complaints & Advice with
                                pre-filled & auto suggestion.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <img className={classes.icon} src={report} alt="" />
                        <div>
                            <p className={classes.title}>Appointment Schedule</p>
                            <span>Flexible appointment schedule for online & offline chamber.</span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <img className={classes.icon} src={chamber} alt="" />
                        <div>
                            <p className={classes.title}>Smart Chamber Management</p>
                            <span>
                                Easily accessible, hassle free, cloud based paperless Multiple smart chamber management
                                with active & de-active status.
                            </span>
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        <img className={classes.icon} src={data} alt="" />
                        <div>
                            <p className={classes.title}>Patient Data Analysis</p>
                            <span>
                                Digitally access to patient’s history, Health data & other records for analysis &
                                Correlation.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
