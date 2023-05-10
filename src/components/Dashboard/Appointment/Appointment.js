import Table from '../../Resource/Table/Table'
import classes from './Appointment.module.css'

export default function PatientList() {
    return (
        <div className={classes.list}>
            <Table>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Patient Name</th>
                        <th>Sex</th>
                        <th>Cause of Consultation</th>
                        <th>Date</th>
                        <th>Patient Profile</th>
                        <th>Prescription</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}
