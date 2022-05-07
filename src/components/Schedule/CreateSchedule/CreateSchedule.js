import { useState } from 'react'
import { Calendar } from 'react-calendar'
import './CreateSchedule.css'
import classes from './CreateSchedule.module.css'
import Slot from './Slot/Slot'

const CreateSchedule = () => {
    const [today, onChange] = useState(new Date())
    console.log(today)
    return (
        <div className={classes.CreateSchedule}>
            <h2>Create Schedule</h2>
            <Calendar onChange={onChange} value={today} calendarType="Arabic" />

            {/* <div>
                <AddSlot today={today} />
            </div> */}

            <div>
                <Slot />
            </div>
        </div>
    )
}
export default CreateSchedule
