import React from 'react'
import classes from './Offline.module.css'

export default function Offline() {
    return (
        <div className={classes.offline}>
            <p>Setup Chamber Schdeule</p>
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
                            Time Split
                            <select className={classes.select}>
                                <option value="">Select</option>
                                <option value="">15 Minutes</option>
                                <option value="">20 Minutes</option>
                                <option value="">30 Minutes</option>
                            </select>
                        </label>
                    </div>
                    <label>
                        Select Days
                        <select className={classes.select}>
                            <option value="">Select</option>
                            <option value="mon">Monday</option>
                            <option value="tue">Tuesday</option>
                        </select>
                    </label>
                </div>
                <button className={classes.button} type="submit">
                    Create Chamber Schedule
                </button>
            </form>
        </div>
    )
}
