import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import classes from './EditChamber.module.css'

const EditChamber = ({ chamber, chamberId, msg, setMsg }) => {
    const [editPrompt, setEditPrompt] = useState(false)
    const popup = () => {
        setEditPrompt(!editPrompt)
    }

    const { stateAuth } = useContext(Auth)

    const chamberInfo = chamber

    const [name, setName] = useState(chamberInfo.name)
    const [detail, setDetail] = useState(chamberInfo.detail)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const editChamber = async (e) => {
        e.preventDefault()

        let editFetch = await fetch(`${apiV1}/doctors/chamber/${chamberId}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'PUT',
            body: JSON.stringify({
                name,
                detail,
            }),
        })
        if (editFetch.ok) {
            setMsg([...msg, 'Chamber modified'])
            setEditPrompt(!editPrompt)
        }
    }

    return (
        <div>
            <div className={classes.editChamber}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </div>
            {editPrompt && (
                <div className={classes.formPopup}>
                    <div onClick={editPrompt}></div>
                    <div className={classes.chamberForm}>
                        <h2>Edit Chamber</h2>
                        <div className={classes.content}>
                            <form onSubmit={editChamber}>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="detail">Detail</label>
                                <input
                                    id="detail"
                                    type="text"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                />
                                <button>Edit</button>
                                <button className={classes.Close} onClick={popup}>
                                    Discard
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default EditChamber
