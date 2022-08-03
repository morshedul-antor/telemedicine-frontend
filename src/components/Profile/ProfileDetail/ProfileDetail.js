import { useState, useEffect, useContext } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import SkeletonProfileDetail from '../../Skeletons/SkeletonProfileDetail'
import classes from './ProfileDetail.module.css'

const ProfileDetail = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [isLoading, setIsLoading] = useState(true)
    const [doctorDetail, setDoctorDetail] = useState({})
    const [qualification, setQualification] = useState({})
    const [speciality, setSpeciality] = useState({})

    useEffect(() => {
        setTimeout(() => {
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
                infoFunc()
                qualFunc()
                specialityFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 3000)
    }, [apiV1, token, isLoading])

    // useEffect(() => {
    //     let infoFunc = async () => {
    //         let infoFetch = await fetch(`${apiV1}/doctors/ `, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             method: 'GET',
    //         })
    //         let infoJson = await infoFetch.json()
    //         if (infoFetch.ok) {
    //             setDoctorDetail(infoJson)
    //         }
    //     }
    //     try {
    //         infoFunc()
    //     } catch (e) {}
    // }, [apiV1, token])

    // useEffect(() => {
    //     let qualFunc = async () => {
    //         let qualFetch = await fetch(`${apiV1}/doctors/qualifications `, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             method: 'GET',
    //         })
    //         let qualJson = await qualFetch.json()
    //         if (qualFetch.ok) {
    //             setQualification(qualJson)
    //         }
    //     }
    //     try {
    //         qualFunc()
    //     } catch (e) {}
    // }, [apiV1, token])

    // useEffect(() => {
    //     let specialityFunc = async () => {
    //         let specialityFetch = await fetch(`${apiV1}/doctors/specialities `, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             method: 'GET',
    //         })
    //         let specialityJson = await specialityFetch.json()
    //         if (specialityFetch.ok) {
    //             setSpeciality(specialityJson)
    //         }
    //     }
    //     try {
    //         specialityFunc()
    //     } catch (e) {}
    // }, [apiV1, token])

    return (
        <>
            {isLoading ? (
                <div className={classes.ProfileDetail}>
                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>

                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>
                </div>
            ) : (
                <div className={classes.ProfileDetail}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>Qualification</h2>
                            <ul>
                                <li>&#10003; MBBS, Dhaka Medical College</li>
                                <li>&#10003; FRCS, BSMRMU</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Basic}>
                        <div>
                            <h2>Speciality</h2>
                            <ul>
                                <li>&#10003; Cardiologist</li>
                                <li>&#10003; Neural Surgery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default ProfileDetail
