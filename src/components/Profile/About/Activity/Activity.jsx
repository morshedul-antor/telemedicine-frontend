import { faEdit, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Activity.module.css'
import Update from './UpdateActivity/Update'

export default function Activity() {
    const [activities, setActivities] = useState([])
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
                    `${apiV1}/doctors/others-activity/${userInfo?.id}?skip=0&limit=50&topic=conference`,
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
                    setActivities(infoJson)
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
            topic: 'conference',
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
                <div className={classes.Activity}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faShield} /> Activity at CME/Conference
                            </h2>

                            <div className={classes.list}>
                                <ol>
                                    {activities[1] &&
                                        activities[1].map((activity, index) => (
                                            <li key={index}>
                                                {activity.title}
                                                <span>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </span>
                                                {isOpen === index && (
                                                    <Update index={index} setIsOpen={setIsOpen} activity={activity} />
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
                                        Activity Name
                                        <input
                                            type="text"
                                            placeholder="Activity at Ranpgut Medical College on Covid-19"
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
