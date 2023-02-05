import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../../allContext'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import classes from './Patient.module.css'
import PatientList from './PatientList/PatientList'

export default function Patient() {
    const [patients, setPatients] = useState([])
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/ep/doctor/?skip=0&limit=100`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let data = await response.json()

            if (response.ok) {
                setPatients(data)
            }
        }
        try {
            fetchData()
        } catch (e) {
            setPatients([])
        }
    }, [apiV1, token])

    return (
        <div className={classes.patient}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader />
                <br />
                <PatientList patients={patients} />
            </div>
        </div>
    )
}
