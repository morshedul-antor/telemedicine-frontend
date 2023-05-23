import { faCog, faSignOutAlt, faTableColumns, faPrescription, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
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
                    <h2>
                        <FontAwesomeIcon icon={faStethoscope} />
                        LiveDoc
                    </h2>
                </Link>
            </div>
            <div className={classes.ep}>
                <a rel="noreferrer" target={'_blank'} href={`${ep}/auth/${stateAuth.token}`}>
                    Create Prescription
                </a>
            </div>
            <ul>
                <li className={location.pathname === '/dashboard' ? classes.active : ''}>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faTableColumns} /> Dashboard
                    </Link>
                </li>
                <li className={location.pathname === '/prescription-list' ? classes.active : ''}>
                    <Link to="/prescription-list">
                        <FontAwesomeIcon icon={faPrescription} /> Prescription List <span></span>
                    </Link>
                </li>
                <li className={location.pathname === '/settings' ? classes.active : ''}>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </Link>
                </li>
            </ul>

            <ul className={classes.secondUl}>
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
