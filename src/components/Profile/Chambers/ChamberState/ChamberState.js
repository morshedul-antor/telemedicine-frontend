import { useContext, useState } from 'react'
import { Auth } from '../../../../allContext'
import classes from './ChamberState.module.css'

const ChamberState = ({ chamberId }) => {
    const { stateAuth } = useContext(Auth)

    const [isActive, setIsActive] = useState(false)
    const [msg, setMsg] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const activateChamberFunc = async (e) => {
        e.preventDefault()
        console.log('api fetch')
        let activateChamberFetch = await fetch(`${apiV1}/doctors/chamber/activate/${chamberId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'PUT',
        })
        let activeJson = await activateChamberFetch.json()
        console.log(activeJson)
        if (activateChamberFetch.ok) {
            setIsActive(true)
            setMsg(...msg, 'Chamber Activated')
        }
    }
    return (
        <label className={classes.switch}>
            <button onClick={activateChamberFunc}></button>
            <span className={isActive === true ? `${classes.spanActive}` : `${classes.spanDeactive}`}></span>
        </label>
    )
}
export default ChamberState
