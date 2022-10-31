import { faEdit, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Training.module.css'
import Update from './UpdateTraining/Update'

export default function Training() {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [trainings, setTrainings] = useState([])

    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const userInfo = stateUser.info

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [topic, setTopic] = useState('')
    const [place, setPlace] = useState('')
    const [organisation, setOrganisation] = useState('')
    const [year, setYear] = useState('')

    const [formOpen, setFormOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            let infoFunc = async () => {
                let infoFetch = await fetch(`${apiV1}/doctors/training/${userInfo?.id}?skip=0&limit=100`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setTrainings(infoJson)
                }
            }
            try {
                infoFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 1000)
    }, [apiV1, token, topic, place, userInfo?.id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            topic,
            place,
            organisation,
            year,
        }

        let response = await fetch(`${apiV1}/doctors/training/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (response.ok) {
            setFormOpen(false)
            setTopic('')
            setPlace('')
            setOrganisation('')
            setYear('')
        }
    }

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
                <div className={classes.Training}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faLandmark} /> Training Experience
                            </h2>
                            <table className={classes.infoTable}>
                                <thead>
                                    <tr className={classes.row}>
                                        <th>Topic</th>
                                        <th>Place</th>
                                        <th>Organization/Trainer</th>
                                        <th>Year</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trainings[1] &&
                                        trainings[1].map((training, index) => (
                                            <tr className={classes.row} key={index}>
                                                <td>{training.topic}</td>
                                                <td>{training.place}</td>
                                                <td>{training.organisation}</td>
                                                <td>{training.year}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </td>
                                                {isOpen === index && (
                                                    <Update index={index} setIsOpen={setIsOpen} training={training} />
                                                )}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={classes.Basic}>
                        <button onClick={() => setFormOpen(true)}>Add More</button>
                        {formOpen && (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className={classes.formWrap}>
                                    <label>
                                        <span>
                                            <button onClick={() => setFormOpen(false)}>x</button>
                                        </span>
                                        Topic
                                        <input
                                            type="text"
                                            placeholder="Covid 19"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Place
                                        <input
                                            type="text"
                                            placeholder="Dhaka Medical"
                                            value={place}
                                            onChange={(e) => setPlace(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Organization/Trainer
                                        <input
                                            type="text"
                                            placeholder="Dhaka Medical College"
                                            value={organisation}
                                            onChange={(e) => setOrganisation(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Year
                                        <input
                                            type="text"
                                            placeholder="2022"
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <div>
                                        <button type="submit" className={classes.button}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
