import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Auth } from '../../../../../allContext'
import classes from './AddChamberForm.module.css'

const AddChanberForm = () => {
    const [chamberPopup, setChamberPopup] = useState(false)
    const popup = () => {
        setChamberPopup(!chamberPopup)
    }

    // const history = useHistory()
    const { stateAuth } = useContext(Auth)
    const [msg, setMsg] = useState('')

    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1

    const token = stateAuth.token

    const addChamber = async (e) => {
        e.preventDefault()

        let addChamberFetch = await fetch(`${apiV1}/doctors/chamber`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                name,
                detail,
            }),
        })
        if (addChamberFetch.ok) {
            setMsg('Chamber created')
        } else {
            setMsg('Something went wrong.')
        }
    }

    return (
        <div>
            <div className={classes.addChamber}>
                <button onClick={popup}>Add Chamber</button>
            </div>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}
            {chamberPopup && (
                <div className={classes.formPopup}>
                    <div onClick={chamberPopup}></div>
                    <div className={classes.chamberForm}>
                        <h2>Create Chamber</h2>
                        <div className={classes.content}>
                            <form onSubmit={addChamber}>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="detail">Detail</label>
                                <input
                                    id="detail"
                                    type="text"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                />
                                <button>Create</button>
                                <button onClick={popup}>Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AddChanberForm
