import {
    faHome,
    faNotesMedical,
    faBriefcaseMedical,
    faHeartbeat,
    faUserAlt,
    faCog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '../../../allContext'
import classes from './MobileSide.module.css'

export default function MobileSide({ setSideOpen }) {
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    return (
        <div className={classes.wrapper}>
            <div className={classes.overlay} onClick={() => setSideOpen(false)}></div>
            <div className={classes.sidebar}>
                <div className={classes.container}>
                    <p>{userDetail.name}</p>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} className={classes.marginIcon1} />
                        <span className={classes.textMargin1}>Dashboard</span>
                    </Link>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUserAlt} /> <span>Profile</span>
                    </Link>
                    <Link to="/chamber">
                        <FontAwesomeIcon icon={faBriefcaseMedical} />
                        <span>Chamber</span>
                    </Link>
                    <Link to="/schedule">
                        <FontAwesomeIcon icon={faNotesMedical} />
                        <span>Schedule</span>
                    </Link>
                    <Link to="/patient-list">
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <span>Patient List</span>
                    </Link>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} className={classes.marginIcon2} /> <span>Settings</span>
                    </Link>
                    <div className={classes.call}>
                        <a href="tel:01322658481">
                            For Any Queries Call <b>01322658481</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
