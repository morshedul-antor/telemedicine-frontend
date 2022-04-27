import { useState } from 'react'
import { Calendar } from 'react-calendar'
import AddSlot from '../CreateSchedule/AddSlot/AddSlot'
import './CreateSchedule.css'
import classes from './CreateSchedule.module.css'

const CreateSchedule = () => {
    const [today, onChange] = useState(new Date())
    console.log(today)
    return (
        <div className={classes.CreateSchedule}>
            <h2>Create Schedule</h2>
            <Calendar onChange={onChange} value={today} calendarType="Arabic" />

            <div>
                <AddSlot today={today} />
            </div>
        </div>
    )
}
export default CreateSchedule
