import React from 'react'
import chamber from '../../../assets/img/chamber.png'
import data from '../../../assets/img/data.png'
import doc from '../../../assets/img/doc.png'
import ep from '../../../assets/img/ep.png'
import report from '../../../assets/img/report.png'
import classes from './Service.module.css'

export default function Service() {
    return (
        <div className={classes.serviceWrapper}>
            <div className={classes.service}>
                <div className={classes.boxWrapper}>
                    <div className={classes.box}>
                        <p className={classes.number}>01</p>
                        <img className={classes.icon} src={ep} alt="" />
                        <p className={classes.title}>E Prescription</p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.number}>03</p>
                        <img className={classes.icon} src={chamber} alt="" />
                        <p className={classes.title}>Flexible Scheduling</p>
                    </div>
                </div>

                <div className={classes.box}>
                    <img className={classes.iconMain} src={doc} alt="" />
                    <p className={classes.titleMain}>Smart Doctor Solution</p>
                    <span>
                        Smart Doctor Solution is a digital doctor solution platform, that provides you top-notch medical
                        services at the comfort of your preferred area, redefine relationship and help direct your
                        attention to what really matters to the patients. Also it provides to develop the network with
                        the Doctors across the world.
                    </span>
                    <button>Discover More</button>
                </div>

                <div className={classes.boxWrapper}>
                    <div className={classes.box}>
                        <p className={classes.number}>02</p>
                        <img className={classes.icon} src={report} alt="" />
                        <p className={classes.title}>Patient Records</p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.number}>04</p>
                        <img className={classes.icon} src={data} alt="" />
                        <p className={classes.title}>Data Analytics</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
