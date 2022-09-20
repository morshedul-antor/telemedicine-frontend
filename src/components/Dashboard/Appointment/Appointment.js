import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Appointment.module.css'

const Appointment = () => {
    let arr = [
        {
            no: 1,
            name: 'Sajidur Rahman',
            sex: 'male',
            age: 27,
            problem: 'fever for 5 days',
            time: '10:00 AM',
        },
        { no: 2, name: 'Jhon Doe', sex: 'Male', age: 26, problem: 'Fever for 7 days', time: '10:30 AM' },
        { no: 3, name: 'Bruce Wayne', sex: 'Male', age: 28, problem: 'Fever for 5 days', time: '11:00 AM' },
        { no: 4, name: 'Jhon Doe', sex: 'Male', age: 26, problem: 'Fever for 12 days', time: '12:00 PM' },
    ]
    return (
        <div className={classes.Appointment}>
            <div className={classes.head}>
                <p>Serial</p>
                <p>Patient Name</p>
                <p>Sex</p>
                <p>Age</p>
                <p>Cause of Consultation</p>
                <p>Time</p>
                <p>Profile</p>
            </div>
            {arr.map((v, i) => {
                return (
                    <div className={classes.body} key={i}>
                        <p>{v.no}</p>
                        <p>{v.name}</p>
                        <p>{v.sex}</p>
                        <p>{v.age}</p>
                        <p>{v.problem}</p>
                        <p>{v.time}</p>
                        <p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Appointment
