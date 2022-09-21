import { faStethoscope, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Snapshot.module.css'

const Snapshot = () => {
    return (
        <div className={classes.Snapshot}>
            <div>
                <FontAwesomeIcon icon={faThumbtack} />
                <div>
                    <div>
                        <p>Today's Appoinments</p>
                        <p>
                            Online: <b>--</b>
                        </p>
                        <p>
                            Offline: <b>--</b>
                        </p>
                    </div>
                    <div className={classes.hidden}>
                        <p>Today's Appoinments</p>
                        <p>
                            Online: <b>12</b>
                        </p>
                        <p>
                            Offline: <b>3</b>
                        </p>
                    </div>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faThumbtack} />
                <div>
                    <div>
                        <p>Monthly Appoinments</p>
                        <p>
                            Online: <b>--</b>
                        </p>
                        <p>
                            Offline: <b>--</b>
                        </p>
                    </div>
                    <div>
                        <p>Compare with Last Month</p>
                        <p>
                            <b></b>
                        </p>
                        <p>
                            <b></b>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faThumbtack} />
                <div>
                    <div>
                        <p>Yearly Appointments</p>
                        <p>
                            Online: <b>--</b>
                        </p>
                        <p>
                            Offline: <b>--</b>
                        </p>
                    </div>
                    <div>
                        <p>Compare with Last Year</p>
                        <p>
                            <b></b>
                        </p>
                        <p>
                            <b></b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snapshot
