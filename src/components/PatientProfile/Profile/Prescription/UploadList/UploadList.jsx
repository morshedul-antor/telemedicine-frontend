import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReportFetch from '../../ReportFetch/ReportFetch'
import classes from './UploadList.module.css'

export default function UploadList({ patientId }) {
    return (
        <div className={classes.upload}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faList} /> Uploaded List
                </p>
            </div>
            <ReportFetch patientId={patientId} address={`patient_prescription`} />
        </div>
    )
}
