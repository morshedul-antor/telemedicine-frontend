import { Sidebar } from '../Nav'
import TimeSlot from '../Schedule/Scheduling/TimeSlot/TimeSlot'
import CreateSchedule from './CreateSchedule/CreateSchedule'
import Slot from './CreateSchedule/Slot/Slot'
import classes from './Schedule.module.css'
import ScheduleList from './ScheduleList/ScheduleList'
import Scheduling from './Scheduling/Scheduling'

const Schedule = () => {
    return (
        <div className={classes.Schedule}>
            <div>
                <Sidebar />
            </div>
            {/* <div className={classes.Wrapper}>
                <div className={classes.WrapperRight}>
                    <div>
                        <CreateSchedule />
                    </div>
                    <div></div>
                </div>
                <div className={classes.WrapperLeft}>
                    <ScheduleList />
                </div>
            </div> */}

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
