import classes from './Timepicker.module.css'

const Timepicker = () => {
    return (
        <div>
            <div className={classes.content}>
                <form>
                    <div className={classes.timePicker}>
                        <div>
                            <input type="number" min="1" max="12" />
                        </div>
                        <div> : </div>
                        <div>
                            <input type="number" min="00" max="59" />
                        </div>
                        <div className={classes.AP}>
                            <select>
                                <option> </option>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                        <div className={classes.add}>
                            <button>create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Timepicker
