import { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import logo from '../../../assets/img/logo.svg'
import classes from './TransparentNav.module.css'

const TransparntNav = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)
    const { stateUser } = useContext(UserInfo)

    const hx = 'hxds100000'
    const array = hx.split('s')

    const [prefix, id] = array
    const idInt = parseInt(id) + stateUser.info?.id
    const url = prefix + idInt

    const [logShow, setLogShow] = useState(false)

    const history = useHistory()
    const location = useLocation()

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    useEffect(() => {
        if (stateAuth.auth === true) {
            setLogShow(true)
        } else {
            setLogShow(false)
        }
    }, [stateAuth, history])

    return (
        <div className={classes.Navbar}>
            <div className={classes.Brand}>
                {location.pathname !== '/profile' ? (
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                ) : null}
                <p>Smart Doctor</p>
            </div>
            <ul className={classes.NavLink}>
                {logShow === true ? (
                    <div>
                        {location.pathname !== '/profile' ? (
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        ) : null}

                        <li>
                            <span onClick={(e) => logout(e)}>Logout</span>
                        </li>
                    </div>
                ) : (
                    <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}
export default TransparntNav
