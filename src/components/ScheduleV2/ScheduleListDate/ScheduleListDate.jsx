import React from 'react'
import { refreshPage } from '../../../utils/refreshPage'
import Calender from './Calender/Calender'
import classes from './ScheduleListDate.module.css'

export default function ScheduleListDate({ changeableSchedule, calender, setCalender }) {
    const changeableDate = calender.toString()

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.slot}>
                    <div className={classes.slotHead}>
                        Online Schedule of {changeableDate.slice(4, 10)}, {changeableDate.slice(11, 15)}
                    </div>
                    <div className={classes.slotBody}>
                        <div className={classes.slotButtons}>
                            {changeableSchedule.map((slot, i) =>
                                slot.online === true ? (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.time.split(':')[1].length === 2 ? slot.time : `${slot.time}0`}{' '}
                                            {slot.am_pm}
                                        </button>
                                    </div>
                                ) : (
                                    ''
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className={classes.slot}>
                    <div className={classes.slotHead}>
                        Chamber Schedule of {changeableDate.slice(4, 10)}, {changeableDate.slice(11, 15)}
                    </div>
                    <div className={classes.slotBody}>
                        <div className={classes.slotButtons}>
                            {changeableSchedule.map((slot, i) =>
                                slot.online === false ? (
                                    <div className={classes.slotButton} key={i}>
                                        <button>
                                            {slot.time.split(':')[1].length === 2 ? slot.time : `${slot.time}0`}{' '}
                                            {slot.am_pm}
                                        </button>
                                    </div>
                                ) : (
                                    ''
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Calender calender={calender} setCalender={setCalender} />
                <div>
                    <button onClick={() => refreshPage()}>Today</button>
                </div>
            </div>
        </div>
    )
}
