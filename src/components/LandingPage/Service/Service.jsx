import P1 from '../../../assets/service/1.png'
import P2 from '../../../assets/service/2.png'
import P3 from '../../../assets/service/3.png'
import P4 from '../../../assets/service/4.png'
import P5 from '../../../assets/service/5.png'
import P6 from '../../../assets/service/6.png'
import classes from './Service.module.css'

export default function Service() {
    return (
        <div className={classes.service}>
            <div className={classes.boxWrapper}>
                <div className={classes.box}>
                    <p>01</p>
                    <img src={P1} alt="" />
                    <span>Doctor Digital Profile</span>
                </div>
                <div className={classes.box}>
                    <p>02</p>
                    <img src={P2} alt="" />
                    <span>Patient Serial Management </span>
                </div>
                <div className={classes.box}>
                    <p>03</p>
                    <img src={P3} alt="" />
                    <span>E-Prescription</span>
                </div>

                <div className={classes.box}>
                    <p>04</p>
                    <img src={P4} alt="" />
                    <span>Patient Medical Record</span>
                </div>
                <div className={classes.box}>
                    <p>05</p>
                    <img src={P5} alt="" />
                    <span>Patient Data Analysis</span>
                </div>
                <div className={classes.box}>
                    <p>06</p>
                    <img src={P6} alt="" />
                    <span>Continuous Medical Education</span>
                </div>
            </div>
        </div>
    )
}
