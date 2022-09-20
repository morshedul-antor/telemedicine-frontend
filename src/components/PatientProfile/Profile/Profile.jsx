import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import BG from '../../../assets/img/bg.jpg'
import Pic from '../../../assets/img/patient/p.png'
import IndicatorView from './Indicator/IndicatorView'
import Prescription from './Prescription/Prescription'
import classes from './Profile.module.css'
import Summery from './Summery/Summery'

export default function Profile() {
    const [menu, setMenu] = useState(1)

    return (
        <div className={classes.profile}>
            <div className={classes.info}>
                <img src={BG} alt="" />
                <img src={Pic} alt="" />
                <div>
                    <h2>Shariar Duke</h2>
                    <span>(25 Years)</span>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> +88 01927001122
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} /> Road 2, Mirpur, Dhaka
                    </p>
                    <p>New Patient</p>
                </div>
            </div>
            <div className={classes.indicator}>
                <Summery />
                <div className={classes.navbar}>
                    <span
                        className={menu === 1 ? `${classes.active}` : `${classes.deactive}`}
                        onClick={(e) => setMenu(1)}>
                        Indicators
                    </span>
                    <span
                        className={menu === 2 ? `${classes.active}` : `${classes.deactive}`}
                        onClick={(e) => setMenu(2)}>
                        Prescriptions
                    </span>
                    <span
                        className={menu === 3 ? `${classes.active}` : `${classes.deactive}`}
                        onClick={(e) => setMenu(3)}>
                        Medical Reports
                    </span>
                </div>
                {menu === 1 ? <IndicatorView /> : ''}
                {menu === 2 ? <Prescription /> : ''}
                {menu === 3 ? '' : ''}
            </div>
        </div>
    )
}
