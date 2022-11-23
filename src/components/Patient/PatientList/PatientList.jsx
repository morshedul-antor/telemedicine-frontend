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
                    {/* <tr className={classes.row}>
                        <td>1</td>
                        <td>Antor</td>
                        <td>Headache</td>
                        <td>02-10-2022</td>
                        <td>Eat Properly</td>
                        <td>
                            <a href="">
                                <button>Click</button>
                            </a>
                        </td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    )
}
