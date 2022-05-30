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
                    Add Workplace
                </button>
            </div>

            {workpopup && (
                <div className={classes.formPopup}>
                    <div onClick={workpopup}></div>
                    <div className={classes.collegeForm}>
                        <h2>Add another workplace</h2>
                        <form>
                            <button>Create</button>
                            <button onClick={popup}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
export default WorkplaceForm
