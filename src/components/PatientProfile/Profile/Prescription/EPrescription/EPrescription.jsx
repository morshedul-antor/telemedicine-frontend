import { faEye, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './EPrescription.module.css'

export default function EPrescription() {
    return (
        <>
            <div className={classes.eprescription}>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faList} /> e-Prescription List
                    </p>
                </div>
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
        </>
    )
}
