import { useState } from 'react'
import classes from './Days.module.css'

const Days = () => {
    let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    const [day, setDay] = useState('Saturday')

    return (
        <div>
            <div className={classes.DayNav}>
                {days.map((days, i) => {
                    return (
                        <span
                            className={day === days ? `${classes.activeNav}` : `${classes.deactivenav}`}
                            onClick={(e) => setDay(days)}>
                            {days}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
export default Days
