import { useState } from 'react'
import classes from './QualificationEdit.module.css'

const QualificationEdit = () => {
    let qualifications = ['MBBS', 'FRCS']
    const [msg, setMsg] = useState('')
    const [qualification, setQualification] = useState('MBBS, FCPS, FRCS')
    return (
        <div className={classes.Qualification}>
            <form>
                <div className={classes.sectionHeader}>Qualifications</div>
                <div className={classes.formWrap}>
                    <label>
                        Qualification
                        <input
                            id="speciality"
                            type="text"
                            value={qualification}
                            placeholder="e.g: Cardiologist"
                            onChange={(e) => setQualification(e.target.value)}
                        />
                    </label>
                </div>

                <button className={classes.Button}>Update</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>

            <>
                <div className={classes.sectionHeader}>Your Qualifications</div>
                {/* {qualifications.map((qualification, i) => {
                    return (
                        <>
                            <div className={classes.Badge}>{qualification}</div>
                        </>
                    )
                })} */}
                <div className={classes.Badge}>MBBS, FCPS, FRCS</div>
            </>
        </div>
    )
}
export default QualificationEdit
