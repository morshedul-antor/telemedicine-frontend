import '@fortawesome/free-solid-svg-icons'
import { faBriefcase, faGraduationCap, faLocation, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Auth } from '../../allContext'
import Doc from '../../assets/img/doc-df.jpg'
import Logo from '../../assets/logo/logo.png'
import QR from '../../assets/logo/qr.png'
import classes from './Ecard.module.css'
import ExportImage from './ExportImage'

export default function Ecard() {
    const exportRef = useRef()
    const { id } = useParams()
    const docId = id - 1000

    const [info, setInfo] = useState([])
    const [chamber, setChamber] = useState({})
    const [works, setWorks] = useState([])
    const [profile, setProfile] = useState({})

    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/doctors/detail/${docId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()
            if (response.ok) {
                setInfo(data)
            }
        }

        let fetchWorkplace = async () => {
            let response = await fetch(`${apiV1}/doctors/workplace/${docId}?skip=0&limit=50`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()
            if (response.ok) {
                setWorks(data)
            }
        }

        let fetchChamber = async () => {
            let response = await fetch(`${apiV1}/doctors/chamber/active`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()
            if (response.ok) {
                setChamber(data)
            }
        }

        let fetchImage = async () => {
            let response = await fetch(`${apiV1}/profile-pic`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setProfile(data?.image_string)
            }
        }

        try {
            fetchData()
            fetchChamber()
            fetchWorkplace()
            fetchImage()
        } catch {
            setInfo([])
            setChamber({})
            setWorks([])
            setProfile({})
        }
    }, [apiV1, token, docId])

    const profileImage = `${apiV1}/images/profile/` + profile

    return (
        <div className={classes.card}>
            <div ref={exportRef}>
                <div>
                    <img src={profile.toString().length < 16 ? Doc : profileImage} alt="pp" />
                    <p>
                        <span>BMDC</span> A-{info?.doctor?.bmdc}
                    </p>
                </div>
                <img src={Logo} alt="" />
                <div>
                    <img src={QR} alt="" className={classes.qr} />
                    <span>{`${info.doctor?.dr_title || ''} ${info.user?.name || ''}`}</span>
                    <p>
                        <FontAwesomeIcon icon={faStethoscope} /> {info?.specialities?.map((item) => item.speciality)}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGraduationCap} />{' '}
                        {info?.qualifications?.map((item) => item.qualification)}
                    </p>
                    <p>
                        {works &&
                            works.map((work) =>
                                work.end_date === null ? (
                                    <>
                                        <span>
                                            <FontAwesomeIcon icon={faBriefcase} /> {work.position}
                                        </span>
                                        at {work.institute}
                                    </>
                                ) : (
                                    ''
                                )
                            )}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLocation} /> {chamber.name} - {chamber.detail_address}
                    </p>
                </div>
            </div>
            <button onClick={() => ExportImage(exportRef.current, `eVisitingCard of ${info.user?.name}`)}>
                Download
            </button>
        </div>
    )
}
