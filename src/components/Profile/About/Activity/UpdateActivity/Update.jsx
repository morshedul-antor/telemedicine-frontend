import { useContext, useState } from 'react'
import { Auth } from '../../../../../allContext'
import { refreshPage } from '../../../../../utils/refreshPage'
import classes from './Update.module.css'

export default function Update({ setIsOpen, index, activity }) {
    const [title, setTitle] = useState(activity.title)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const handleUpdate = async (e) => {
        e.preventDefault()

        const details = {
            ...activity,
            title,
        }

        let response = await fetch(`${apiV1}/doctors/others-activity/${activity.id}`, {
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
                        <label>
                            Activity Name
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </label>
                    </div>
                    <button className={classes.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
