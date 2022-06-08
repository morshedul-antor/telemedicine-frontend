import React from 'react'
import { Link } from 'react-router-dom'
import bgDoc from '../../assets/img/background-doc-table.jpg'
import bg from '../../assets/img/bg.jpg'
import chamber from '../../assets/img/chamber.png'
import data from '../../assets/img/data.png'
import doc from '../../assets/img/doc.png'
import doctors from '../../assets/img/doctors.png'
import ep from '../../assets/img/ep.png'
import pat from '../../assets/img/pat.png'
import report from '../../assets/img/report.png'
import classes from './LandingPage.module.css'
import Service from './Serice/Service'

export default function LandingPage() {
    return (
        <>
            <div
                style={{
                    background: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '-10',
                    opacity: '.1',
                }}></div>
            <div className={classes.main}>
                <div className={classes.wrapper}>
                    <div className={classes.nav}>
                        <div className={classes.topNavbar}>
                            <div className={classes.logo}>Smart Doctor</div>
                            <div className={classes.navList}>
                                <Link to="#">Services</Link>
                                <Link to="#">About</Link>
                                <Link to="#">Demo</Link>
                                <Link to="/login">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.hero}>Hero</div>

                    <div className={classes.aboutWrapper}>
                        <div className={classes.about}>
                            <div className={classes.box}>
                                <div className={classes.title}>Bringing The Future Of Healthcare</div>
                                <p>
                                    Smart Doctor Solution is a digital doctor solution platform, that provides you
                                    top-notch medical services at the comfort of your preferred area, redefine
                                    relationship and help direct your attention to what really matters to the patients.
                                    Also it provides to develop the network with the Doctors across the world.
                                </p>
                            </div>
                            <div className={classes.box}>
                                <img src={doctors} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <div className={classes.sectionTitle}>Our Services</div> */}
                    <div className={classes.serviceWrapper}>
                        <div className={classes.service}>
                            <div className={classes.box}>
                                <p className={classes.number}>01</p>
                                <img className={classes.icon} src={doc} alt="" />
                                <p className={classes.title}>Smart Doctor</p>
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem
                                    dignissimos veniam amet atque omnis ducimus error vitae.
                                </span>
                                <button>Discover More</button>
                            </div>
                            <div className={classes.box}>
                                <p className={classes.number}>02</p>
                                <img className={classes.icon} src={ep} alt="" />
                                <p className={classes.title}>E Prescription</p>
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem
                                    dignissimos veniam amet atque omnis ducimus error vitae.
                                </span>
                                <button>Discover More</button>
                            </div>
                            <div className={classes.box}>
                                <p className={classes.number}>03</p>
                                <img className={classes.icon} src={pat} alt="" />
                                <p className={classes.title}>My Health Portal</p>
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem
                                    dignissimos veniam amet atque omnis ducimus error vitae.
                                </span>
                                <button>Discover More</button>
                            </div>
                        </div>
                    </div>

                    <Service />

                    <div className={classes.sectionWrapper}>
                        <div className={classes.section}>
                            <div className={classes.box}>
                                <p>Smart Doctor Solution</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={ep} alt="" />
                                    <div>
                                        <p className={classes.title}>E Prescription</p>
                                        <span>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime
                                            rem dignissimos veniam amet atque omnis ducimus error vitae.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={report} alt="" />
                                    <div>
                                        <p className={classes.title}>Patient Records</p>
                                        <span>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime
                                            rem dignissimos veniam amet atque omnis ducimus error vitae.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={chamber} alt="" />
                                    <div>
                                        <p className={classes.title}>Flexible Scheduling</p>
                                        <span>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime
                                            rem dignissimos veniam amet atque omnis ducimus error vitae.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={data} alt="" />
                                    <div>
                                        <p className={classes.title}>Data Analytics</p>
                                        <span>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime
                                            rem dignissimos veniam amet atque omnis ducimus error vitae.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.footer}></div>
                </div>
            </div>
        </>
    )
}
