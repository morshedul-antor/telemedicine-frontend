import { useState } from 'react'
import Sidebar from '../Nav/Sidebar/Sidebar'
import ChangePassword from './ChangePassword/ChangePassword'
import ExperiencenFees from './ExperiencenFees/ExperiencenFees'
import General from './General/General'
import ProfessionalInfoEdit from './ProfessionalInfoEdit/ProfessionalInfoEdit'
import classes from './Settings.module.css'
import SpecialityQualificationEdit from './SpecialityQualificationEdit/SpecialityQualificationEdit'

const Settings = () => {
    const [menu, setMenu] = useState(1)

    return (
        <div className={classes.Settings}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.Wrapper}>
                <div>
                    <div className={classes.Nav}>
                        <span
                            className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(1)}>
                            General
                        </span>
                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            Fees & Experience
                        </span>
                        {/* <span
                            className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(3)}>
                            Professional Info
                        </span> */}
                        <span
                            className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(4)}>
                            Qualification & Speciality
                        </span>
                        <span
                            className={menu === 5 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(5)}>
                            Change Password
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <General /> : null}
                        {menu === 2 ? <ExperiencenFees /> : null}
                        {menu === 3 ? <ProfessionalInfoEdit /> : null}
                        {menu === 4 ? <SpecialityQualificationEdit /> : null}
                        {menu === 5 ? <ChangePassword /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings
