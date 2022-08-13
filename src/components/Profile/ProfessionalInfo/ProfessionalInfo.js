import { useState, useEffect, useContext } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import SkeletonProfessionalInfo from '../../Skeletons/SkeletonProfessionalInfo'
import classes from './ProfessionalInfo.module.css'

const ProfessionalInfo = () => {
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
                <div className={classes.professionalInfo}>
                    <div className={classes.Category}>
                        <SkeletonProfessionalInfo />
                    </div>
                    <div className={classes.Category}>
                        <SkeletonProfessionalInfo />
                    </div>
                </div>
            ) : (
                <div className={classes.professionalInfo}>
                    <div className={classes.Category}>
                        <div>
                            <h2>Work place</h2>
                            <ul>
                                {dataPro.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <h3>&#10003; {value.institute}</h3>
                                                <p>&#160; &#160; &#160; &#160;{value.position}</p>
                                                <p>&#160; &#160; &#160; &#160;{value.end_date}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Category}>
                        <div>
                            <h2>Academic</h2>
                            <ul>
                                {dataAc.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <h3>&#10003; {value.institute}</h3>
                                                <p>&#160; &#160; &#160; &#160;{value.degree}</p>
                                                <p>&#160; &#160; &#160; &#160;Class of {value.end_date}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default ProfessionalInfo
