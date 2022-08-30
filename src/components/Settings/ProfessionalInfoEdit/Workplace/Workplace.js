import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './Workplace.module.css'

const Workplace = () => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [msg, setMsg] = useState('')
    const [institute, setInstitute] = useState('')
    const [position, setPosition] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        let response = await fetch(`${apiV1}/doctors/workplace`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                institute,
                position,
                start_date,
                end_date,
            }),
        })
        if (response.ok) {
            setMsg('New workplace added')
            setInstitute('')
            setPosition('')
            setStartDate('')
            setEndDate('')
        } else {
            setMsg('Something went wrong.')
        }
    }

    return (
        <div className={classes.Workplace}>
            <form onSubmit={submit}>
                <div className={classes.sectionHeader}>Workplace</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            Institution
                            <input
                                type="text"
                                placeholder="Enter Institution"
                                onChange={(e) => setInstitute(e.target.value)}
                                minLength={5}
                                required
                            />
                        </label>

                        <label>
                            Position
                            <input
                                type="text"
                                placeholder="Enter Your position"
                                onChange={(e) => setPosition(e.target.value)}
                                minLength={3}
                                required
                            />
                        </label>

                        <label>
                            Join Date
                            <input
                                type="date"
                                placeholder="Enter Join date"
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            End Date
                            <input
                                type="date"
                                placeholder="Enter End date"
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                </div>

                <button className={classes.Button}>Add</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}
export default Workplace
