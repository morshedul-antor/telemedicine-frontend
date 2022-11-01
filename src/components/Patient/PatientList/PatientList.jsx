import React from 'react'
import Table from '../../Resource/Table/Table'
import classes from './PatientList.module.css'

export default function PatientList() {
    return (
        <div className={classes.list}>
            <Table>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Patient Name</th>
                        <th>Cause of Consultation</th>
                        <th>Date</th>
                        <th>Remarks</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {prescriptions[1] &&
                        prescriptions[1].map((prescription, index) => (
                            <tr key={index} className={classes.row}>
                                <td>{index + 1}</td>
                                <td>{prescription.doctor_name}</td>
                                <td>{prescription.cause_of_consultation}</td>
                                <td>{prescription.created_at !== null ? prescription.created_at.slice(0, 10) : '-'}</td>
                                <td>{prescription.remarks}</td>
                                <td>
                                    <a href={`https://ep.healthxbd.com/ep/hxep${prescription.id}`}>
                                        <button>Click</button>
                                    </a>
                                </td>
                            </tr>
                        ))} */}
                </tbody>
            </Table>
        </div>
    )
}
