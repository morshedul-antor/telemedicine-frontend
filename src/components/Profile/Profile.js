import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../allContext'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import Chambers from './Chambers/Chambers'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'

const Profile = () => {
    const [doctorDetail, setDoctorDetail] = useState({})

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

    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader userDetail={doctorDetail} />
                <ProfileCard />
                <Chambers />
            </div>
        </div>
    )
}

export default Profile
