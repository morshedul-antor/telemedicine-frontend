import classes from './Snapshot.module.css'

const Snapshot = () => {
    return (
        <div className={classes.Snapshot}>
            <div>
                <p>Today's Appoinments</p>
                <p>
                    Online: <b>12</b>
                </p>
                <p>
                    Offline: <b>3</b>
                </p>
            </div>
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
                <p>Total till this month</p>
                <p>
                    Online: <b>50</b>
                </p>
                <p>
                    Offline: <b>13</b>
                </p>
            </div>
            <div>
                <p>Yearly appointments</p>
                <p>
                    Online: <b>122</b>
                </p>
                <p>
                    Offline: <b>32</b>
                </p>
            </div>
        </div>
    )
}

export default Snapshot
