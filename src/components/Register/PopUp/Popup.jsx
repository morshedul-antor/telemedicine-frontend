import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Popup.module.css'

export default function Popup({ setIsOpen, history }) {
    return (
        <div className={classes.popup}>
            <div className={classes.overlay}></div>
            <div className={classes.container}>
                <div
                    className={classes.close}
                    onClick={() => {
                        history.push('/login')
                        setIsOpen(false)
                    }}>
                    &times;
                </div>

                <div className={classes.successMessage}>
                    <div>
                        <p className={classes.success}>Registration Completed!</p>
                    </div>
                    <p>Please wait while your profile is being verified and activated.</p>
                    <Link to="/login">OK</Link>
                </div>
            </div>
        </div>
    )
}
