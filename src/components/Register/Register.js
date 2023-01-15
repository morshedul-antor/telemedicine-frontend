import { faRegistered, faHandSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Auth } from '../../allContext'
import Doc from '../../assets/img/cds.png'
import Logo from '../../assets/logo/logo.png'
import { statusCheck } from '../../utils/statusCheck'
import BG from '.././../assets/img/background-doc-table.jpg'
import Popup from './PopUp/Popup'
import classes from './Register.module.css'

const Register = () => {
    const { stateAuth } = useContext(Auth)

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [sex, setSex] = useState('male')
    const [speciality, setSpeciality] = useState('')
    const [qualification, setQualification] = useState('')
    const [bmdc, setBmdc] = useState('')

    const [position, setPosition] = useState('')
    const [institute, setInstitute] = useState('')
    const [date, setDate] = useState('')

    const [alert, setAlert] = useState([])
    const [alertInfo, setAlertInfo] = useState(false)
    let [infoFetch, setInfoFetch] = useState({})
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
                dr_title: title,

                institute,
            }),
        })

        let registrationJson = await registrationFetch.json()

        if (registrationFetch.ok) {
            // history.push('/login')
            setInfoFetch(registrationJson)
            setAlertInfo(true)
        } else {
            let err = statusCheck(registrationFetch, [
                { sts: 400, msg: `${registrationJson.context}` },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
                { sts: 500, msg: 'Server Error!' },
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
                            <div className={classes.grid}>
                                <div>
                                    <label>
                                        Designation <span className={classes.star}>*</span>
                                    </label>
                                    <select value={title} onChange={(e) => setTitle(e.target.value)} required>
                                        <option value="">Select</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Prof. Dr.">Prof. Dr.</option>
                                        <option value="Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
                                        <option value="Asst. Prof. Dr.">Asst. Prof. Dr.</option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <label>
                                        <span>Name</span> <span className={classes.star}>*</span>
                                    </label>
                                </div>
                            </div>
                            <div className={classes.gridTwo}>
                                <div>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                                    <label>
                                        <span>Email</span> <span className={classes.star}>*</span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        pattern="[0][1][0-9]{9}"
                                        minLength={11}
                                        maxLength={11}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <label>
                                        <span>Phone</span> <span className={classes.sublabel}>(11 Digit)</span>{' '}
                                        <span className={classes.star}>*</span>
                                    </label>
                                </div>
                            </div>

                            <div className={classes.grid}>
                                <div>
                                    <label>
                                        Sex <span className={classes.star}>*</span>
                                    </label>
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
                                        <span>BMDC Number</span> <span className={classes.star}>*</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <input type="text" onChange={(e) => setQualification(e.target.value)} required />
                                <label>
                                    <span>Qualifications</span> <span className={classes.star}>*</span>
                                </label>
                            </div>

                            <div>
                                <input type="text" onChange={(e) => setSpeciality(e.target.value)} required />
                                <label>
                                    <span>Speciality</span> <span className={classes.star}>*</span>
                                </label>
                            </div>

                            <div>
                                <input type="text" onChange={(e) => setInstitute(e.target.value)} />
                                <label>
                                    <span>Working Institute</span>{' '}
                                    <span className={classes.sublabel}>(Hospital, Clinic, Lab or Diagnostic)</span>
                                </label>
                            </div>

                            {/* <div className={classes.gridTwo}>
                                <div>
                                    <input type="text" onChange={(e) => setPosition(e.target.value)} />
                                    <label>
                                        <span>Position</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                                    <label></label>
                                </div>
                            </div> */}

                            <div className={classes.gridTwo}>
                                <div>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                                    <label>
                                        <span>Password</span> <span className={classes.star}>*</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="password" onChange={(e) => setCnfPassword(e.target.value)} required />
                                    <label>
                                        <span>Confirm password</span> <span className={classes.star}>*</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className={classes.terms}>
                                        <input type="checkbox" required />
                                        <label>
                                            I have read and understood HEALTHx's <span>Privacy Policy</span> and{' '}
                                            <span>Doctor Terms of Service</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button>Register</button>
                        </form>

                        <p className={classes.linkText}>
                            Already have an account?{' '}
                            <Link to="/login">
                                Login <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </p>

                        <div className={classes.support}>
                            <span>For Any Support Please Call at</span>
                            <a href="tel:+8801322658481">+88 01322658481</a>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <h2>
                            <FontAwesomeIcon icon={faHandSparkles} /> Welcome to Smart Doctor Solution
                        </h2>
                        <p>Register yourself as a Doctor!</p>
                        <div>
                            <span>For Any Support Please Call at</span>
                            <a href="tel:+8801322658481">+88 01322658481</a>
                        </div>
                    </div>
                </div>
                {alertInfo && <Popup infoFetch={infoFetch} setIsOpen={setAlertInfo} history={history} />}
            </div>
        </div>
    )
}

export default Register
