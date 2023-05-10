import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <p>
                <FontAwesomeIcon icon={faStethoscope} />
                LiveDoc
            </p>
            <div className={classes.infoGrid}>
                <div>
                    We are developing a healthcare system around you. Our aim is to make the procedure as simple as
                    possible for our patients and to offer better and healthy treatments.
                </div>
                <div>
                    <span>Company</span>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <span>Doctors</span>
                    <p>Join as Doctor</p>
                    <p>Doctor Access</p>
                </div>
                <div>
                    <span>Patients</span>
                    <p>Join as Patient</p>
                    <p>Patient Access</p>
                </div>
            </div>
            <div className={classes.infoFlex}>
                <div>
                    <span>&#169; LiveDoc 2022.</span> All rights reserved
                </div>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy</span>
                    <span>Sitemap</span>
                </div>
            </div>
        </div>
    )
}
