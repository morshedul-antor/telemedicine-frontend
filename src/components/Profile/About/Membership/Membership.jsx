import { faAward, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../../../allContext'
import SkeletonProfileDetail from '../../../Skeletons/SkeletonProfileDetail'
import classes from './Membership.module.css'
import Update from './UpdateMembership/Update'

export default function Membership() {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [memberships, setMemberships] = useState([])
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [year, setYear] = useState('')

    const [formOpen, setFormOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            let infoFunc = async () => {
                let infoFetch = await fetch(`${apiV1}/doctors/membership/?skip=0&limit=50`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    method: 'GET',
                })
                let infoJson = await infoFetch.json()
                if (infoFetch.ok) {
                    setMemberships(infoJson)
                }
            }
            try {
                infoFunc()
                setIsLoading(false)
            } catch (e) {}
        }, 2000)
    }, [apiV1, token, name, position])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            name,
            position,
            year,
        }

        let response = await fetch(`${apiV1}/doctors/membership/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (response.ok) {
            setFormOpen(false)
            setName('')
            setPosition('')
            setYear('')
        }
    }

    return (
        <>
            {isLoading ? (
                <div className={classes.ProfileDetail}>
                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>

                    <div className={classes.Basic}>
                        <SkeletonProfileDetail />
                    </div>
                </div>
            ) : (
                <div className={classes.Membership}>
                    <div className={classes.Basic}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faAward} /> Professional Membership
                            </h2>
                            <table className={classes.infoTable}>
                                <thead>
                                    <tr className={classes.row}>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Year</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {memberships[1] &&
                                        memberships[1].map((membership, index) => (
                                            <tr className={classes.row} key={index}>
                                                <td>{membership.name}</td>
                                                <td>{membership.position}</td>
                                                <td>{membership.year}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faEdit} onClick={() => setIsOpen(index)} />
                                                </td>
                                                {isOpen === index && (
                                                    <Update
                                                        index={index}
                                                        setIsOpen={setIsOpen}
                                                        membership={membership}
                                                    />
                                                )}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={classes.Basic}>
                        <button onClick={() => setFormOpen(true)}>Add More</button>
                        {formOpen && (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className={classes.formWrap}>
                                    <label>
                                        <span>
                                            <button onClick={() => setFormOpen(false)}>x</button>
                                        </span>
                                        Name
                                        <input
                                            type="text"
                                            placeholder="Bangladesh Medical & Dental Council"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Position
                                        <input
                                            type="text"
                                            placeholder="Member"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Year
                                        <input
                                            type="text"
                                            placeholder="2022"
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <div>
                                        <button type="submit" className={classes.button}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
