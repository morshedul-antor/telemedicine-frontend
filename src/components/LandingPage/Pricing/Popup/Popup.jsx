import React from 'react'
import classes from './Popup.module.css'

export default function Popup({ setIsOpen }) {
    return (
        <div className={classes.popup}>
            <div className={classes.overlay} onClick={() => setIsOpen(false)}></div>
            <div className={classes.container}>
                <div className={classes.close} onClick={() => setIsOpen(false)}>
                    &times;
                </div>

                <div>
                    <p>For Subscriptions Please Call at</p>
                    <a href="tel:+8801969908180">+88 01969908180</a>
                </div>
            </div>
        </div>
    )
}
