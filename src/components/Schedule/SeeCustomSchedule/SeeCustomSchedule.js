import classes from './SeeCustomSchedule.module.css'

const SeeCustomSchedule = () => {
    return (
        <div className={classes.SeeCustomSchedule}>
            <h2>Select date</h2>
            <form>
                <label>Date</label>
                <input type="date" />
            </form>
        </div>
    )
}
export default SeeCustomSchedule
