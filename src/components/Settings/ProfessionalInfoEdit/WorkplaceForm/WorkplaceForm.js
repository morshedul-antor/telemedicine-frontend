import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import classes from './WorkplaceForm.module.css'

const WorkplaceForm = () => {
    const [workpopup, setWorkpopup] = useState(false)

    const popup = () => {
        setWorkpopup(!workpopup)
    }

    return (
        <div>
            <div className={classes.WorkplaceForm}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <span>Add Workplace</span>
                </button>
            </div>

            {workpopup && (
                <div className={classes.formPopup}>
                    <div onClick={workpopup}></div>
                    <div className={classes.InstituteForm}>
                        <h2>Add another workplace</h2>
                        <div className={classes.Content}>
                            <form>
                                <label htmlFor="institution">Institution</label>
                                <input id="institution" type="text" />

                                <label htmlFor="location">Location</label>
                                <input id="location" type="text" />

                                <label htmlFor="position">Position</label>
                                <input id="position" type="text" />
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
export default WorkplaceForm
