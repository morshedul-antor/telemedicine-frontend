import React from 'react'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import classes from './Patient.module.css'
import PatientList from './PatientList/PatientList'

export default function Patient() {
    return (
        <div className={classes.patient}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader />
                <br />
                <PatientList />
            </div>
        </div>
    )
}
