import { faEdit, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import { toMonthNameLong } from '../../../../utils/date'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Activity.module.css'
import Update from './UpdateActivity/Update'

export default function Activity() {
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
                <div className={classes.Activity}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faShield} /> Activitty at CME/Conference
                            </h2>

                            <div className={classes.list}>
                                <ol>
                                    <li>
                                        Activity at Ranpgut Medical College on Covid-19
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
                                        Activity Name
                                        <input
                                            type="text"
                                            placeholder="Activity at Ranpgut Medical College on Covid-19"
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
