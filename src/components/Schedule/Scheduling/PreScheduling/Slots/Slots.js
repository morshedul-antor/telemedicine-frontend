import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../../../allContext'
import Schedule from '../../../Schedule'
import classes from './Slots.module.css'

const Slots = ({ day, msg, on }) => {
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
    let PmSlotsOn = []
    let AmSlotsOn = []

    let PmSlotsOff = []
    let AmSlotsOff = []
    let clockCycle = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    // ============================== Online Slots ==========================================

    const onlineSlot = allSlot.filter((today) => {
        return today.online === true
    })

    const dayOnN = onlineSlot.filter((today) => {
        return today.day === day
    })

    const dayAmOn = dayOnN.filter((today) => {
        return today.am_pm === 'am'
    })

    const dayAmOnSlot = dayAmOn.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayAmOnSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        AmSlotsOn.push(currentHourSort)
    }

    const dayPmOn = dayOnN.filter((today) => {
        return today.am_pm === 'pm'
    })

    const dayPmOnSlot = dayPmOn.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayPmOnSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        PmSlotsOn.push(currentHourSort)
    }
    //=================================================================================================

    // ============================== Offline Slots ===================================================

    const offlineSlot = allSlot.filter((today) => {
        return today.online === false
    })

    const dayOffN = offlineSlot.filter((today) => {
        return today.day === day
    })

    const dayAmOff = dayOffN.filter((today) => {
        return today.am_pm === 'am'
    })

    const dayAmOffSlot = dayAmOff.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayAmOffSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        AmSlotsOff.push(currentHourSort)
    }

    const dayPmOff = dayOffN.filter((today) => {
        return today.am_pm === 'pm'
    })

    const dayPmOffSlot = dayPmOff.sort((current, next) => {
        if (current.hours === 12) {
            return next.hours - current.hours
        }
        return current.hours - next.hours
    })

    for (let hour = 0; hour < 12; hour++) {
        const currentHour = dayPmOffSlot.filter((currentHour) => {
            return currentHour.hours === clockCycle[hour]
        })
        const currentHourSort = currentHour.sort((a, b) => {
            return a.minutes - b.minutes
        })
        PmSlotsOff.push(currentHourSort)
    }
    //================================================================================================

    return (
        <div className={classes.Slot}>
            {on === 1 ? (
                <div className={classes.slotBody}>
                    {dayOnN.length > 0 ? (
                        <div className={classes.slotButtons}>
                            {AmSlotsOn.map((slots, i) =>
                                slots.map((slot, i) => (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.hours}:{slot.minutes} {slot.am_pm}
                                        </button>
                                    </div>
                                ))
                            )}

                            {PmSlotsOn.map((slots, i) =>
                                slots.map((slot, i) => (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.hours}:{slot.minutes} {slot.am_pm}
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div className={classes.noSlotBody}>{dayOnN.length === 0 && <div>No slot today</div>}</div>
                    )}
                </div>
            ) : (
                <div className={classes.slotBody}>
                    {dayOffN.length > 0 ? (
                        <div className={classes.slotButtons}>
                            {AmSlotsOff.map((slots, i) =>
                                slots.map((slot, i) => (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.hours}:{slot.minutes} {slot.am_pm}
                                        </button>
                                    </div>
                                ))
                            )}

                            {PmSlotsOff.map((slots, i) =>
                                slots.map((slot, i) => (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.hours}:{slot.minutes} {slot.am_pm}
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div className={classes.noSlotBody}>{dayOffN.length === 0 && <div>No slot today</div>}</div>
                    )}
                </div>
            )}
        </div>
    )
}
export default Slots
