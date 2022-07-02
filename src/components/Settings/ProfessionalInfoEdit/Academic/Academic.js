import { useState } from 'react'
import classes from './Academic.module.css'

const Academic = () => {
    const [msg, setMsg] = useState('')
    return (
        <div className={classes.Academic}>
            <form>
                <div className={classes.sectionHeader}>Academic</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            Institute
                            <input id="institute" type="text" placeholder="Dhaka Medical College" />
                        </label>

                        <label>
                            Degree
                            <input id="degree" type="text" placeholder="e.g: MBBS, FCPS" />
                        </label>

                        <label>
                            Year
                            <input id="year" type="year" placeholder="year of Certification" />
                        </label>
                    </div>
                </div>
                <button className={classes.Button}>Add</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}
export default Academic
