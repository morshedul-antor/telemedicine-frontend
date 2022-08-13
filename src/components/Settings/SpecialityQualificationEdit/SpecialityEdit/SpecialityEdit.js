import { useState } from 'react'
import classes from './SpecialityEdit.module.css'

const SpecialityEdit = () => {
    let specialities = ['Cardiologist', 'Medicine']
    const [msg, setMsg] = useState('')
    const [speciality, setSpeciality] = useState()
    return (
        <div className={classes.Speciality}>
            <form>
                <div className={classes.sectionHeader}>Specialities</div>
                <div className={classes.formWrap}>
                    <label>
                        Speciality
                        <input
                            id="speciality"
                            type="text"
                            value={speciality}
                            placeholder="e.g: Cardiologist"
                            onChange={(e) => setSpeciality(e.target.value)}
                        />
                    </label>
                </div>

                <button className={classes.Button}>Add</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>

            <>
                <div className={classes.sectionHeader}>Your Specialities</div>
                {specialities.map((speciality, i) => {
                    return (
                        <>
                            <div className={classes.Badge}>{speciality}</div>
                        </>
                    )
                })}
            </>
        </div>
    )
}
export default SpecialityEdit
