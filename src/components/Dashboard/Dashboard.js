import { Appointment } from '.'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import classes from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.Content}>
                <ProfileHeader />
                <Appointment />
            </div>
        </div>
    )
}

export default Dashboard
