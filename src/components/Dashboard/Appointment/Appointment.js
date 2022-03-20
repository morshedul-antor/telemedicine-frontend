import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Appointment.module.css'

const Appointment = () => {
    let arr = [
        { no: 1, name: 'Sajidur Rahman', sex: 'male', age: 27, problem: 'fever for 5 days' },
        { no: 2, name: 'Jhon Doe', sex: 'male', age: 26, problem: 'fever for 7 days' },
        { no: 3, name: 'Bruce Wayne', sex: 'male', age: 28, problem: 'fever for 5 days' },
        { no: 4, name: 'Jhon Doe', sex: 'male', age: 26, problem: 'fever for 7 days' },
        { no: 5, name: 'Bruce Wayne', sex: 'male', age: 28, problem: 'fever for 5 days' },
    ]
    return (
        <div className={classes.Appointment}>
            <div className={classes.head}>
                <p>No.</p>
                <p>Name</p>
                <p>Sex</p>
                <p>Age</p>
                <p>Basic problem</p>
                <p>profile</p>
            </div>
            {arr.map((v, i) => {
                return (
                    <div className={classes.body} key={i}>
                        <p>{v.no}</p>
                        <p>{v.name}</p>
                        <p>{v.sex}</p>
                        <p>{v.age}</p>
                        <p>{v.problem}</p>
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
