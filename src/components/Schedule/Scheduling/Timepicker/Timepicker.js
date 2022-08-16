import { useState, useContext, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import classes from './Timepicker.module.css'

const Timepicker = ({ day, msg, setMsg, online }) => {
    const { stateAuth } = useContext(Auth)

    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [am_pm, setAmPm] = useState('am')
    const [alert, setAlert] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false)
        }, 2000)

        return clearTimeout(timer)
    }, [msg])

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const setSchedule = async (e) => {
        e.preventDefault()
        let setScheduleFetch = await fetch(`${apiV1}/doctor/schedules`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                day,
                hours,
                minutes,
                am_pm,
                online,
            }),
        })
        if (setScheduleFetch.ok) {
            setMsg('Schedule Created')
        } else {
            setMsg('something wrong happened')
        }
    }
    return (
        <div className={classes.Timepicker}>
            <form onSubmit={setSchedule}>
                <div className={classes.TimepickerBox}>
                    <label>
                        <input
                            type="number"
                            placeholder="HH"
                            value={hours}
                            min={1}
                            max={12}
                            onChange={(e) => {
                                setHours(parseInt(e.target.value))
                            }}
                            required
                        />
                    </label>
                    <div className={classes.Divider}>:</div>
                    <label>
                        <input
                            type="number"
                            placeholder="MM"
                            value={minutes}
                            min={0}
                            max={59}
                            onChange={(e) => {
                                setMinutes(parseInt(e.target.value))
                            }}
                            required
                        />
                    </label>
                    <label className={classes.AP}>
                        <select
                            value={am_pm}
                            onChange={(e) => {
                                setAmPm(e.target.value)
                            }}
                            required>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                        </select>
                    </label>
                </div>
                <button className={classes.Button}>Set</button>
            </form>
            {alert && (
                <div className={classes.alertMessage}>
                    <span>{msg}</span>
                </div>
            )}
        </div>
    )
}
export default Timepicker
