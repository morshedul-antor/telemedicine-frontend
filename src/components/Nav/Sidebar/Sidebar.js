import { faCog, faUser, faSignOutAlt, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import env from 'react-dotenv'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import img from '../.././../assets/img/logo.svg'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    let location = useLocation()

    let epApi = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_EP_SITE : env.REACT_APP_EP_SITE

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
                <a rel="noreferrer" target={'_blank'} href={`${epApi}/auth/${stateAuth.token}`}>
                    E-Prescription
                </a>
            </div>
            <ul>
                <li className={location.pathname === '/dashboard' ? classes.active : ''}>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faTableColumns} /> Dashboard
                    </Link>
                </li>
                <li className={location.pathname === '/profile' ? classes.active : ''}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} /> Profile
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
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
