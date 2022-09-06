import { faEye, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Prescription.module.css'

export default function Prescription() {
    return (
        <div className={classes.prescription}>
            <p>
                <FontAwesomeIcon icon={faList} /> Prescription List
            </p>
            <table className={classes.infoTable}>
                <thead>
                    <tr className={classes.row}>
                        <th>Sl</th>
                        <th>Doctor Name</th>
                        <th>Cause of Consultaion</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={classes.row}>
                        <td>1</td>
                        <td>Dr Rashadul Hasan</td>
                        <td>Serious Headache</td>
                        <td>20 Aug 2022</td>
                        <td>
                            <FontAwesomeIcon icon={faEye} />
                        </td>
                    </tr>

                    <tr className={classes.row}>
                        <td>2</td>
                        <td>Dr Rashadul Hasan</td>
                        <td>Chest Pain</td>
                        <td>10 Jul 2022</td>
                        <td>
                            <FontAwesomeIcon icon={faEye} />
                        </td>
                    </tr>

                    <tr className={classes.row}>
                        <td>3</td>
                        <td>Dr Hasan Mahmud</td>
                        <td>Food Poisoning</td>
                        <td>07 May 2022</td>
                        <td>
                            <FontAwesomeIcon icon={faEye} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
