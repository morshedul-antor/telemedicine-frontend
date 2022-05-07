import classes from './Slot.module.css'

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
        <div>
            <div className={classes.slotForm}>
                <h2>Timepicker</h2>
                <div className={classes.content}>
                    <form>
                        <div className={classes.timePicker}>
                            <div>
                                <input type="number" min="1" max="12" />
                            </div>
                            <div> : </div>
                            <div>
                                <input type="number" min="00" max="59" />
                            </div>
                            {/* <div className={classes.AP}>
                                <button>AM</button>
                                <button>PM</button>
                            </div> */}
                            <div className={classes.AP}>
                                <select>
                                    <option>AM</option>
                                    <option>PM</option>
                                </select>
                            </div>
                            <div className={classes.add}>
                                <button>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

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
    )
}
export default Slot
