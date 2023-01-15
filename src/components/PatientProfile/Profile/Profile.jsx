import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/img/bg.jpg'
import Pic from '../../../assets/img/pic-placeholder.jpg'
import Logo from '../../../assets/logo/logo.png'
import IndicatorView from './Indicator/IndicatorView'
import Medication from './Medication/Medication'
import Prescription from './Prescription/Prescription'
import classes from './Profile.module.css'
import Report from './Report/Report'
import Summery from './Summery/Summery'

export default function Profile({ api, patientId, patient, picture }) {
    const [menu, setMenu] = useState(1)

    const profileImage = `${api}/images/profile/${picture}`

    return (
        <div className={classes.wrapper}>
            <Link to="/home">
                <img src={Logo} alt="Logo" title="Home" />
            </Link>
            {patient.role_name === 'patient' && patient.id !== 3681 ? (
                <div className={classes.profile}>
                    <div className={classes.info}>
                        <img src={BG} alt="" />
                        <img src={picture.toString().length < 16 ? Pic : profileImage} alt="" />
                        <div>
                            <h2>{patient.name}</h2>
                            <span>(-- Year's)</span>
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> +88 {patient.phone}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </p>
                            <p>New Patient</p>
                        </div>
                    </div>
                    <div className={classes.indicator}>
                        <Summery />
                        <div className={classes.navbar}>
                            <span
                                className={menu === 1 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(1)}>
                                Health Indicators
                            </span>
                            <span
                                className={menu === 2 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(2)}>
                                Prescriptions
                            </span>
                            <span
                                className={menu === 3 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(3)}>
                                Medical Reports
                            </span>
                            <span
                                className={menu === 4 ? `${classes.active}` : `${classes.deactive}`}
                                onClick={(e) => setMenu(4)}>
                                Medication Records
                            </span>
                        </div>
                        {menu === 1 ? <IndicatorView patientId={patientId} /> : ''}
                        {menu === 2 ? <Prescription patientId={patientId} /> : ''}
                        {menu === 3 ? <Report patientId={patientId} /> : ''}
                        {menu === 4 ? <Medication patientId={patientId} /> : ''}
                    </div>
                </div>
            ) : (
                <div className={classes.noData}>No Patient Found!</div>
            )}
        </div>
    )
}
