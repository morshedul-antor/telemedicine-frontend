import { useState } from 'react'
import OfflineForm from './OfflineForm/OfflineForm'
import OnlineForm from './OnlineForm/OnlineForm'
import classes from './PreScheduling.module.css'

const PreScheduling = ({ day, msg, setMsg }) => {
    const [online, setOnline] = useState(1)

    return (
        <div>
            <div className={classes.scheduleForm}>
                <div className={classes.preSchedule}>
                    <div className={classes.onOff}>
                        <div className={classes.off}>
                            <span
                                className={online === 1 ? `${classes.on}` : `${classes.off}`}
                                onClick={(e) => setOnline(1)}>
                                Online
                            </span>
                        </div>
                        <div>
                            <span
                                className={online === 0 ? `${classes.on}` : `${classes.off}`}
                                onClick={(e) => setOnline(0)}>
                                Offline
                            </span>
                        </div>
                    </div>
                    <div className={classes.Form}>
                        {online === 1 ? <OnlineForm day={day} msg={msg} setMsg={setMsg} online={online} /> : null}
                        {online === 0 ? <OfflineForm day={day} msg={msg} setMsg={setMsg} online={online} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PreScheduling
