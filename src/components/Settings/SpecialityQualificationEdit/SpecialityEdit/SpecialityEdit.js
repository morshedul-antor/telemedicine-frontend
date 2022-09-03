import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../../allContext'
import { refreshPage } from '../../../../utils/refreshPage'
import classes from './SpecialityEdit.module.css'

const SpecialityEdit = () => {
    const [specialities, setSpecialities] = useState([])
    const [speciality, setSpeciality] = useState([])
    const [msg, setMsg] = useState('')

    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch(`${apiV1}/doctors/specialities`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await infoFetch.json()
            if (infoFetch.ok) {
                setSpecialities(infoJson)
                setSpeciality(infoJson)
            }
        }
        return infoFunc()
    }, [apiV1, token])

    const submit = async (e) => {
        e.preventDefault()

        let submitFetch = await fetch(`${apiV1}/doctors/specialities/${specialities?.id}`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'PUT',
            body: JSON.stringify({
                ...specialities,
                user_id: userDetail.id,
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
        <div className={classes.Speciality}>
            <form onSubmit={(e) => submit(e)}>
                <div className={classes.sectionHeader}>Specialities</div>
                <div className={classes.formWrap}>
                    <label>
                        Input Speciality
                        <input
                            type="text"
                            value={specialities?.speciality}
                            onChange={(e) => setSpecialities({ ...specialities, speciality: e.target.value })}
                        />
                    </label>
                </div>
                <button type="submit" className={classes.Button}>
                    Update
                </button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>

            <div className={classes.sectionHeader}>Your Specialities</div>
            <div className={classes.Badge}>{speciality?.speciality}</div>
        </div>
    )
}
export default SpecialityEdit
