import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './Academic.module.css'

const Academic = () => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [msg, setMsg] = useState('')
    const [institute, setInstitute] = useState('')
    const [degree, setDegree] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        let response = await fetch(`${apiV1}/doctors/academic`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                institute,
                degree,
                start_date,
                end_date,
            }),
        })
        if (response.ok) {
            setMsg('New Degree added')
        } else {
            setMsg('Something went wrong.')
        }
    }
    return (
        <div className={classes.Academic}>
            <form onSubmit={submit}>
                <div className={classes.sectionHeader}>Academic</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            Institute
                            <input
                                type="text"
                                placeholder="Enter Institution"
                                onChange={(e) => setInstitute(e.target.value)}
                                minLength={5}
                                required
                            />
                        </label>

                        <label>
                            Degree
                            <input
                                type="text"
                                placeholder="Enter degree"
                                onChange={(e) => setDegree(e.target.value)}
                                minLength={2}
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
export default Academic
