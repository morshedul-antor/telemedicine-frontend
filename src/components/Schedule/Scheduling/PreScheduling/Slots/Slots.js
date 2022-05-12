import classes from './Slots.module.css'

const Slot = () => {
    let slot = [
        { time: '11:30 AM' },
        { time: '12:30 PM' },
        { time: '01:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
        { time: '03:30 PM' },
    ]
    return (
        <div className={classes.Slot}>
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
        </div>
    )
}
export default Slot
