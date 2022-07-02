import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../../../allContext'
import classes from './Slots.module.css'

const Slots = ({ day, msg, setMsg }) => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [slots, setSlots] = useState({})

    useEffect(() => {
        let slotFunc = async () => {
            let slotFetch = await fetch(`${apiV1}/doctor/schedules`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let slotJson = await slotFetch.json()
            if (slotFetch.ok) {
                setSlots(slotJson)
            }
        }
        try {
            slotFunc()
        } catch (e) {}
    }, [apiV1, token, msg])

    let allSlot = Array.from(slots)
    const byDay = allSlot.sort((a, b) => {
        return a.day - b.day
    })

    console.log('Day: ', byDay)

    const day1 = allSlot.filter((day) => {
        day = 1
        return day
    })

    console.log('DAY: 1: ', day1)

    return (
        <div className={classes.Slot}>
            <div className={classes.slotBody}>
                <div className={classes.slotButtons}>
                    {allSlot.map((slot, i) => {
                        if (slot.day === day) {
                            return (
                                <div className={classes.slotButton} key={i}>
                                    <button>
                                        {slot.hours}:{slot.minutes} {slot.am_pm}
                                    </button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default Slots
