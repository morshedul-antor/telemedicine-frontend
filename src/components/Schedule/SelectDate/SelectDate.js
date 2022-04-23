import classes from './SelectDate.module.css'

const SelectDate = () => {
    return (
        <div className={classes.SelectDate}>
            <h2>Select date</h2>
            <form>
                <label>Date</label>
                <input type="date" />
            </form>
        </div>
    )
}
export default SelectDate
