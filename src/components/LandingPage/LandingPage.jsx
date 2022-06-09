import React from 'react'
import { Link } from 'react-router-dom'
import Love from '../../assets/img/LOVE.png'
import a1 from '../../assets/img/a2.png'
import bgDoc from '../../assets/img/background-doc-table.jpg'
import bg from '../../assets/img/bg.jpg'
import docAll from '../../assets/img/cds.png'
import chamber from '../../assets/img/chamber.png'
import data from '../../assets/img/data.png'
import doc from '../../assets/img/doc.png'
import doctors from '../../assets/img/docc.png'
import ep from '../../assets/img/ep.png'
import footerImg from '../../assets/img/footer.png'
import pat from '../../assets/img/pat.png'
import bgnew from '../../assets/img/plus-bg.png'
import report from '../../assets/img/report.png'
import fb from '../../assets/img/social/fb.png'
import link from '../../assets/img/social/link.png'
import yt from '../../assets/img/social/yt.png'
import classes from './LandingPage.module.css'
import Service from './Serice/Service'

export default function LandingPage() {
    return (
        <>
            <div
                style={{
                    background: `url(${bgnew})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '-10',
                    opacity: '.4',
                }}></div>
            <div className={classes.main}>
                <div className={classes.wrapper}>
                    <div className={classes.nav}>
                        <div className={classes.topNavbar}>
                            <div className={classes.logo}>Smart Doctor</div>
                            <div className={classes.navList}>
                                <a href="#features">Features</a>
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
                                <div className={classes.title}>
                                    <p>Smart Doctor Solution</p>
                                    <span>Bringing The Future Of Healthcare</span>
                                </div>

                                <p>
                                    Smart Doctor Solution is a digital doctor solution platform that provides you with
                                    top-notch medical services in the comfort of your preferred area, redefines
                                    relationships, and helps direct your attention to what really matters to patients.
                                    It also provides to develop the network with doctors across the world.
                                </p>
                                <div className={classes.buttonContainer}>
                                    <button>Login</button>
                                    <button>Register</button>
                                </div>
                            </div>
                            <div className={classes.box}>
                                <img src={a1} className={classes.bgImg} alt="" />
                                <img src={doctors} className={classes.docImg} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <div className={classes.sectionTitle}>Our Services</div> */}
                    {/* <div className={classes.serviceWrapper} id="service">
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
                    </div> */}

                    <Service />

                    <div className={classes.sectionWrapper} id="features">
                        <div className={classes.logo}>
                            <span>-----</span> Features <span>-----</span>
                        </div>
                        <div className={classes.section}>
                            <div className={classes.box}>
                                <img className={classes.iconAll} src={docAll} alt="" />
                                <img className={classes.iconBg} src={a1} alt="" />
                            </div>
                            <div className={classes.box}>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={ep} alt="" />
                                    <div>
                                        <p className={classes.title}>E Prescription</p>
                                        <span>
                                            User-friendly interface with paperless digital prescription generation.
                                            Complies with Comprehensive Drug data base, Pathological lab test, Patients
                                            Complaints & Advice with pre-filled & auto suggestion.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={report} alt="" />
                                    <div>
                                        <p className={classes.title}>Appointment Schedule</p>
                                        <span>Flexible appointment schedule for online & offline chamber.</span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={chamber} alt="" />
                                    <div>
                                        <p className={classes.title}>Smart Chamber Management</p>
                                        <span>
                                            Easily accessible, hustle free, cloud based paperless Multiple smart chamber
                                            management with active & de-active status.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.boxContainer}>
                                    <img className={classes.icon} src={data} alt="" />
                                    <div>
                                        <p className={classes.title}>Patient Data Analysis</p>
                                        <span>
                                            Digitally access to patient’s history, Health data & other records for
                                            analysis & Correlation.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <img src={Love} className={classes.loveImg} alt="" />
                <img src={footerImg} className={classes.footerImg1} alt="" />
                <img src={footerImg} className={classes.footerImg2} alt="" />
                <div>
                    <p>Smart Doctor Solution</p>
                    <div>
                        <img src={fb} alt="" />
                        <img src={link} alt="" />
                        <img src={yt} alt="" />
                    </div>
                    <span>© HEALTHX Ventures. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}
