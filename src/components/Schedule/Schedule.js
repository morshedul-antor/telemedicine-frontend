import { Sidebar } from '../Nav'
import TimeSlot from '../Schedule/Scheduling/TimeSlot/TimeSlot'
import classes from './Schedule.module.css'
import Scheduling from './Scheduling/Scheduling'

const Schedule = () => {
    return (
        <div className={classes.Schedule}>
            <div>
                <Sidebar />
            </div>

            <div className={classes.Wrapper}>
                <div className={classes.WrapperLeft}>
                    <Scheduling />
                </div>
                <div className={classes.WrapperRight}>
                    <TimeSlot />
                </div>
            </div>
        </div>
    )
}
export default Schedule
