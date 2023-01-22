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
                <p>Smart Doctor Subscription & Promotion Packages</p>
            </div>

            <div className={classes.pricingTable}>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Basic Package</h1>
                        <p className={classes.tablePricing}>
                            <div>
                                <span>৳</span>
                                <span>0</span>
                                <span>/for 1 month</span>
                            </div>
                        </p>
                        <ul className={classes.tableOptions}>
                            <p>Free Forever</p>
                            <li>Doctor Digital Profile</li>
                            <li>Doctor Schedule Management</li>
                        </ul>
                        <Link to="register">
                            <button className={classes.tableStart}>Register Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Silver Package</h1>
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
                            <p>Free Trial For 1 Month</p>
                            <li>Everything in Basic Package +</li>
                            <li>Doctor Top Position Listing in Find Doctor Search</li>
                            <li>Dedicated Doctor Support Line for HealthX Profile Development</li>
                            <li>E-Prescription</li>
                            <li>Patient List</li>
                            <li>Patient Health Record</li>
                            <li>Patient Serial Management*</li>
                            <span>* Under Development</span>
                        </ul>
                        <Link to="#">
                            <button className={classes.tableStart} onClick={() => setIsOpen(true)}>
                                Subscribe Now
                            </button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>Gold Package</h1>
                        <p className={classes.tablePricing}>
                            <div>
                                <span>৳</span>
                                <span>1599</span>
                                <span>/for 1 month</span>
                            </div>
                            <div>
                                <span>৳</span>
                                <span>7999</span>
                                <span>/for 1 year</span>
                            </div>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>Everything in Silver Package +</li>
                            <li>Promotion of self-made videos on assorted HealthX platforms</li>
                            <li>
                                Assistance in a set amount of video production and editing every month
                                <sup>1</sup>
                            </li>
                            <li>
                                Maintenance & promotion of personal pages on social media platforms<sup>2</sup>
                            </li>

                            <ol className={classes.listOL}>
                                <li>
                                    HealthX will assist you in planning and producing up to 4 videos per month which you
                                    can upload on your own YouTube page, if any, including HealthX branding and logo
                                    alongside publishing the videos on HealthX platforms.
                                </li>
                                <li>
                                    HealthX will create and post up to 2 posts per month on your own Facebook Page and
                                    Instagram Profile with HealthX branding and logo alongside publishing the posts on
                                    HealthX platforms.
                                </li>
                            </ol>
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
