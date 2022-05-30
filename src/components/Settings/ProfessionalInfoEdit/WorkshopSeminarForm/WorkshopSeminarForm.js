import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import classes from './WorkshopSeminarForm.module.css'

const WorkshopSeminarForm = () => {
    const [formpopup, setFormpopup] = useState(false)

    const popup = () => {
        setFormpopup(!formpopup)
    }

    return (
        <div>
            <div className={classes.WorkshopForm}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Add Workplace
                </button>
            </div>

            {formpopup && (
                <div className={classes.formPopup}>
                    <div onClick={formpopup}></div>
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
export default WorkshopSeminarForm
