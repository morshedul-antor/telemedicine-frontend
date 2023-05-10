import { faArrowRight, faEye, faEyeSlash, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import Doc from '../../assets/img/doctor/doctors.png'
import { statusCheck } from '../../utils/statusCheck'
import classes from './Login.module.css'

const Login = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)

    const history = useHistory()

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const [alert, setAlert] = useState([])
    const apiV1 = process.env.REACT_APP_API_V1

    const [passShown, setPassShown] = useState(false)
    const shownPassword = () => {
        setPassShown((prev) => !prev)
    }

    const submit = async (e) => {
        e.preventDefault()

        let loginFetch = await fetch(`${apiV1}/login`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        let loginJson = await loginFetch.json()

        if (!loginFetch.ok) {
            let err = statusCheck(loginFetch, [
                { sts: 400, msg: 'User email/phone number or Password not correct.' },
                { sts: 404, msg: 'Your profile is not yet verified!' },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setAlert([...alert, err.msg])
            dispatchAuth({ type: 'remove' })
        } else {
            dispatchAuth({ type: 'token', payload: loginJson.access_token })

            if (stateAuth.auth === true) {
                history.push('/home')
            }
        }
    }

    // if already logged in
    useEffect(() => {
        if (stateAuth.auth === true) {
            history.push('/home')
        }
    }, [stateAuth, history])

    return (
        <div className={classes.Login}>
            {
                <>
                    {alert.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <Link to="/" className={classes.logo}>
                <FontAwesomeIcon icon={faStethoscope} /> LiveDoc
            </Link>

            <div className={classes.Wrapper}>
                <div className={classes.left}>
                    <div>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <h2>
                            <FontAwesomeIcon icon={faStethoscope} /> LiveDoc
                        </h2>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faStethoscope} />
                            Login as Doctor
                        </h2>
                        <form onSubmit={submit}>
                            <div>
                                <input type="text" onChange={(e) => setIdentifier(e.target.value)} required />
                                <label>
                                    <span>Email or Phone number</span>
                                </label>
                            </div>

                            <div className={classes.show}>
                                {passShown === true ? (
                                    <FontAwesomeIcon
                                        icon={faEyeSlash}
                                        onClick={() => {
                                            shownPassword()
                                        }}
                                        title="Hide Password"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        onClick={() => {
                                            shownPassword()
                                        }}
                                        title="Show Password"
                                    />
                                )}
                                <input
                                    type={passShown ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>

                            <button>Login</button>
                        </form>

                        <p className={classes.linkText}>
                            Don't have an account?{' '}
                            <Link to="/register">
                                Register <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
