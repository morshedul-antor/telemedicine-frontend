import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './DeleteChamber.module.css'

const DeleteChamber = ({ chamberId }) => {
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
                Authorization: `Bearer ${token}`,
            },
            method: 'DELETE',
        })
        if (deleteFetch.ok) {
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
                <div>
                    <div className={classes.formPopup}>
                        <div onClick={deletePrompt}></div>
                        <h2>Delete Chamber</h2>
                        <div className={classes.content}>
                            <form onSubmit={deleteChamber}>
                                <h3>Are you sure?</h3>
                                <button onClick={!deletePrompt}>Sure</button>
                                <button onClick={popup}>Not Sure</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default DeleteChamber
