import {
    faCog,
    faUser,
    faSignOutAlt,
    faTableColumns,
    faClock,
    faBriefcaseMedical,
    faHeartbeat,
    faEdit,
    faPrescription,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import img from '../.././../assets/logo/logo.png'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    // const hx = 'hxds100000'
    // const array = hx.split('s')

    // const [prefix, id] = array
    // const idInt = parseInt(id) + stateUser.info?.id
    // const url = prefix + idInt

    let location = useLocation()
    const ep = process.env.REACT_APP_EP

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    return (
        <div className={classes.Sidebar} style={{ width: '20%' }}>
            <div className={classes.header}>
                <Link to="/">
                    <img src={img} alt="" />
                    <h2>
                        Smart <span>Doctor</span>
                    </h2>
                </Link>
            </div>
            <div className={classes.ep}>
                <a rel="noreferrer" target={'_blank'} href={`${ep}/auth/${stateAuth.token}`}>
                    E-Prescription
                </a>
            </div>
            <span className={classes.beta}>(Beta Version 0.1.3)</span>
            <ul>
                <li className={location.pathname === '/home' ? classes.active : ''}>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faTableColumns} /> Home <span>(beta version)</span>
                    </Link>
                </li>
                <li className={location.pathname === '/profile' ? classes.active : ''}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} /> Profile <span>(complete profile)</span>
                    </Link>
                </li>
                <li className={location.pathname === '/chamber' ? classes.active : ''}>
                    <Link to="/chamber">
                        <FontAwesomeIcon icon={faBriefcaseMedical} /> Chamber <span>(add chamber)</span>
                    </Link>
                </li>
                <li className={location.pathname === '/schedule' ? classes.active : ''}>
                    <Link to="/schedule">
                        <FontAwesomeIcon icon={faClock} /> Schedule <span>(setup schedule)</span>
                    </Link>
                </li>
                <li className={location.pathname === '/appointment-list' ? classes.active : ''}>
                    <Link to="/appointment-list">
                        <FontAwesomeIcon icon={faPrescription} /> Prescription List <span></span>
                    </Link>
                </li>
            </ul>

            <ul className={classes.secondUl}>
                <li className={location.pathname === '/settings' ? classes.active : ''}>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </Link>
                </li>
                <li>
                    <span onClick={(e) => logout(e)}>
                        <FontAwesomeIcon icon={faSignOutAlt} style={{ paddingRight: '8px' }} /> Logout
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
