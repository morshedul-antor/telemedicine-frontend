import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from './Popup/Popup'
import classes from './Pricing.module.css'

export default function Pricing() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classes.wrapper} id="subscription">
            <div className={classes.logo}>
                <span>-----</span> Subscription Plan <span>-----</span>
            </div>
            <div className={classes.pricingTable}>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Basic</h1>
                        <p className={classes.tablePricing}>
                            <div>
                                <span>৳</span>
                                <span>0</span>
                                <span>/for 1 month</span>
                            </div>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>Doctor Digital Profile</li>
                            <li>Doctor Promotion in Doctor Portal</li>
                            <p>Free Trail For 1 Month</p>
                            <li>Doctor Schedule Management</li>
                            <li>Patient Online Appointment</li>
                            <li>Patient Serial Management</li>
                            <li>Patient Health Record</li>
                            <li>E-Prescription</li>
                            <li>Patient List</li>
                        </ul>
                        <Link to="login">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Plus</h1>
                        <p className={classes.tablePricing}>
                            <div>
                                <span>৳</span>
                                <span>999</span>
                                <span>/for 1 month</span>
                            </div>
                            <div>
                                <span>৳</span>
                                <span>4999</span>
                                <span>/for 1 year</span>
                            </div>
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
                        <Link href="#">
                            <button className={classes.tableStart} onClick={() => setIsOpen(true)}>
                                Subscribe Now
                            </button>
                        </Link>
                    </li>
                </ul>
                {isOpen && <Popup setIsOpen={setIsOpen} />}
            </div>
        </div>
    )
}
