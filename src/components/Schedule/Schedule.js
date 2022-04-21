import { useState } from 'react'
import { Sidebar } from '../Nav'
import AddSchedule from './AddSchedule/AddSchedule'
import classes from './Schedule.module.css'
import SeeCustomSchedule from './SeeCustomSchedule/SeeCustomSchedule'

const Schedule = () => {
    const [menu, setMenu] = useState(1)
    return (
        <div className={classes.Schedule}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.Wrapper}>
                <div>
                    <div className={classes.Nav}>
                        <span
                            className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(1)}>
                            See custom Schedule
                        </span>

                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            Add Schedule
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <SeeCustomSchedule /> : null}
                        {/* {menu === 2 ? <SeeCustomSchedule /> : null} */}
                    </div>
                </div>
            </div>
            <div className={classes.scheduleList}>
                <h1>Custom Schedule list</h1>
            </div>
        </div>
    )
}
export default Schedule
