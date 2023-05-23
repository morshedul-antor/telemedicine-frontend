import React from 'react'
import classes from './Layout.module.css'

export default function Layout({ children, side }) {
    return (
        <div className={classes.layout}>
            <div>{children}</div>
        </div>
    )
}
