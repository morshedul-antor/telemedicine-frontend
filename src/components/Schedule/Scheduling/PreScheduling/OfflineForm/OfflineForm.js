import { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../../../allContext'
import Timepicker2 from '../../Timepicker2/Timepicker'
import classes from './OfflineForm.module.css'

const OfflineForm = ({ day, msg, setMsg, online }) => {
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
        <div>
            <div className={classes.offlineForm}>
                <div className={classes.timepick}>
                    <Timepicker2 day={day} msg={msg} setMsg={setMsg} online={online} />
                </div>

                {/* <div className={classes.chamberSelection}>
                    <label htmlFor="chamberSelection">Chamber</label>
                    <select>
                        {data.map((chamber, i) => {
                            return <option>{chamber.name}</option>
                        })}
                    </select>
                    {online}
                </div> */}
            </div>
        </div>
    )
}
export default OfflineForm
