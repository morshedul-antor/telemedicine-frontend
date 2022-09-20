import { useContext, useState } from 'react'
import { Auth } from '../../../../../allContext'
import { refreshPage } from '../../../../../utils/refreshPage'
import classes from './Update.module.css'

export default function Update({ setIsOpen, index, workplace }) {
    const [position, setPosition] = useState(workplace.position)
    const [institute, setInstitute] = useState(workplace.institute)
    const [start, setStart] = useState(workplace.start_date)
    const [end, setEnd] = useState(workplace.end_date)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const handleUpdate = async (e) => {
        e.preventDefault()

        const details = {
            ...workplace,
            institute,
            position,
            start_date: start,
            end_date: end,
        }

        let response = await fetch(`${apiV1}/doctors/workplace/${workplace.id}`, {
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
                    <div className={classes.section}>Update Professional Experience</div>
                    <div className={classes.innerWrap}>
                        <div className={classes.formGrid}>
                            <label>
                                Employment Place
                                <input
                                    type="text"
                                    placeholder="Cardiologist"
                                    value={institute}
                                    onChange={(e) => setInstitute(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Position
                                <input
                                    type="text"
                                    placeholder="MBBS"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Start Date
                                <input type="date" value={start} onChange={(e) => setStart(e.target.value)} required />
                            </label>
                            <label>
                                End Date
                                <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
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
