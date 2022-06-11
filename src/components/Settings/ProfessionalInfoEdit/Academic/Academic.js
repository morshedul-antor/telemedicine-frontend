import { useState } from 'react'
import classes from './Academic.module.css'

const Academic = () => {
    const [msg, setMsg] = useState('')
    return (
        <div className={classes.Academic}>
            <h2>Academic Information</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}
            <form>
                <label htmlFor="institute">Institute</label>
                <input id="institute" type="text" value="ABC Medical College" />

                <label htmlFor="degree">Degree</label>
                <input id="degree" type="text" />

                <label htmlFor="year">Year</label>
                <input id="year" type="year" />

                <button>Add</button>
            </form>
        </div>
    )
}
export default Academic
