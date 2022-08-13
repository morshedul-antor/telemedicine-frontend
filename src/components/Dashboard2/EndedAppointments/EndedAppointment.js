import classes from './EndedAppointments.module.css'

const EndedAppointments = () => {
    let patients = [
        { name: 'Xahid', problem: 'Heart Attack', time: '11:30', duration: '30 min' },
        { name: 'Jogn', problem: 'Fever', time: '12:30', duration: '30 min' },
        { name: 'Mohammad', problem: 'Headace', time: '12:30', duration: '30 min' },
    ]
    return (
        <div className={classes.Upcoming}>
            <div className={classes.title}>
                <p>Ended appointment</p>
                <p>
                    <span>Previous</span>
                </p>
            </div>
            {patients.map((patient, i) => {
                return (
                    <div className={classes.Individual}>
                        <div>
                            <div>
                                <p>
                                    {patient.name} - {patient.problem}
                                </p>
                                <p>
                                    {patient.time} ~ {patient.duration}
                                </p>
                            </div>
                            <button>See Reports</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default EndedAppointments
