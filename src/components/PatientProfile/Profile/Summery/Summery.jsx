import { faHeartbeat, faRandom, faWalking, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BG from '../../../../assets/img/bg.jpg'
import classes from './Summery.module.css'

export default function Summery() {
    return (
        <div className={classes.summery}>
            <img src={BG} alt="" />
            <div className={classes.gridBox}>
                <div className={classes.box}>
                    <p>
                        --
                        <FontAwesomeIcon icon={faHeartbeat} />
                    </p>
                    <p>
                        <span>Blood Group</span>
                    </p>
                </div>
                <div className={classes.box}>
                    <p>
                        --
                        <FontAwesomeIcon icon={faWaveSquare} />
                    </p>
                    <p>
                        <span>Height</span>
                    </p>
                </div>
                <div className={classes.box}>
                    <p>
                        --
                        <FontAwesomeIcon icon={faWalking} />
                    </p>
                    <p>
                        <span>Weight</span>
                    </p>
                </div>
                <div className={classes.box}>
                    <p>
                        --
                        <FontAwesomeIcon icon={faRandom} />
                    </p>
                    <p>
                        <span>BMI</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
