import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import SkeletonProfessionalInfoEdit from '../../Skeletons/SkeletonProfessionalInfoEdit'
import Academic from '../ProfessionalInfoEdit/Academic/Academic'
import Workplace from '../ProfessionalInfoEdit/Workplace/Workplace'
import classes from './ProfessionalInfoEdit.module.css'

const ProfessionalInfoEdit = () => {
    const [acHide, setAcHide] = useState(true)
    const [proHide, setProHide] = useState(true)

    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token
    const id = stateUser.info.id

    const [isLoading, setIsLoading] = useState(true)
    const [academicInfo, setAcademicInfo] = useState({})
    const [workInfo, setWorkInfo] = useState({})

    useEffect(() => {
        setTimeout(() => {
            let fetchDataAc = async () => {
                let response = await fetch(`${apiV1}/doctors/academic/${id}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let data = await response.json()
                if (response.ok) {
                    setAcademicInfo(data)
                }
            }

            let fetchDataPro = async () => {
                let response = await fetch(`${apiV1}/doctors/workplace/${id}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let data = await response.json()
                if (response.ok) {
                    setWorkInfo(data)
                }
            }

            try {
                fetchDataPro()
                fetchDataAc()
                setIsLoading(false)
            } catch (e) {}
        }, 1500)
    }, [apiV1, token, id, isLoading])

    let dataAc = Array.from(academicInfo)
    let dataPro = Array.from(workInfo)

    return (
        <>
            {isLoading ? (
                <SkeletonProfessionalInfoEdit />
            ) : (
                <div className={classes.ProfessionalInfo}>
                    <div className={classes.Info}>
                        <div className={classes.Academic}>
                            <Academic />
                        </div>
                        <div className={classes.Workplace}>
                            <Workplace />
                        </div>
                    </div>
                </div>
            )}

            <div className={classes.editInfo}>
                <div>
                    <button type="button" className={classes.collapsible} onClick={(e) => setAcHide(!acHide)}>
                        Edit/Delete Academic information
                    </button>
                    <div className={acHide === true ? `${classes.contentHide}` : `${classes.contentShow}`}>
                        <table className={classes.infoTable}>
                            <tr>
                                <th>Institute</th>
                                <th>Degree</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Action</th>
                            </tr>
                            {dataAc.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.institute}</td>
                                        <td>{value.degree}</td>
                                        <td>{value.start_date}</td>
                                        <td>{value.end_date}</td>
                                        <td>
                                            <button>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>

            <div className={classes.editInfo}>
                <div>
                    <button type="button" className={classes.collapsible} onClick={(e) => setProHide(!proHide)}>
                        Edit/Delete Professional information
                    </button>
                    <div className={proHide === true ? `${classes.contentHide}` : `${classes.contentShow}`}>
                        <table className={classes.infoTable}>
                            <tr>
                                <th>Institute</th>
                                <th>Position</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Action</th>
                            </tr>
                            {dataPro.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.institute}</td>
                                        <td>{value.position}</td>
                                        <td>{value.start_date}</td>
                                        <td>{value.end_date}</td>
                                        <td>
                                            <button>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfessionalInfoEdit
