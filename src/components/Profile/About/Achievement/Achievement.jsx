import { faEdit, faLandmark, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import { toMonthNameLong } from '../../../../utils/date'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Achievement.module.css'
import Update from './UpdateAchievement/Update'

export default function Achievement() {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [workplaces, setWorkplaces] = useState([])

    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token
    const userInfo = stateUser.info

    const [position, setPosition] = useState('')
    const [institute, setInstitute] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState(null)

    const [formOpen, setFormOpen] = useState(false)

    return (
        <>
            {isLoading ? (
                <div className={classes.ProfileDetail}>
                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>

                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>
                </div>
            ) : (
                <div className={classes.Achievement}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faTrophy} /> Achievements
                            </h2>

                            <div className={classes.list}>
                                <ol>
                                    <li>
                                        Organized Successfully a Workshop on Emergency Medicine
                                        <span>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </span>
                                    </li>
                                    <li>
                                        Successfully a Workshop on Emergency Telemedicine
                                        <span>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Basic}>
                        <button onClick={() => setFormOpen(true)}>Add More</button>
                        {formOpen && (
                            <form>
                                <div className={classes.formWrap}>
                                    <label>
                                        <span>
                                            <button onClick={() => setFormOpen(false)}>x</button>
                                        </span>
                                        Achievement Name
                                        <input
                                            type="text"
                                            placeholder="Organized Successfully a Workshop on Emergency Vascular Surgery"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <div>
                                        <button type="submit" className={classes.button}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
