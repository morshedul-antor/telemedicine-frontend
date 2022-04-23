import classes from './ScheduleList.module.css'

const ScheduleList = () => {
    let sch = [
        { no: 1, date: '22.01.22', chambr: 'Apollo Hospital', bookedBy: 'Myself', problem: 'fever for 5 days' },
        { no: 1, date: '22.01.22', chambr: 'Apollo Hospital', bookedBy: 'Myself', problem: 'fever for 5 days' },
    ]
    return (
        <div className={classes.ScheduleList}>
            <h2>Schedule for {'22-01-22'}</h2>
            <div className={classes.Schedules}>
                <div className={classes.head}>
                    <p>No.</p>
                    <p>Date</p>
                    <p>Chamber</p>
                    <p>Booked by</p>
                    <p>Problem</p>
                </div>
                {sch.map((v, i) => {
                    return (
                        <div className={classes.body} key={i}>
                            <p>{i + 1}</p>
                            <p>{v.date}</p>
                            <p>{v.chambr}</p>
                            <p>{v.bookedBy}</p>
                            <p>{v.problem}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ScheduleList
