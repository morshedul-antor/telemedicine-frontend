import { useState, useContext, useEffect } from 'react'
import { Auth } from '../../../allContext'
import classes from './OtherInfo.module.css'

const OtherInfo = () => {
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    const [bmdc, setBmdc] = useState('')
    const [exp_year, setExpYear] = useState('')
    const [online_fees, setOnlineFees] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/doctors/ `, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setBmdc(data.bmdc)
                setExpYear(data.exp_year)
                setOnlineFees(data.online_fees)
            }
        }
        try {
            fetchData()
        } catch (e) {}
    }, [apiV1, token])

    const submit = async (e) => {
        e.preventDefault()
        let response = await fetch(`${apiV1}/doctors`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataTpe: 'json',
            method: 'PATCH',
            body: JSON.stringify({
                bmdc,
                exp_year,
                online_fees,
            }),
        })

        if (response.ok) {
            setMsg('updated')
        } else {
            setMsg('Something went wrong')
        }
    }
    return (
        <div className={classes.General}>
            <form onSubmit={submit}>
                <div className={classes.formHeader}>Fees & Experience Update</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            BMDC
                            <input
                                type="text"
                                value={bmdc}
                                onChange={(e) => setBmdc(e.target.value)}
                                minLength={0}
                                required
                            />
                        </label>
                        <label>
                            Year of experience
                            <input
                                type="number"
                                value={exp_year}
                                onChange={(e) => setExpYear(e.target.value)}
                                minLength={0}
                                required
                            />
                        </label>
                        <label>
                            Online Consultation Fee
                            <input
                                type="text"
                                value={online_fees}
                                onChange={(e) => setOnlineFees(e.target.value)}
                                minLength={0}
                                required
                            />
                        </label>
                    </div>
                </div>
                <button className={classes.Button}>Update</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}
export default OtherInfo
