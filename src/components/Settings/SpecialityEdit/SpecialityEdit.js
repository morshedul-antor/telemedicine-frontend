import { useState } from 'react'
import classes from './SpecialityEdit.module.css'

const SpecialityEdit = () => {
    let specialities = ['Cardiologist', 'Medicine']
    const [speciality, setSpeciality] = useState()
    return (
        <div className={classes.Speciality}>
            <>
                <h2> Add Speciality</h2>

                <form>
                    <label htmlFor="speciality">Speciality</label>
                    <input
                        id="speciality"
                        type="text"
                        value={speciality}
                        placeholder="e.g: Cardiologist"
                        onChange={(e) => setSpeciality(e.target.value)}
                    />

                    <button>Add</button>
                </form>
            </>
            <>
                <h2>Your Specialities</h2>
                {specialities.map((speciality, i) => {
                    return (
                        <span className={classes.badge}>
                            {speciality} <button> X </button>
                        </span>
                    )
                })}
            </>
        </div>
    )
}
export default SpecialityEdit
