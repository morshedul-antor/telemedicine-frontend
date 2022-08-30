import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './DeleteChamber.module.css'

const DeleteChamber = ({ chamberId, msg, setMsg }) => {
    const [deletePrompt, setDeletePrompt] = useState(false)
    const popup = () => {
        setDeletePrompt(!deletePrompt)
    }

    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const deleteChamber = async (e) => {
        e.preventDefault()

        let deleteFetch = await fetch(`${apiV1}/doctors/chamber/${chamberId}`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'DELETE',
        })
        if (deleteFetch.ok) {
            setMsg([...msg, ' Chamber Deleted'])
            setDeletePrompt(!deletePrompt)
        }
    }

    return (
        <div>
            <div className={classes.deleteChamber}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>

            {deletePrompt && (
                <div className={classes.formPopup}>
                    <div onClick={deletePrompt}></div>
                    <div className={classes.chamberForm}>
                        <div>
                            <form onSubmit={deleteChamber}>
                                <div className={classes.formHeader}>Detele Chamber</div>
                                <div className={classes.Button}>
                                    <button>Delete</button>
                                    <button className={classes.Close} onClick={popup}>
                                        Discard
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default DeleteChamber
