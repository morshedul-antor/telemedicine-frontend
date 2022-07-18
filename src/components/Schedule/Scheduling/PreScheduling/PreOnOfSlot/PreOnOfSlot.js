import { useState } from 'react'
import Slots from '../Slots/Slots'
import classes from './PreOnOfSlot.module.css'

const PreOnOfSlot = ({ day, msg, setMsg }) => {
    const [on, setOn] = useState(1)

    return (
        <div>
            <div className={classes.header}>
                <span className={on === 1 ? `${classes.on}` : `${classes.off}`} onClick={(e) => setOn(1)}>
                    Online
                </span>

                <span className={on === 0 ? `${classes.on}` : `${classes.off}`} onClick={(e) => setOn(0)}>
                    Offline
                </span>
            </div>
            <div className={classes.Slots}>
                {on === 1 ? <Slots day={day} msg={msg} setMsg={setMsg} on={on} /> : null}
                {on === 0 ? <Slots day={day} msg={msg} setMsg={setMsg} on={on} /> : null}
            </div>
        </div>
    )
}
export default PreOnOfSlot
