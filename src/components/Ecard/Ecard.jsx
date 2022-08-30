import '@fortawesome/free-solid-svg-icons'
import { faBriefcase, faGraduationCap, faLocation, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import Pic from '../../assets/img/docstock.jpg'
import Logo from '../../assets/logo/logo.png'
import QR from '../../assets/logo/qr.png'
import classes from './Ecard.module.css'
import ExportImage from './ExportImage'

export default function Ecard() {
    const exportRef = useRef()

    return (
        <div className={classes.card}>
            <div ref={exportRef}>
                <div>
                    <img src={Pic} alt="" />
                    <p>
                        <span>BMDC</span> A-98322
                    </p>
                </div>
                <img src={Logo} alt="" />
                <div>
                    <img src={QR} alt="" className={classes.qr} />
                    <span>Dr. Rashadul Hasan</span>
                    <p>
                        <FontAwesomeIcon icon={faStethoscope} /> Medicine Specialist, Family Medicine
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGraduationCap} /> MBBS, FCPS, FRCS
                    </p>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faBriefcase} /> Asst. Professor & Medicine Specialist
                        </span>
                        at Dhaka Medical College
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLocation} /> Evercare, Bashundhara R/A
                    </p>
                </div>
            </div>
            <button onClick={() => ExportImage(exportRef.current, 'eVisitingCard')}>Download</button>
        </div>
    )
}
