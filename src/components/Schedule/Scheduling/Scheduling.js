import { useState } from 'react'
import Days from './Days/Days'
import classes from './Scheduling.module.css'

const Scheduling = () => {
    const [menu, setMenu] = useState(1)
    return (
        <div>
            {/* <div className={classes.Nav}>
                <span
                    className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                    onClick={(e) => setMenu(1)}>
                    Online Consultation
                </span>
                <span
                    className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                    onClick={(e) => setMenu(2)}>
                    Offline Consultation
                </span>
            </div> */}
            <div>
                <Days />
            </div>
        </div>
    )
}
export default Scheduling
