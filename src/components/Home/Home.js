import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import bg from '../../assets/img/background-doc-table.jpg'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div
            className={classes.Home}
            style={{
                background: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: '0',
                left: '0',
            }}>
            <div className={classes.Wrapper}>
                <div>
                    <h1>
                        Smart <span>Doctor</span>
                    </h1>
                    <h2>
                        Trusted <span>digital solution</span> for doctor
                    </h2>

                    <div className={classes.btnWrapper}>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>

                    <div className={classes.Journey}>
                        <p>Smart Doctor</p>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <p>E-Prescription</p>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <p>My Health Portal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
