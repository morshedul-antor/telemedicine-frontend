import classes from './ScheduleList.module.css'

export default function ScheduleList({ todaySchedule }) {
    const date = new Date()
    const today = date.toString()

    return (
        <div className={classes.wrapper}>
            <div className={classes.slot}>
                <div className={classes.slotHead}>Today's ({today.slice(4, 10)}) Online Schedule</div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {todaySchedule.map((slot, i) =>
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
                <div className={classes.slotHead}>Today's ({today.slice(4, 10)}) Chamber Schedule</div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {todaySchedule.map((slot, i) =>
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
    )
}
