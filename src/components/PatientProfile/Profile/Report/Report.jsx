import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ReportFetch from '../ReportFetch/ReportFetch'
import classes from './Report.module.css'

export default function Report({ patientId }) {
    const [select, setSelect] = useState('patient_report')

    return (
        <div className={classes.report}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                    Select Reports:
                </p>
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option value="patient_report">Test Reports</option>
                    <option value="patient_surgery">Surgery Reports</option>
                    <option value="patient_vaccination">Vaccination Records</option>
                </select>
            </div>
            <div>
                <ReportFetch patientId={patientId} address={`${select}`} />
            </div>
        </div>
    )
}
