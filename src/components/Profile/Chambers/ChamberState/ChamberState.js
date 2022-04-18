import { useContext, useState } from 'react'
import { Auth } from '../../../../allContext'
import classes from './ChamberState.module.css'

const ChamberState = () => {
    const { stateAuth } = useContext(Auth)

    const [isActive, setIsActive] = useState(false)
    const apiV1 = process.env.REACT_APP_API_V1

    const token = stateAuth.token

    const toggle = async (e) => {
        e.preventDefault()
        let chamberUpdateFetch = await fetch(`${apiV1}/doctors/chamber/active/{id}`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                isActive,
            }),
        })
    }
    return (
        <div>
            <label className={classes.switch}>
                <input type="checkbox" />
                <span></span>
            </label>
        </div>
    )
}
export default ChamberState
