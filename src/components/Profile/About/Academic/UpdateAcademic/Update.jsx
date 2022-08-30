import { useContext, useState } from 'react'
import { Auth } from '../../../../../allContext'
import { refreshPage } from '../../../../../utils/refreshPage'
import classes from './Update.module.css'

export default function Update({ setIsOpen, index, academic }) {
    const [degree, setDegree] = useState(academic.degree)
    const [institute, setInstitute] = useState(academic.institute)
    const [speciality, setSpeciality] = useState(academic.speciality)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const handleUpdate = async (e) => {
        e.preventDefault()

        const details = {
            ...academic,
            institute,
            degree,
            speciality,
        }

        let response = await fetch(`${apiV1}/doctors/academic/${academic.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        if (response.ok) {
            refreshPage()
        }
    }

    return (
        <div key={() => index} className={classes.container}>
            <div className={classes.cross} onClick={() => setIsOpen(false)}>
                &times;
            </div>
            <div className={classes.formWrapper}>
                <div className={classes.close} onClick={() => setIsOpen(false)}>
                    &times;
                </div>

                <form onSubmit={(e) => handleUpdate(e)}>
                    <div className={classes.section}>Update Academic Qualification</div>
                    <div className={classes.innerWrap}>
                        <div className={classes.formGrid}>
                            <label>
                                Qualification
                                <input
                                    type="text"
                                    placeholder="MBBS"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Speciality
                                <input
                                    type="text"
                                    placeholder="Cardiologist"
                                    value={speciality}
                                    onChange={(e) => setSpeciality(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <label>
                            Institute
                            <input
                                type="text"
                                placeholder="Dhaka Medical College"
                                value={institute}
                                onChange={(e) => setInstitute(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button className={classes.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
