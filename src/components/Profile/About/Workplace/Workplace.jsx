import { faBriefcase, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { UserInfo, Auth } from '../../../../allContext'
import { toMonthNameLong } from '../../../../utils/date'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import Update from './UpdateWorkplace/Update'
import classes from './Workplace.module.css'

export default function Workplace() {
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

    useEffect(() => {
        setTimeout(() => {
            let infoFunc = async () => {
                let infoFetch = await fetch(`${apiV1}/doctors/workplace/${userInfo?.id}?skip=0&limit=30`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setWorkplaces(infoJson)
                }
            }
            try {
                infoFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 3000)
    }, [apiV1, token, userInfo?.id, position, institute])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            position,
            institute,
            start_date: start,
            end_date: end,
        }

        let response = await fetch(`${apiV1}/doctors/workplace`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (response.ok) {
            setFormOpen(false)
            setPosition('')
            setInstitute('')
            setStart('')
            setEnd('')
        }
    }

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
                <div className={classes.Workplace}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faBriefcase} /> Professional Experience
                            </h2>
                            <table className={classes.infoTable}>
                                <thead>
                                    <tr className={classes.row}>
                                        <th>Employment Place</th>
                                        <th>Position</th>
                                        <th>Duration</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workplaces &&
                                        workplaces.map((workplace, index) => (
                                            <tr className={classes.row} key={index}>
                                                <td>{workplace.institute}</td>
                                                <td>{workplace.position}</td>
                                                <td>
                                                    {`${toMonthNameLong(workplace.start_date.slice(5, 7))}
                                                    ${workplace.start_date.slice(0, 4)}`}{' '}
                                                    -{' '}
                                                    {workplace.end_date === null
                                                        ? 'Till Now'
                                                        : ` ${toMonthNameLong(workplace.start_date.slice(5, 7))}
                                                            ${workplace.start_date.slice(0, 4)}`}
                                                </td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </td>
                                                {isOpen === index && (
                                                    <Update index={index} setIsOpen={setIsOpen} workplace={workplace} />
                                                )}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={classes.Basic}>
                        <button onClick={() => setFormOpen(true)}>Add More</button>
                        {formOpen && (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className={classes.formWrap}>
                                    <label>
                                        <span>
                                            <button onClick={() => setFormOpen(false)}>x</button>
                                        </span>
                                        Employment Place
                                        <input
                                            type="text"
                                            placeholder="Dhaka Medical"
                                            value={institute}
                                            onChange={(e) => setInstitute(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Position
                                        <input
                                            type="text"
                                            placeholder="Asst. Professor"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Start Date
                                        <input
                                            type="date"
                                            value={start}
                                            onChange={(e) => setStart(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        End <span style={{ fontSize: '10px' }}>(empty if working now)</span>
                                        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
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
