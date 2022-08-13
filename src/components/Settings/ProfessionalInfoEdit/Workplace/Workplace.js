import { useState } from 'react'
import classes from './Workplace.module.css'

const Workplace = () => {
    const [msg, setMsg] = useState('')

    return (
        <div className={classes.Workplace}>
            <form>
                <div className={classes.sectionHeader}>Workplace</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label htmlFor="institution">Institution</label>
                        <input id="institution" type="text" placeholder="XXXX Medical college" />

                        <label htmlFor="position">Position</label>
                        <input id="year" type="year" placeholder="e.g: Asst. Professor" />

                        <label htmlFor="location">Location</label>
                        <input id="location" type="text" placeholder="e.g: Savar, Dhaka" />
                    </div>
                </div>

                <button className={classes.Button}>Add</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}
export default Workplace
