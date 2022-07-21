import { useState } from 'react'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import Chambers from './Chambers/Chambers'
import ProfessionalInfo from './ProfessionalInfo/ProfessionalInfo'
import classes from './Profile.module.css'
import ProfileDetail from './ProfileDetail/ProfileDetail'

const Profile = () => {
    const [menu, setMenu] = useState(1)

    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.profileWrapper}>
                <div className={classes.profileHeader}>
                    <ProfileHeader />
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.Info}>
                        <div>
                            <p>BMDC</p>
                            <span>A-92227</span>
                        </div>
                        <div>Experience</div>
                    </div>
                </div>

                <div className={classes.Wrapper}>
                    <div>
                        <div className={classes.Nav}>
                            <span
                                className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(1)}>
                                Detail
                            </span>

                            <span
                                className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(2)}>
                                Professional Info
                            </span>

                            {/* <span
                                className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(3)}>
                                Achievement
                            </span> */}

                            <span
                                className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(4)}>
                                Chambers
                            </span>
                        </div>
                        <div>
                            {menu === 1 ? <ProfileDetail /> : null}
                            {menu === 2 ? <ProfessionalInfo /> : null}
                            {menu === 4 ? <Chambers /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
