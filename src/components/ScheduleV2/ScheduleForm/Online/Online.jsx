import React, { useState } from 'react'
import Select from 'react-select'
import classes from './Online.module.css'

export default function Online() {
    const [selected, setSelected] = useState([])

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
            fontSize: '14px',
            color: 'var(--dark-grey)',
            outline: 'none',
        }),
    }

    return (
        <div className={classes.online}>
            <p>Setup Online Schdeule</p>
            <form>
                <div className={classes.innerWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            Start Date
                            <input type="date" required />
                        </label>

                        <label>
                            End Date
                            <input type="date" required />
                        </label>
                        <label>
                            Time Slot
                            <select className={classes.select}>
                                <option value="">Select</option>
                                <option value="15">15 Minutes</option>
                                <option value="20">20 Minutes</option>
                                <option value="30">30 Minutes</option>
                            </select>
                        </label>
                    </div>

                    <p className={classes.timeTitle}>Fill Time Range</p>
                    <div className={classes.timePicker}>
                        <label>
                            <input
                                type="number"
                                placeholder="HH"
                                // value={hours}
                                min={1}
                                max={12}
                                // onChange={(e) => {
                                //     setHours(parseInt(e.target.value))
                                // }}
                                required
                            />
                        </label>
                        <div className={classes.divider}>
                            <p>:</p>
                        </div>
                        <label>
                            <input
                                type="number"
                                placeholder="MM"
                                // value={minutes}
                                min={0}
                                max={59}
                                // onChange={(e) => {
                                //     setMinutes(parseInt(e.target.value))
                                // }}
                                required
                            />
                        </label>
                        <label className={classes.timeOption}>
                            <select
                                // value={am_pm}
                                // onChange={(e) => {
                                //     setAmPm(e.target.value)
                                // }}
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
                                placeholder="HH"
                                // value={hours}
                                min={1}
                                max={12}
                                // onChange={(e) => {
                                //     setHours(parseInt(e.target.value))
                                // }}
                                required
                            />
                        </label>
                        <div className={classes.divider}>
                            <p>:</p>
                        </div>
                        <label>
                            <input
                                type="number"
                                placeholder="MM"
                                // value={minutes}
                                min={0}
                                max={59}
                                // onChange={(e) => {
                                //     setMinutes(parseInt(e.target.value))
                                // }}
                                required
                            />
                        </label>
                        <label className={classes.timeOption}>
                            <select
                                // value={am_pm}
                                // onChange={(e) => {
                                //     setAmPm(e.target.value)
                                // }}
                                required>
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                        </label>
                    </div>

                    <label>
                        Select Days
                        {/* <pre>{JSON.stringify(selected.map((val) => val.value))}</pre> */}
                        <Select
                            isMulti
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            styles={customStyles}
                        />
                    </label>
                </div>
                <button className={classes.button} type="submit">
                    Create Online Schedule
                </button>
            </form>
        </div>
    )
}
