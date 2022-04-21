import { useState } from 'react'
import Sidebar from '../Nav/Sidebar/Sidebar'
import ChangePassword from './ChangePassword/ChangePassword'
import General from './General/General'
import classes from './Settings.module.css'

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
                            className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(3)}>
                            Change Password
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <General /> : null}
                        {menu === 3 ? <ChangePassword /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings
