import { useState } from 'react'
import classes from './AddSlot.module.css'

const CreateSlot = (today) => {
    let slot = [
        { time: '11:30 AM' },
        { time: '12:30 PM' },
        { time: '1:30 PM' },
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
    const [slotPopup, setSlotPopup] = useState(false)
    const popup = () => {
        setSlotPopup(!slotPopup)
    }
    const [date] = useState(today)
    const [time, SetTime] = useState()
    return (
        <div>
            <div className={classes.Slot}>
                <div>
                    <h2>Slot</h2>
                </div>
                <div>
                    <button onClick={popup}>+ Add new Slot</button>
                </div>
            </div>
            {slotPopup && (
                <div className={classes.slotFormPopup}>
                    <div onClick={slotPopup}></div>
                    <div className={classes.slotForm}>
                        <h2> Add Slot </h2>
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
                                    <div className={classes.AP}>
                                        <button>AM</button>
                                        <button>PM</button>
                                    </div>
                                    <div>
                                        <button>Add</button>
                                        <button onClick={popup}>Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

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
export default CreateSlot
