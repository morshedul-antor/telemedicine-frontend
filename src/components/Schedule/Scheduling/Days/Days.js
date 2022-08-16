import { useState } from 'react'
import PreOnOfSlot from '../PreScheduling/PreOnOfSlot/PreOnOfSlot'
import PreScheduling from '../PreScheduling/PreScheduling'
import classes from './Days.module.css'

const Days = () => {
    let daystr = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const [msg, setMsg] = useState([])
    const [dayCurrent, setDayCurrent] = useState('Saturday')
    const [day, setDay] = useState(1)

    return (
        <div>
            <div className={classes.slotReady}>
                <div className={classes.DayNav}>
                    {daystr.map((days, i) => {
                        return (
                            <span
                                className={dayCurrent === days ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                key={i}
                                onClick={(e) => {
                                    setDayCurrent(days)
                                    setDay(i + 1)
                                }}>
                                {days}
                            </span>
                        )
                    })}
                </div>
                <div>
                    {dayCurrent === 'Saturday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Sunday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Monday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Tuesday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Wednesday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Thursday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                    {dayCurrent === 'Friday' ? <PreScheduling day={day} msg={msg} setMsg={setMsg} /> : null}
                </div>
            </div>

            <div className={classes.preSlots}>
                <PreOnOfSlot day={day} msg={msg} setMsg={setMsg} />
            </div>
        </div>
    )
}
export default Days
