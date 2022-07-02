import { useState } from 'react'
import PreScheduling from '../PreScheduling/PreScheduling'
import classes from './Days.module.css'

const Days = () => {
    let daystr = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    const [dayCurrent, setDayCurrent] = useState('Saturday')

    return (
        <div>
            <div className={classes.DayNav}>
                {daystr.map((days, i) => {
                    return (
                        <span
                            className={dayCurrent === days ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setDayCurrent(days)}>
                            {days}
                        </span>
                    )
                })}
            </div>
            <div>
                {dayCurrent === 'Saturday' ? <PreScheduling day={1} /> : null}
                {dayCurrent === 'Sunday' ? <PreScheduling day={2} /> : null}
                {dayCurrent === 'Monday' ? <PreScheduling day={3} /> : null}
                {dayCurrent === 'Tuesday' ? <PreScheduling day={4} /> : null}
                {dayCurrent === 'Wednesday' ? <PreScheduling day={5} /> : null}
                {dayCurrent === 'Thursday' ? <PreScheduling day={6} /> : null}
                {dayCurrent === 'Friday' ? <PreScheduling day={7} /> : null}
            </div>
        </div>
    )
}
export default Days
