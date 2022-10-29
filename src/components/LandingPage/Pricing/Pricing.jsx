import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Pricing.module.css'

export default function Pricing() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Basic</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>0</span>
                            <span>/for 1 month</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>Doctor Digital Profile</li>
                            <li>Doctor Promotion in Doctor Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Plus</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>999</span>
                            <span>/for 1 month</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>Doctor Digital Profile</li>
                            <li>Doctor Promotion in Doctor Portal</li>
                            <li>Doctor Schedule Management</li>
                            <li>Patient Online Appointment</li>
                            <li>Patient Serial Management</li>
                            <li>Patient Health Record</li>
                            <li>E-Prescription</li>
                            <li>Patient List</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
