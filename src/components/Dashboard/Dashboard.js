import { Snapshot, Appointment } from '.'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import classes from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader />
                <Snapshot />
                <Appointment />
            </div>
        </div>
    )
}

export default Dashboard
