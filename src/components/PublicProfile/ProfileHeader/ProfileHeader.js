import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import docCover from '../../../assets/img/background-doc-table.jpg'
import doc from '../../../assets/img/docstock.jpg'
import classes from './ProfileHeader.module.css'

const ProfileHeader = () => {
    return (
        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader
