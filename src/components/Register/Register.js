import { faRegistered, faHandSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Auth } from '../../allContext'
import Logo from '../../assets/logo/logo.png'
import { statusCheck } from '../../utils/statusCheck'
import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './Register.module.css'

const Register = () => {
    const { stateAuth } = useContext(Auth)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [sex, setSex] = useState('male')
    const [speciality, setSpeciality] = useState('')
    const [qualification, setQualification] = useState('')
    const [bmdc, setBmdc] = useState('')

    const [alert, setAlert] = useState([])
    const history = useHistory()

    const apiV1 = process.env.REACT_APP_API_V1

    const submit = async (e) => {
        e.preventDefault()

        if (password !== cnfPassword) {
            setAlert([...alert, 'Password not confirmed'])
            return
        }

        let registrationFetch = await fetch(`${apiV1}/doctors/signup`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                phone,
                sex,
                password,
                speciality,
                qualification,
                bmdc,
            }),
        })

        // let registrationJson = await registrationFetch.json()
        if (registrationFetch.ok) {
            history.push('/login')
        } else {
            let err = statusCheck(registrationFetch, [
                { sts: 400, msg: 'User email/phone number or Password not correct.' },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setAlert([...alert, err.msg])
        }
    }

    // if already logged in
    useEffect(() => {
        if (stateAuth.auth === true) {
            history.push('/profile')
        }
    }, [stateAuth, history])

    return (
        <div
            className={classes.Register}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            {
                <>
                    {alert.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <div className={classes.Wrapper}>
                <Link to="" className={classes.logo}>
                    <img src={Logo} alt="" />
                </Link>
                <div className={classes.left}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faRegistered} />
                            Register
                        </h2>
                        <form onSubmit={submit}>
                            <div>
                                <input type="text" onChange={(e) => setName(e.target.value)} required />
                                <label>
                                    <span>Name</span>
                                </label>
                            </div>
                            <div className={classes.emailPhone}>
                                <div>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                                    <label>
                                        <span>Email</span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        pattern="[0-9]{11}"
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <label>
                                        <span>Phone [11 digit]</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setCnfPassword(e.target.value)} required />
                                <label>
                                    <span>Confirm password</span>
                                </label>
                            </div>

                            <div className={classes.sexWrapper}>
                                <div>
                                    <label>Sex</label>
                                    <select value={sex} onChange={(e) => setSex(e.target.value)}>
                                        <option value="male" defaultValue={true}>
                                            Male
                                        </option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <input type="number" onChange={(e) => setBmdc(e.target.value)} required />
                                    <label>
                                        <span>BMDC number</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <input type="text" onChange={(e) => setQualification(e.target.value)} required />
                                <label>
                                    <span>Qualifications</span>
                                </label>
                            </div>

                            <div>
                                <input type="text" onChange={(e) => setSpeciality(e.target.value)} required />
                                <label>
                                    <span>Speciality</span>
                                </label>
                            </div>

                            <button>Register</button>
                        </form>

                        <p className={classes.linkText}>
                            Already have an account?{' '}
                            <Link to="/login">
                                Login <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faHandSparkles} /> Welcome to HEALTHx
                        </h2>
                        <p>
                            With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx is aspired
                            to be the largest digital health platform in Bangladesh providing the digital platform based
                            Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record) services for the
                            Patients. With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx
                            is aspired to be the largest digital health platform in Bangladesh providing the digital
                            platform based Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record)
                            services for the Patients. With a mission to ‘Drive the digitalization of healthcare of
                            Bangladesh, HEALTHx is aspired to be the largest digital health platform in Bangladesh
                            providing the digital platform based Telehealth. Home healthcare & Cloud based EHR
                            (Electronic Health Record) services for the Patients.
                        </p>
                        <div>
                            <span>For Any Issue Please Call at</span>
                            <a href="tel:+8801322658481">+88 01322658481</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
