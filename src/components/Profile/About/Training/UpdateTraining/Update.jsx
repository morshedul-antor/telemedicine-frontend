import { useContext, useState } from 'react'
import { Auth } from '../../../../../allContext'
import { refreshPage } from '../../../../../utils/refreshPage'
import classes from './Update.module.css'

export default function Update({ setIsOpen, index, training }) {
    const [topic, setTopic] = useState(training.topic)
    const [place, setPlace] = useState(training.place)
    const [organisation, setOrganisation] = useState(training.organisation)
    const [year, setYear] = useState(training.year)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const handleUpdate = async (e) => {
        e.preventDefault()

        const details = {
            ...training,
            topic,
            place,
            organisation,
            year,
        }

        let response = await fetch(`${apiV1}/doctors/training/${training.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (response.ok) {
            refreshPage()
        }
    }

    return (
        <div key={() => index} className={classes.container}>
            <div className={classes.cross} onClick={() => setIsOpen(false)}>
                &times;
            </div>
            <div className={classes.formWrapper}>
                <div className={classes.close} onClick={() => setIsOpen(false)}>
                    &times;
                </div>

                <form onSubmit={(e) => handleUpdate(e)}>
                    <div className={classes.section}>Update Training Experience</div>
                    <div className={classes.innerWrap}>
                        <div className={classes.formGrid}>
                            <label>
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
                                    placeholder="Dhaka"
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
                        </div>
                    </div>
                    <button className={classes.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
