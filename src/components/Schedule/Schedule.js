import { Sidebar } from '../Nav'
import CreateSchedule from './CreateSchedule/CreateSchedule'
import classes from './Schedule.module.css'
import ScheduleList from './ScheduleList/ScheduleList'

const Schedule = () => {
    return (
        <div className={classes.Schedule}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.Wrapper}>
                <div>
                    <div>
                        <CreateSchedule />
                    </div>
                </div>
            </div>
            <div className={classes.WrapperLeft}>
                <div>
                    <ScheduleList />
                </div>
            </div>
        </div>
    )
}
export default Schedule
