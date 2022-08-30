import { faEdit, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './ProfileDetail.module.css'
import Update from './UpdateAcademic/Update'

const ProfileDetail = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token
    const userInfo = stateUser.info

    const [isLoading, setIsLoading] = useState(true)
    const [academics, setAcademics] = useState([])

    const [degree, setDegree] = useState('')
    const [institute, setInstitute] = useState('')
    const [speciality, setSpeciality] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [formOpen, setFormOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            let infoFunc = async () => {
                let infoFetch = await fetch(`${apiV1}/doctors/academic/${userInfo?.id}?skip=0&limit=30`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setAcademics(infoJson)
                }
            }
            try {
                infoFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 3000)
    }, [apiV1, token, isLoading, userInfo?.id, degree, institute, speciality])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            institute,
            degree,
            speciality,
            start_date: '2022-01-01',
            end_date: '2022-01-01',
        }

        let response = await fetch(`${apiV1}/doctors/academic`, {
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
            setDegree('')
            setInstitute('')
            setSpeciality('')
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
                <div className={classes.ProfileDetail}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faGraduationCap} /> Academic Qualification
                            </h2>
                            <table className={classes.infoTable}>
                                <thead>
                                    <tr className={classes.row}>
                                        <th>Qualification</th>
                                        <th>Institute</th>
                                        <th>Speciality</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {academics &&
                                        academics.map((academic, index) => (
                                            <tr className={classes.row} key={index}>
                                                <td>{academic.degree}</td>
                                                <td>{academic.institute}</td>
                                                <td>{academic.speciality}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </td>
                                                {isOpen === index && (
                                                    <Update index={index} setIsOpen={setIsOpen} academic={academic} />
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
                                        Qualification
                                        <input
                                            type="text"
                                            placeholder="MBBS"
                                            value={degree}
                                            onChange={(e) => setDegree(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Institute
                                        <input
                                            type="text"
                                            placeholder="Dhaka Medical College"
                                            value={institute}
                                            onChange={(e) => setInstitute(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Speciality
                                        <input
                                            type="text"
                                            placeholder="Cardiologist"
                                            value={speciality}
                                            onChange={(e) => setSpeciality(e.target.value)}
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
export default ProfileDetail
