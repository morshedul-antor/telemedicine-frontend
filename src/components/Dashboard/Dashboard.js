import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Snapshot, Appointment } from '.'
import docCover from '../../assets/img/background-doc-table.jpg'
import doc from '../../assets/img/docstock.jpg'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import classes from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <div>
                <Sidebar />
            </div>
            <div>
                <div
                    className={classes.header}
                    style={{
                        background: `url(${docCover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <div>
                        <div className={classes.headLeftWrapper}>
                            <div
                                style={{
                                    background: `url(${doc})`,
                                    width: '150px',
                                    height: '150px',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderRadius: '10px',
                                    border: '4px solid var(--white)',
                                    boxShadow: `0 3px 5px var(--grey2)`,
                                }}></div>
                            <h2>Rashadul Hassan</h2>
                            <p>BMDC: A-2345</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouseChimneyMedical} />
                        <h2>Chamber</h2>
                        <p>Bananni L block</p>
                        <p>26 no. house</p>
                        <p>Dhaka</p>
                    </div>
                </div>
                <Snapshot />
                <Appointment />
            </div>
        </div>
    )
}

export default Dashboard
