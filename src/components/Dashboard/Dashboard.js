import { Snapshot, Appointment } from '.'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import DoctorDetails from '../Settings/DoctorDetails/DoctorDetails'
import classes from './Dashboard.module.css'

const Dashboard = ({ active }) => {
    return (
        <div className={classes.Dashboard}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader active={active} />
                <Snapshot />
                <Appointment />
            </div>
        </div>
    )
}

export default Dashboard
