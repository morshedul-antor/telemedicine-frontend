import { useEffect, useState, useContext } from 'react'
import { Auth } from '../../allContext'
import { Sidebar } from '../Nav'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import SkeletonChamber from '../Skeletons/SkeletonChamber'
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
    const [isLoading, setIsLoading] = useState(true)

    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [district, setDistrict] = useState('')
    const [detailAddress, setDetailAddress] = useState('')
    const [fee, setFee] = useState(0)

    const [active, setActive] = useState({})
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
            method: 'POST',
            body: JSON.stringify({
                name,
                detail,
                district,
                detail_address: detailAddress,
                chamber_fee: fee,
            }),
        })
        if (addChamberFetch.ok) {
            setName('')
            setDetail('')
            setDistrict('')
            setDetailAddress('')
            setMsg([...msg, 'New Chamber added.'])
            setChamberPopup(!chamberPopup)
        }
    }

    useEffect(() => {
        setTimeout(() => {
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

            let activeChamberFunc = async (e) => {
                let activeChamberFetch = await fetch(`${apiV1}/doctors/chamber/active`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let activeChamberJson = await activeChamberFetch.json()
                if (activeChamberFetch.ok) {
                    setActive(activeChamberJson)
                }
            }

            try {
                chamberFunc()
                activeChamberFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 1000)
    }, [apiV1, token, msg, setIsLoading])

    let data = Array.from(chamberInfo)

    return (
        <div className={classes.Profile}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.profileWrapper}>
                <div className={classes.profileHeader}>
                    <ProfileHeader />
                </div>

                {isLoading ? (
                    <div className={classes.ChamberPage}>
                        <SkeletonChamber />
                    </div>
                ) : (
                    <div className={classes.ChamberPage}>
                        <div className={classes.Chambers}>
                            <div className={classes.head}>
                                <p>ID</p>
                                <p>Name</p>
                                <p>Detail</p>
                                <p>District</p>
                                <p>Chamber Address</p>
                                <p>Chamber Fee</p>
                                <p>Active</p>
                                <p>Action</p>
                            </div>
                            {data.map((chamber, i) => {
                                // API fetch for Activating Chamber
                                const activateChamberFunc = async (e) => {
                                    e.preventDefault()
                                    let activateChamberFetch = await fetch(
                                        `${apiV1}/doctors/chamber/activate/${chamber.id}`,
                                        {
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                            method: 'PUT',
                                        }
                                    )
                                    if (activateChamberFetch.ok) {
                                        setMsg(...msg, 'Chamber Activated')
                                    }
                                }
                                return (
                                    <div className={classes.body} key={i}>
                                        <p>{i + 1}</p>
                                        <p>{chamber.name}</p>
                                        <p>{chamber.detail}</p>
                                        <p>{chamber.district}</p>
                                        <p>{chamber.detail_address}</p>
                                        <p>{chamber.chamber_fee}</p>
                                        <p>
                                            <ChamberState
                                                chamberId={chamber.id}
                                                activate={activateChamberFunc}
                                                msg={msg}
                                                active={active}
                                            />
                                        </p>
                                        <p>
                                            <div className={classes.btn}>
                                                <button>
                                                    <EditChamber
                                                        chamber={chamber}
                                                        chamberId={chamber.id}
                                                        msg={msg}
                                                        setMsg={setMsg}
                                                    />
                                                </button>
                                                <button>
                                                    <DeleteChamber chamberId={chamber.id} msg={msg} setMsg={setMsg} />
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
                            district={district}
                            setDistrict={setDistrict}
                            detailAddress={detailAddress}
                            setDetailAddress={setDetailAddress}
                            fee={fee}
                            setFee={setFee}
                            chamberPopup={chamberPopup}
                            setChamberPopup={setChamberPopup}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Chambers
