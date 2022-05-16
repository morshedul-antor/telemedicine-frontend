import ProfileHeader from '../PublicProfile/ProfileHeader/ProfileHeader'
import classes from './PublicProfile.module.css'

const PublicProfile = () => {
    return (
        <div className={classes.Page}>
            <div className={classes.Container}>
                <div className={classes.PublicProfile}>
                    <div className={classes.Header}>
                        <div className={classes.Head}>
                            <ProfileHeader />
                        </div>
                        <div className={classes.BasicInfo}>
                            <h2>Dr. Jahid Hassan</h2>
                            <p>jahid@gmail.com</p>
                            <p>01511251489</p>
                        </div>
                    </div>
                    <div className={classes.ProfileDetails}>
                        <div className={classes.Basic}>
                            <div>
                                <h3>Qualification</h3>
                                <ul>
                                    <li>MBBS, Dhaka Medical College</li>
                                    <li>FRCS, BSMRMU</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Speciality</h3>
                                <ul>
                                    <li>Cardiologist</li>
                                    <li>Neural Surgery</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Professional}>
                            <div>
                                <h3>Chambers</h3>
                                <table>
                                    <tr>
                                        <td>Popular hospital</td>
                                        <td> </td>
                                        <td> </td>
                                        <td>Mon-Tue</td>
                                    </tr>
                                    <tr>
                                        <td>Labaid Hospital</td>
                                        <td> </td>
                                        <td> </td>
                                        <td>Mon-Tue</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublicProfile
