import { useState } from 'react'
import classes from './Workplace.module.css'

const Workplace = () => {
    const [msg, setMsg] = useState('')

    return (
        <div className={classes.Workplace}>
            <h2>Workpalce Information</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}
            <form>
                <label htmlFor="institution">Institution</label>
                <input id="institution" type="text" value="ABC Medical College" />

                <label htmlFor="location">Location</label>
                <input id="location" type="text" />

                <label htmlFor="position">Position</label>
                <input id="year" type="year" />

                <button className={classes.control}>Add</button>
            </form>
        </div>
    )
}
export default Workplace
