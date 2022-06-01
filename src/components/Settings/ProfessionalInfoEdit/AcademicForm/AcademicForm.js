import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import classes from './AcademicForm.module.css'

const Academic = () => {
    const [acpopup, setAcpopup] = useState(false)

    const popup = () => {
        setAcpopup(!acpopup)
    }

    return (
        <div>
            <div className={classes.AcademicForm}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <span>Add academic info</span>
                </button>
            </div>

            {acpopup && (
                <div className={classes.formPopup}>
                    <div onClick={acpopup}></div>
                    <div className={classes.InstituteForm}>
                        <h2>Add Academic Institution</h2>
                        <div className={classes.Content}>
                            <form>
                                <label htmlFor="institution">Institution</label>
                                <input id="institution" type="text" />

                                <label htmlFor="degree">Degree</label>
                                <input id="degree" type="text" />

                                <label htmlFor="year">Year</label>
                                <input id="year" type="year111" />
                                <button>Add</button>
                                <button onClick={popup}>Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Academic
