import classes from './CreateSchedule.module.css'

const CreateSchedule = () => {
    return (
        <div className={classes.CreateSchedule}>
            <h2>Create Schedule</h2>
            <form>
                <label>Date</label>
                <input type="date" />

                <label>Date</label>
                <input type="time" />

                <button>Create</button>
            </form>
        </div>
    )
}
export default CreateSchedule
