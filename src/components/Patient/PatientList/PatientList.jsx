import React from 'react'
import Table from '../../Resource/Table/Table'
import classes from './PatientList.module.css'

export default function PatientList({ patients }) {
    const epV1 = process.env.REACT_APP_EP

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
                <tbody>
                    {patients[1]?.map((ep, index) => (
                        <tr className={classes.row} key={index}>
                            <td>{index + 1}</td>
                            <td>{ep.patient_name || '-'}</td>
                            <td>{ep.patient_sex || '-'}</td>
                            <td>{ep.cause_of_consultation}</td>
                            <td>{ep.created_at !== null ? ep.created_at.slice(0, 10) : '-'}</td>
                            <td>
                                <a href={`/patient/${ep.patient_id}`}>
                                    <button>Click</button>
                                </a>
                            </td>
                            <td>
                                <a href={`${epV1}/ep/hxep${ep.id + 100000}`}>
                                    <button>View</button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
