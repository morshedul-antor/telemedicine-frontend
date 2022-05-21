import { useContext, useEffect, useState } from 'react'
import { UserInfo } from '../../allContext'
import { Auth } from '../../allContext'
import Nav from '../Nav/TransparentNav/TransparentNav'
import ProfileHeader from '../PublicProfile/ProfileHeader/ProfileHeader'
import classes from './PublicProfile.module.css'

const PublicProfile = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [doctorDetail, setDoctorDetail] = useState({})
    const [qualification, setQualification] = useState({})
    const [speciality, setSpeciality] = useState({})

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch(`${apiV1}/doctors/ `, {
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
        let qualFunc = async () => {
            let qualFetch = await fetch(`${apiV1}/doctors/qualifications `, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let qualJson = await qualFetch.json()
            if (qualFetch.ok) {
                setQualification(qualJson)
            }
        }
        try {
            qualFunc()
        } catch (e) {}
    }, [apiV1, token])

    useEffect(() => {
        let specialityFunc = async () => {
            let specialityFetch = await fetch(`${apiV1}/doctors/specialities `, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let specialityJson = await specialityFetch.json()
            if (specialityFetch.ok) {
                setSpeciality(specialityJson)
            }
        }
        try {
            specialityFunc()
        } catch (e) {}
    }, [apiV1, token])

    return (
        <div className={classes.Page}>
            <>
                <Nav />
            </>
            <div className={classes.Container}>
                <div className={classes.PublicProfile}>
                    <div className={classes.Header}>
                        <div className={classes.Head}>
                            <ProfileHeader />
                        </div>
                        <div className={classes.BasicInfo}>
                            <div>
                                <h2>{stateUser.info?.name}</h2>
                                <p>{stateUser.info?.email}</p>
                                <p>{stateUser.info?.phone}</p>
                            </div>
                            <div>
                                <h2>BMDC</h2>
                                <p>{doctorDetail.bmdc}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ProfileDetails}>
                        <div className={classes.Basic}>
                            <div>
                                <h3>Qualification</h3>
                                <ul>
                                    <li>{qualification.qualification}</li>
                                    <li>MBBS, Dhaka Medical College</li>
                                    <li>FRCS, BSMRMU</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Speciality</h3>
                                <ul>
                                    <li>{speciality.speciality}</li>
                                    <li>Cardiologist</li>
                                    <li>Neural Surgery</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Professional}>
                            <div>
                                <h3>Chambers</h3>
                                <table>
                                    <tr>
                                        <td>Popular hospital</td>
                                        <td> </td>
                                        <td> </td>
                                        <td>
                                            <span>Mon-Tue</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Labaid Hospital</td>
                                        <td> </td>
                                        <td> </td>
                                        <td>
                                            <span>Mon-Tue</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublicProfile
