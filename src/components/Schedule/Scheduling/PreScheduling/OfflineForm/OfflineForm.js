import { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../../../allContext'
import Timepicker from '../../Timepicker/Timepicker'
import classes from './OfflineForm.module.css'

const OfflineForm = () => {
    const [chamberInfo, setChamberInfo] = useState({})

    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let chamberFunc = async () => {
            let chamberFetch = await fetch(`${apiV1}/doctors/chamber/`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let chamberJson = await chamberFetch.json()
            if (chamberFetch.ok) {
                setChamberInfo(chamberJson)
            }
        }
        try {
            chamberFunc()
        } catch (e) {}
    }, [apiV1, token])

    let data = Array.from(chamberInfo)
    return (
        <>
            <>
                <div className={classes.chamberSelection}>
                    <label htmlFor="chamberSelection">Chamber</label>
                    <select>
                        {data.map((chamber, i) => {
                            return <option>{chamber.name}</option>
                        })}
                    </select>
                </div>
                <div className={classes.timepicker}>
                    <label>Timepicker</label>
                    <Timepicker />
                </div>
            </>
        </>
    )
}
export default OfflineForm
