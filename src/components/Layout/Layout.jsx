import React from 'react'
import { MobileNav, Navbar, SidebarV2 } from '../Nav'
import classes from './Layout.module.css'

export default function Layout({ children, side }) {
    return (
        <div className={classes.layout}>
            <MobileNav />
            <div>{children}</div>
        </div>
    )
}
