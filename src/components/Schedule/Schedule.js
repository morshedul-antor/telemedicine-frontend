import { Sidebar } from '../Nav'
import TimeSlot from '../Schedule/Scheduling/TimeSlot/TimeSlot'
import classes from './Schedule.module.css'
import Scheduling from './Scheduling/Scheduling'
import SlotOff from './Scheduling/TimeSlotOff/TimeSlotOff'

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
                    <SlotOff />
                </div>
            </div>
        </div>
    )
}
export default Schedule
