import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Auth } from '../../allContext'
import Profile from './Profile/Profile'

export default function PatientProfile() {
    const { id } = useParams()
    const [patient, setPatient] = useState({})
    const [picture, setPicture] = useState({})

    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        let fetchPatient = async () => {
            let response = await fetch(`${apiV1}/user/${id}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            let data = await response.json()
            if (response.ok) {
                setPatient(data)
            }
        }

        let fetchPicture = async () => {
            let response = await fetch(`${apiV1}/profile-pic/${id}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            let data = await response.json()
            if (response.ok) {
                setPicture(data.image_string)
            }
        }

        try {
            fetchPatient()
            fetchPicture()
        } catch (e) {
            setPatient({})
            setPicture({})
        }
    }, [apiV1, token, id])

    return (
        <div>
            <Profile api={apiV1} patientId={id} patient={patient} picture={picture} />
        </div>
    )
}
