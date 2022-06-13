import classes from './Timepicker.module.css'

const Timepicker2 = () => {
    return (
        <div className={classes.Timepicker}>
            <form className={classes.TimepickerBox}>
                <div>
                    <input type="number" placeholder="HH" />
                </div>
                <div className={classes.Divider}>:</div>
                <div>
                    <input type="number" placeholder="MM" />
                </div>
                <div className={classes.AP}>
                    <div>AM</div>
                    <div>PM</div>
                </div>
            </form>
        </div>
    )
}
export default Timepicker2
