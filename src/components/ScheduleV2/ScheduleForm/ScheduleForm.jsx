import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Select from 'react-select'
import GridLoader from 'react-spinners/GridLoader'
import { refreshPage } from '../../../utils/refreshPage'
import classes from './ScheduleForm.module.css'

export default function ScheduleForm({ apiV1, token, chambers }) {
    const [active, setActive] = useState(2)
    const [selected, setSelected] = useState([])

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [slot, setSlot] = useState('')
    const [startHour, setStartHour] = useState('')
    const [endHour, setEndHour] = useState('')
    const [startMinute, setStartMinute] = useState('')
    const [endMinute, setEndMinute] = useState()
    const [startAmPm, setStartAmPm] = useState('am')
    const [endAmPm, setEndAmPm] = useState('pm')
    const [chamber, setChamber] = useState(null)
    const [online, setOnline] = useState(false)

    const [loading, setLoading] = useState(false)

    const options = [
        { label: 'Sunday', value: 'sun' },
        { label: 'Monday', value: 'mon' },
        { label: 'Tuesday', value: 'tue' },
        { label: 'Wednesday', value: 'wed' },
        { label: 'Thursday', value: 'thu' },
        { label: 'Friday', value: 'fri' },
        { label: 'Saturday', value: 'sat' },
    ]
    const customStyles = {
        control: () => ({
            display: 'flex',
            backgroundColor: 'var(--white)',
            border: '2px solid var(--white)',
            borderRadius: '6px',
            boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.35)',
            fontSize: '12px',
            color: 'var(--dark-grey)',
            outline: 'none',
        }),
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (selected.length > 0) {
            setLoading(true)

            const details = {
                date_start: startDate,
                date_end: endDate,
                time_start: `${startHour}:${startMinute}`,
                time_end: `${endHour}:${endMinute}`,
                time_start_am_pm: startAmPm,
                time_end_am_pm: endAmPm,
                week_day: selected.map((item) => item.value),
                online: online,
                chamber_id: chamber,
                booked_by_patient_id: 0,
                duration_min: slot,
            }

            let schedulePost = await fetch(`${apiV1}/doctor/schedules/range/`, {
                method: 'POST',
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(details),
            })
            if (schedulePost.ok) {
                // setMsg([...msg, 'New Chamber added.'])
                refreshPage()
            } else {
                setLoading(false)
            }
        } else {
            setLoading(false)
        }
    }

    return (
        <div className={classes.formWrapper}>
            <FontAwesomeIcon className={classes.icon} icon={faThumbtack} />
            <div className={classes.logo}>ADD SCHEDULE</div>

            <div className={classes.onOff}>
                <div
                    className={active === 2 ? `${classes.on}` : `${classes.off}`}
                    onClick={() => {
                        setActive(2)
                        setOnline(false)
                    }}>
                    <span>Chamber (Offline) Schedule</span>
                </div>
                <div
                    className={active === 1 ? `${classes.on}` : `${classes.off}`}
                    onClick={() => {
                        setActive(1)
                        setOnline(true)
                    }}>
                    <span>Online Schdule</span>
                </div>
            </div>

            <div className={classes.onlineOffline}>
                <p>{active === 2 ? 'Setup Chamber Schdeule' : 'Setup Online Schdeule'}</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={classes.innerWrap}>
                        {active === 2 ? (
                            <label>
                                Select Chamber
                                <select
                                    className={classes.select}
                                    onChange={(e) => setChamber(parseInt(e.target.value))}
                                    required>
                                    <option value="">Select</option>
                                    {chambers &&
                                        chambers.map((chamber, index) => (
                                            <option value={chamber.id} key={index}>
                                                {`${chamber.name} - ${chamber.district}`}
                                            </option>
                                        ))}
                                </select>
                            </label>
                        ) : (
                            ''
                        )}
                        <div className={classes.formGrid}>
                            <label>
                                Start Date
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                End Date
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Time Slot
                                <select className={classes.select} onChange={(e) => setSlot(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="15">15 Minutes</option>
                                    <option value="20">20 Minutes</option>
                                    <option value="30">30 Minutes</option>
                                </select>
                            </label>
                        </div>

                        <label>
                            Select Day(s)
                            <Select
                                isMulti
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                styles={customStyles}
                            />
                        </label>

                        <p className={classes.timeTitle}>Fill Schedule Time Range</p>
                        <div className={classes.timePicker}>
                            <div className={classes.to}>
                                <p>From</p>
                            </div>
                            <label>
                                <input
                                    type="number"
                                    placeholder="Hours"
                                    min={1}
                                    max={12}
                                    value={startHour}
                                    onChange={(e) => {
                                        setStartHour(parseInt(e.target.value))
                                    }}
                                    required
                                />
                            </label>
                            <div className={classes.divider}>
                                <p>:</p>
                            </div>
                            <label>
                                <input
                                    type="number"
                                    placeholder="Minutes"
                                    min={0}
                                    max={59}
                                    value={startMinute}
                                    onChange={(e) => {
                                        setStartMinute(parseInt(e.target.value))
                                    }}
                                    required
                                />
                            </label>
                            <label className={classes.timeOption}>
                                <select
                                    value={startAmPm}
                                    onChange={(e) => {
                                        setStartAmPm(e.target.value)
                                    }}
                                    required>
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </select>
                            </label>
                            <div className={classes.to}>
                                <p>To</p>
                            </div>
                            <label>
                                <input
                                    type="number"
                                    placeholder="Hours"
                                    min={1}
                                    max={12}
                                    value={endHour}
                                    onChange={(e) => {
                                        setEndHour(parseInt(e.target.value))
                                    }}
                                    required
                                />
                            </label>
                            <div className={classes.divider}>
                                <p>:</p>
                            </div>
                            <label>
                                <input
                                    type="number"
                                    placeholder="Minutes"
                                    min={0}
                                    max={59}
                                    value={endMinute}
                                    onChange={(e) => {
                                        setEndMinute(parseInt(e.target.value))
                                    }}
                                    required
                                />
                            </label>
                            <label className={classes.timeOption}>
                                <select
                                    value={endAmPm}
                                    onChange={(e) => {
                                        setEndAmPm(e.target.value)
                                    }}
                                    required>
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </select>
                            </label>
                        </div>
                        <p className={classes.warning}>
                            *N.B. Please do not set a schedule for more than one (1) month
                        </p>
                    </div>

                    {loading ? (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}>
                            <GridLoader color="#419CD9" size={10} loading={loading} />
                            <span style={{ color: 'var(--primary)' }}>Please Wait!</span>
                        </div>
                    ) : (
                        <button className={classes.button} type="submit">
                            {active === 2 ? 'Create Chamber Schedule' : 'Create Online Schedule'}
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}
