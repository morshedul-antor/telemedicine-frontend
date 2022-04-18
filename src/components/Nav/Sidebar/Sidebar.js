import { faCog, faUser, faSignOutAlt, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import img from '../.././../assets/img/logo.svg'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const { dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    let location = useLocation()

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
            <ul>
                <li className={location.pathname === '/' ? classes.active : ''}>
                    <Link to="/">
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
