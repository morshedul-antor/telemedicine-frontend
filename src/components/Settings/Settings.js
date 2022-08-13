import { useState } from 'react'
import Sidebar from '../Nav/Sidebar/Sidebar'
import ChangePassword from './ChangePassword/ChangePassword'
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
                            Professional Info
                        </span>
                        <span
                            className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(3)}>
                            Speciality
                        </span>
                        <span
                            className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(4)}>
                            Change Password
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <General /> : null}
                        {menu === 2 ? <ProfessionalInfoEdit /> : null}
                        {menu === 3 ? <SpecialityQualificationEdit /> : null}
                        {menu === 4 ? <ChangePassword /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings
