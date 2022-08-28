import { useContext, useState } from 'react'
import { Auth } from '../../../../../allContext'
import { refreshPage } from '../../../../../utils/refreshPage'
import classes from './Update.module.css'

export default function Update({ setIsOpen, index, membership }) {
    const [name, setName] = useState(membership.name)
    const [position, setPosition] = useState(membership.position)
    const [year, setYear] = useState(membership.year)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const handleUpdate = async (e) => {
        e.preventDefault()

        const details = {
            ...membership,
            name,
            position,
            year,
        }

        let response = await fetch(`${apiV1}/doctors/membership/${membership.id}`, {
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
                    <div className={classes.section}>Update Professional Membership</div>
                    <div className={classes.innerWrap}>
                        <label>
                            Name
                            <input
                                type="text"
                                placeholder="Bangladesh Medical & Dental Council"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <div className={classes.formGrid}>
                            <label>
                                Position
                                <input
                                    type="text"
                                    placeholder="Member"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Year
                                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
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
