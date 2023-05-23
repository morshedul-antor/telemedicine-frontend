import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './EPrescription.module.css'

export default function EPrescription() {
    return (
        <>
            <div className={classes.eprescription}>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faList} /> Prescription List
                    </p>
                </div>
            </div>
        </>
    )
}
