import { useState } from 'react'
import { Calendar } from 'react-calendar'
import './Calender.css'
import classes from './Calender.module.css'

const Calender = () => {
    const [today, onChange] = useState(new Date())
    return (
        <div className={classes.CreateSchedule}>
            <Calendar onChange={onChange} value={today} calendarType="Arabic" />
        </div>
    )
}
export default Calender
