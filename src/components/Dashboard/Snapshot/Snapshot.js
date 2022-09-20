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
                            Online: <b>12</b>
                        </p>
                        <p>
                            Offline: <b>3</b>
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
                            Online: <b>50</b>
                        </p>
                        <p>
                            Offline: <b>13</b>
                        </p>
                    </div>
                    <div>
                        <p>Compare with Last Month</p>
                        <p>
                            <b>+50</b>
                        </p>
                        <p>
                            <b>-13</b>
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
                            Online: <b>122</b>
                        </p>
                        <p>
                            Offline: <b>32</b>
                        </p>
                    </div>
                    <div>
                        <p>Compare with Last Year</p>
                        <p>
                            <b>+122</b>
                        </p>
                        <p>
                            <b>-32</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snapshot
