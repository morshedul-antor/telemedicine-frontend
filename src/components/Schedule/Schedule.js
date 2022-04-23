import { useState } from 'react'
import { Sidebar } from '../Nav'
import CreateSchedule from './CreateSchedule/CreateSchedule'
import classes from './Schedule.module.css'
import ScheduleList from './ScheduleList/ScheduleList'
import SelectDate from './SelectDate/SelectDate'

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
                            Select date
                        </span>

                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            Add Schedule
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <SelectDate /> : null}
                        {/* {menu === 2 ? <SelectDate /> : null} */}
                    </div>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <ScheduleList />
            </div>
        </div>
    )
}
export default Schedule
