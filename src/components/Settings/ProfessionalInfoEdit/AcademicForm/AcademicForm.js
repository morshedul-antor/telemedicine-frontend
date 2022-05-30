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
                    Add academic info
                </button>
            </div>

            {acpopup && (
                <div className={classes.formPopup}>
                    <div onClick={acpopup}></div>
                    <div className={classes.collegeForm}>
                        <h2>Add your Institution</h2>
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
export default Academic
