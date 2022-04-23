import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../allContext'
import docCover from '../../assets/img/background-doc-table.jpg'
import doc from '../../assets/img/docstock.jpg'
import classes from './ProfileHeader.module.css'

const ProfileHeader = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [activeChamber, setActiveChamber] = useState({})
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

    useEffect(() => {
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
            if (activeChamberFetch.ok) {
                setActiveChamber(activeChamberJson)
            }
        }
        try {
            activeChamberFunc()
        } catch (e) {}
    }, [apiV1, token])

    return (
        <div>
            <div>
                <div
                    className={classes.header}
                    style={{
                        background: `url(${docCover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <div>
                        <div className={classes.headLeftWrapper}>
                            <div
                                style={{
                                    background: `url(${doc})`,
                                    width: '150px',
                                    height: '150px',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderRadius: '10px',
                                    border: '4px solid var(--white)',
                                    boxShadow: `0 3px 5px var(--grey2)`,
                                }}></div>
                            <h2>{stateUser.info?.name}</h2>
                            <p>{doctorDetail.bmdc}</p>
                            <p>{qualification?.qualification}</p>
                            <p>{speciality?.speciality}</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouseChimneyMedical} />
                        <h2>{activeChamber?.name}</h2>
                        <p>{activeChamber?.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader
