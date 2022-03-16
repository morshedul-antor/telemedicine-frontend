import { Sidebar } from '../Nav'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>

            <div>
                <h2>Hello</h2>
            </div>
        </div>
    )
}

export default Profile
