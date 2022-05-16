import { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import AddChamber from './AddChamber/AddChamber'
import ChamberState from './ChamberState/ChamberState'
import classes from './Chambers.module.css'
import DeleteChamber from './DeleteChamber/DeleteChamber'
import EditChamber from './EditChamber/EditChamber'

const Chambers = () => {
    const [chamberPopup, setChamberPopup] = useState(false)

    const [chamberInfo, setChamberInfo] = useState({})

    const { stateAuth } = useContext(Auth)

    const [msg, setMsg] = useState([])

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
            setName('')
            setDetail('')
            setMsg([...msg, 'New Chamber added.'])
            setChamberPopup(!chamberPopup)
        }
    }

    useEffect(() => {
        let chamberFunc = async () => {
            let chamberFetch = await fetch(`${apiV1}/doctors/chamber/`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let chamberJson = await chamberFetch.json()
            if (chamberFetch.ok) {
                setChamberInfo(chamberJson)
            }
        }
        try {
            chamberFunc()
        } catch (e) {}
    }, [apiV1, token, msg])

    let data = Array.from(chamberInfo)

    return (
        <div className={classes.ChamberPage}>
            <div className={classes.Chambers}>
                <div className={classes.head}>
                    <p>ID</p>
                    <p>Name</p>
                    <p>District</p>
                    <p>Chamber Address</p>
                    <p>Active</p>
                    <p>Action</p>
                </div>
                {data.map((chamber, i) => {
                    return (
                        <div className={classes.body} key={i}>
                            <p>{i + 1}</p>
                            <p>{chamber.name}</p>
                            <p>District</p>
                            <p>{chamber.detail}</p>
                            <p>
                                <ChamberState chamberId={chamber.id} />
                            </p>
                            <p>
                                <div className={classes.btn}>
                                    <button>
                                        <DeleteChamber chamberId={chamber.id} msg={msg} setMsg={setMsg} />
                                    </button>

                                    <button>
                                        <EditChamber
                                            chamber={chamber}
                                            chamberId={chamber.id}
                                            msg={msg}
                                            setMsg={setMsg}
                                        />
                                    </button>
                                </div>
                            </p>
                        </div>
                    )
                })}
            </div>
            <AddChamber
                addChamber={addChamber}
                name={name}
                setName={setName}
                detail={detail}
                setDetail={setDetail}
                chamberPopup={chamberPopup}
                setChamberPopup={setChamberPopup}
            />
        </div>
    )
}
export default Chambers
