import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import Chambers from './Chambers/Chambers'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>
            <div>
                <ProfileHeader />
                <Chambers />
            </div>
        </div>
    )
}

export default Profile
