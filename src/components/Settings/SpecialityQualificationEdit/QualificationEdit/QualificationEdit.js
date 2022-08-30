import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import { refreshPage } from '../../../../utils/refreshPage'
import classes from './QualificationEdit.module.css'

const QualificationEdit = () => {
    const [qualifications, setQualifications] = useState([])
    const [qualification, setQualification] = useState([])
    const [msg, setMsg] = useState('')

    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch(`${apiV1}/doctors/qualifications`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await infoFetch.json()
            if (infoFetch.ok) {
                setQualifications(infoJson)
                setQualification(infoJson)
            }
        }
        return infoFunc()
    }, [apiV1, token])

    const submit = async (e) => {
        e.preventDefault()

        let submitFetch = await fetch(`${apiV1}/doctors/qualifications/1`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'PUT',
            body: JSON.stringify({
                ...qualifications,
            }),
        })

        if (submitFetch.ok) {
            setMsg('Update Succesfully')
            refreshPage()
        } else {
            setMsg('Update Failed')
        }
    }

    return (
        <div className={classes.Qualification}>
            <form onSubmit={(e) => submit(e)}>
                <div className={classes.sectionHeader}>Qualifications</div>
                <div className={classes.formWrap}>
                    <label>
                        Input Qualification
                        <input
                            type="text"
                            value={qualifications?.qualification}
                            onChange={(e) => setQualifications({ ...qualifications, qualification: e.target.value })}
                        />
                    </label>
                </div>

                <button className={classes.Button}>Update</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>

            <div className={classes.sectionHeader}>Your Qualifications</div>
            <div className={classes.Badge}>{qualification?.qualification}</div>
        </div>
    )
}
export default QualificationEdit
