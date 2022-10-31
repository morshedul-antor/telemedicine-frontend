import { faEdit, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Achievement.module.css'
import Update from './UpdateAchievement/Update'

export default function Achievement() {
    const [achievements, setAchievements] = useState([])
    const [title, setTitle] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const { stateUser } = useContext(UserInfo)
    const userInfo = stateUser.info

    const [isLoading, setIsLoading] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            let infoFunc = async () => {
                let infoFetch = await fetch(
                    `${apiV1}/doctors/others-activity/${userInfo?.id}?skip=0&limit=50&topic=achievement`,
                    {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        method: 'GET',
                    }
                )
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setAchievements(infoJson)
                }
            }
            try {
                infoFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 1000)
    }, [apiV1, token, title, userInfo?.id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            topic: 'achievement',
            title,
            detail: null,
        }

        let response = await fetch(`${apiV1}/doctors/others-activity/`, {
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
            setTitle('')
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
                <div className={classes.Achievement}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faTrophy} /> Achievements
                            </h2>

                            <div className={classes.list}>
                                <ol>
                                    {achievements[1] &&
                                        achievements[1].map((achievement, index) => (
                                            <li key={index}>
                                                {achievement.title}
                                                <span>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </span>
                                                {isOpen === index && (
                                                    <Update
                                                        index={index}
                                                        setIsOpen={setIsOpen}
                                                        achievement={achievement}
                                                    />
                                                )}
                                            </li>
                                        ))}
                                </ol>
                            </div>
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
                                        Achievement Name
                                        <input
                                            type="text"
                                            placeholder="Organized Successfully a Workshop on Emergency Vascular Surgery"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
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
