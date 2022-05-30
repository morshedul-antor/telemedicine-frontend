import { faCog, faUser, faSignOutAlt, faTableColumns, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import img from '../.././../assets/img/logo.svg'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const { dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)
    const { stateUser } = useContext(UserInfo)

    const hx = 'hxds100000'
    const array = hx.split('s')

    const [prefix, id] = array
    const idInt = parseInt(id) + stateUser.info?.id
    const url = prefix + idInt

    let location = useLocation()

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    return (
        <div className={classes.Sidebar} style={{ width: '20%' }}>
            <div className={classes.header}>
                <Link to={`/${url}`}>
                    <img src={img} alt="" />
                    <h2>
                        Smart <span>Doctor</span>
                    </h2>
                </Link>
            </div>
            <ul>
                <li className={location.pathname === '/home' ? classes.active : ''}>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faTableColumns} /> Dashboard
                    </Link>
                </li>
                <li className={location.pathname === '/profile' ? classes.active : ''}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                </li>
                <li className={location.pathname === '/schedule' ? classes.active : ''}>
                    <Link to="/schedule">
                        <FontAwesomeIcon icon={faClock} /> Schedule
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
