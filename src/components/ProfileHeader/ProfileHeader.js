import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../allContext'
import doc from '../../assets/img/doc-df.jpg'
import { toMonthNameLong } from '../../utils/date'
import classes from './ProfileHeader.module.css'
import ProfilePictreUpload from './ProfilePictureUpload/ProfilePictureUpload'

const ProfileHeader = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [isLoading, setIsLoading] = useState(true)
    const [doctorDetail, setDoctorDetail] = useState({})
    const [doctor, setDoctor] = useState([])
    const [qualification, setQualification] = useState({})
    const [speciality, setSpeciality] = useState({})
    const [profileImage, setProfileImage] = useState({})
    const [msg, setMsg] = useState([])

    useEffect(() => {
        setTimeout(() => {
            let ProfileImgFunc = async () => {
                let ppFetch = await fetch(`${apiV1}/profile-pic`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let picJson = await ppFetch.json()

                if (ppFetch.ok) {
                    setProfileImage(picJson.image_string)
                }
            }

            let infoFunc = async () => {
                let infoFetch = await fetch(`${apiV1}/doctors/`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setDoctorDetail(infoJson)
                    setDoctor([infoJson])
                }
            }

            let qualFunc = async () => {
                let qualFetch = await fetch(`${apiV1}/doctors/qualifications`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let qualJson = await qualFetch.json()
                if (qualFetch.ok) {
                    setQualification(qualJson)
                }
            }

            let specialityFunc = async () => {
                let specialityFetch = await fetch(`${apiV1}/doctors/specialities`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let specialityJson = await specialityFetch.json()
                if (specialityFetch.ok) {
                    setSpeciality(specialityJson)
                }
            }

            try {
                ProfileImgFunc()
                infoFunc()
                qualFunc()
                specialityFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 1000)
    }, [apiV1, token, isLoading, msg])

    const profileImageUrl = `${apiV1}/images/profile/` + profileImage

    return (
        <>
            <div className={classes.header}>
                <div>
                    <div className={classes.headLeftWrapper}>
                        <div className={classes.profilePic}>
                            <img
                                className={classes.Image}
                                src={profileImage.toString().length < 16 ? doc : profileImageUrl}
                                alt="pp"
                            />
                            <>
                                <ProfilePictreUpload msg={msg} setMsg={setMsg} />
                            </>
                        </div>
                        <h2>{`${doctorDetail.dr_title || ''} ${stateUser.info?.name || ''}`}</h2>
                        <p>{qualification?.qualification}</p>
                        <p>{speciality?.speciality}</p>
                    </div>
                </div>
                <div className={classes.Chamber}>
                    <h2>৳{doctorDetail.online_fees || ''}</h2>
                    <p>Consultation Fee</p>
                </div>
            </div>
            <div className={classes.infoWrapper}>
                <div className={classes.Info}>
                    <div>
                        <p className={classes.Title}>BMDC Number</p>
                        <span className={classes.Info}>{doctorDetail.bmdc}</span>
                    </div>
                    <div>
                        <p className={classes.Title}>Total Experience</p>
                        <span className={classes.Info}>{doctorDetail.exp_year}+ Years</span>
                    </div>

                    <div>
                        <p className={classes.Title}>Ratings(10)</p>
                        <span className={classes.Info}>
                            4.8 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '14px' }} />
                        </span>
                    </div>
                    <div>
                        <p className={classes.Title}>Joined date</p>
                        <span className={classes.Info}>
                            {toMonthNameLong(doctor[0]?.created_at.slice(5, 7))} {doctor[0]?.created_at.slice(0, 4)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHeader
