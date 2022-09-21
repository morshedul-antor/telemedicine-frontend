import Calendar from 'react-calendar'
import './Calender.css'

export default function Calender({ calender, setCalender }) {
    return (
        <div>
            <Calendar onChange={setCalender} value={calender} />
        </div>
    )
}
