import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo/logo.png'
import Pic from '../../../assets/password/pass.png'
import classes from './ChangePassword.module.css'

export default function ChangePassword() {
    const [hide, setHide] = useState(false)

    const [passShown, setPassShown] = useState(false)
    const shownPassword = () => {
        setPassShown((prev) => !prev)
    }

    return (
        <div className={classes.wraper}>
            <Link to="/login">
                <img src={Logo} alt="" />
            </Link>
            <div className={classes.box}>
                <div>
                    <img src={Pic} alt="" />
                </div>
                <div>
                    <h2>
                        Reset <br />
                        Password!
                    </h2>
                    <p>
                        Enter strong password to protect your account!<span>*</span>
                    </p>

                    <form>
                        <input
                            type={passShown ? 'text' : 'password'}
                            placeholder="Enter password *"
                            minLength={4}
                            id="check"
                        />
                        <input
                            type={passShown ? 'text' : 'password'}
                            placeholder="Confirm password *"
                            minLength={4}
                            id="check"
                        />
                        <div>
                            <input type="checkbox" onChange={() => setPassShown(!passShown)} />
                            <label htmlFor="check">Show Password</label>
                        </div>
                        <button type="submit">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
