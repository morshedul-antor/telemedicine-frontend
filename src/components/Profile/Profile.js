import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../allContext'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import Chambers from './Chambers/Chambers'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'

const Profile = () => {
    const [doctorDetail, setDoctorDetail] = useState({})
    const [activeChamber, setActiveChamber] = useState({})

    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch(`${apiV1}/doctors/auth`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await infoFetch.json()

            if (infoFetch.ok) {
                setDoctorDetail(infoJson)
            }
        }
        try {
            infoFunc()
        } catch (e) {}
    }, [apiV1, token])

    useEffect(() => {
        console.log('api fetching')
        let activeChamberFunc = async (e) => {
            let activeChamberFetch = await fetch(`${apiV1}/doctors/chamber/active`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let activeChamberJson = await activeChamberFetch.json()
            console.log(activeChamberJson)
            if (activeChamberFetch.ok) {
                setActiveChamber(activeChamberJson)
            }
        }
        try {
            activeChamberFunc()
        } catch (e) {}
    }, [apiV1, token])

    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader active={activeChamber} />
                <ProfileCard />
                <Chambers />
            </div>
        </div>
    )
}

export default Profile
