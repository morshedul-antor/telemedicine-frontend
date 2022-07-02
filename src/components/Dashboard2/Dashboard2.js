import { Sidebar } from '../Nav'
import Calender from './Calender/Calender'
import classes from './Dashboard2.module.css'
import EndedAppointments from './EndedAppointments/EndedAppointment'
import Events from './Events/Events'
import LatestPatient from './LatestPatient/LatestPatient'
import ProfileCard from './ProfileCard/ProfileCard'
import UpcomingAppointment from './UpcomingAppointment/UpcomingAppointment'

const Dashboard2 = () => {
    return (
        <div className={classes.Dashboard}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.DashboardContainer}>
                <div className={classes.P1}>
                    <div>
                        <LatestPatient />
                    </div>
                    <div>
                        <UpcomingAppointment />
                    </div>
                    <div>
                        <EndedAppointments />
                    </div>
                </div>
                <div className={classes.P2}>
                    <Events />
                </div>
                <div className={classes.P3}>
                    <ProfileCard />
                    <Calender />
                </div>
            </div>
        </div>
    )
}
export default Dashboard2
