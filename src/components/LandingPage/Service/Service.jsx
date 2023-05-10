import P1 from '../../../assets/img/dept/1.png'
import P2 from '../../../assets/img/dept/2.png'
import P3 from '../../../assets/img/dept/3.png'
import P4 from '../../../assets/img/dept/4.png'
import P5 from '../../../assets/img/dept/5.png'
import P6 from '../../../assets/img/dept/6.png'
import classes from './Service.module.css'

export default function Service() {
    return (
        <div className={classes.service}>
            <p className={classes.title}>OUR DEPARTMENTS</p>
            <div className={classes.boxWrapper}>
                <div className={classes.box}>
                    <p>01</p>
                    <img src={P1} alt="" />
                    <span>Neurology</span>
                </div>
                <div className={classes.box}>
                    <p>02</p>
                    <img src={P2} alt="" />
                    <span>Eye Care</span>
                </div>
                <div className={classes.box}>
                    <p>03</p>
                    <img src={P3} alt="" />
                    <span>Cardiac Care</span>
                </div>

                <div className={classes.box}>
                    <p>04</p>
                    <img src={P4} alt="" />
                    <span>Heart Care</span>
                </div>
                <div className={classes.box}>
                    <p>05</p>
                    <img src={P5} alt="" />
                    <span>Osteoporosis</span>
                </div>
                <div className={classes.box}>
                    <p>06</p>
                    <img src={P6} alt="" />
                    <span>ENT</span>
                </div>
            </div>
        </div>
    )
}
