import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Prescription from './Prescription/Prescription'
import classes from './Profile.module.css'
import Report from './Report/Report'
import Summery from './Summery/Summery'

export default function Profile({ api, patientId, patient, picture }) {
    const [menu, setMenu] = useState(1)

    const demoId = parseInt(process.env.REACT_APP_DEMO_ID)

    return (
        <div className={classes.wrapper}>
            {patient.role_name !== 'admin' && patient.id !== demoId ? (
                <div className={classes.profile}>
                    <div className={classes.info}>
                        <div>
                            <h2>{patient.name}</h2>
                            <span>(-- Year's)</span>
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> +88 {patient.phone}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </p>
                        </div>
                    </div>
                    <div className={classes.indicator}>
                        <Summery />
                        <div className={classes.navbar}>
                            <span
                                className={menu === 1 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(1)}>
                                Prescriptions
                            </span>
                            <span
                                className={menu === 2 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(2)}>
                                Medical Reports
                            </span>
                        </div>
                        {menu === 1 ? <Prescription patientId={patientId} /> : ''}
                        {menu === 2 ? <Report patientId={patientId} /> : ''}
                    </div>
                </div>
            ) : (
                <div className={classes.noData}>No Patient Found!</div>
            )}
        </div>
    )
}
