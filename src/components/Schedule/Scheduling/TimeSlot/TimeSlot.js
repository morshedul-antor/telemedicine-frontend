import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './TimeSlot.module.css'

const Slot = () => {
    let days = [
        { name: 'Saturday', id: 1 },
        { name: 'Sunday', id: 2 },
        { name: 'Monday', id: 3 },
        { name: 'Tuesday', id: 4 },
        { name: 'Wednesday', id: 5 },
        { name: 'Thursday', id: 6 },
        { name: 'Friday', id: 7 },
    ]

    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [slots, setSlots] = useState({})
    const [day, setDay] = useState(1)

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
    }, [apiV1, token])

    let allSlot = Array.from(slots)
    let PmSlots = []
    let AmSlots = []
    let clockCycle = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const dayN = allSlot.filter((today) => {
        return today.day === day
    })

    const dayAm = dayN.filter((today) => {
        return today.am_pm === 'am'
    })

    const dayAmSlot = dayAm.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayAmSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        AmSlots.push(currentHourSort)
    }

    const dayPm = dayN.filter((today) => {
        return today.am_pm === 'pm'
    })

    const dayPmSlot = dayPm.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayPmSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        PmSlots.push(currentHourSort)
    }

    return (
        <div>
            {/* <div className={classes.Slot}>
                <div className={classes.slotHead}>Wednesday, May 11 (Offline)</div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {slot.map((slot, i) => {
                            return (
                                <div className={classes.slotButton} key={i}>
                                    <button>{slot.time}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> */}

            <div className={classes.Slot}>
                <div className={classes.slotHead}>
                    <span>&nbsp; &#60; &nbsp;</span> Wednesday, May 11 (Online) <span>&nbsp; &#62; &nbsp;</span>
                </div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {AmSlots.map((slots, i) =>
                            slots.map((slot, i) => (
                                <div className={classes.slotButton} key={i}>
                                    <button>
                                        {slot.hours}:{slot.minutes} {slot.am_pm}
                                    </button>
                                </div>
                            ))
                        )}

                        {PmSlots.map((slots, i) =>
                            slots.map((slot, i) => (
                                <div className={classes.slotButton} key={i}>
                                    <button>
                                        {slot.hours}:{slot.minutes} {slot.am_pm}
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slot
