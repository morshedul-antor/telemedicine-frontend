import { useState } from 'react'
import OfflineForm from './OfflineForm/OfflineForm'
import OnlineForm from './OnlineForm/OnlineForm'
import classes from './PreScheduling.module.css'

const PreScheduling = () => {
    const [activate, setActivate] = useState(0)
    return (
        <div>
            <div className={classes.scheduleForm}>
                <div className={classes.onOff}>
                    <div>
                        <span
                            className={activate === 0 ? `${classes.on}` : `${classes.off}`}
                            onClick={(e) => setActivate(0)}>
                            Online
                        </span>
                    </div>
                    <div>
                        <span
                            className={activate === 1 ? `${classes.on}` : `${classes.off}`}
                            onClick={(e) => setActivate(1)}>
                            Offline
                        </span>
                    </div>
                </div>
                <div>
                    {activate === 0 ? <OnlineForm /> : null}
                    {activate === 1 ? <OfflineForm /> : null}
                </div>
            </div>
        </div>
    )
}
export default PreScheduling
