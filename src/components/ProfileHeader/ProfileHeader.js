import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { UserInfo } from '../../allContext'
import docCover from '../../assets/img/background-doc-table.jpg'
import doc from '../../assets/img/docstock.jpg'
import classes from './ProfileHeader.module.css'

const ProfileHeader = ({ active }) => {
    const { stateUser } = useContext(UserInfo)

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
                            <h2>{stateUser?.info?.name}</h2>
                            <p>{stateUser?.info?.bmdc}</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouseChimneyMedical} />
                        <h2>{active.name}</h2>
                        <p>{active.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader
