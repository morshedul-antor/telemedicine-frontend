import classes from './LatestPatient.module.css'

const LatestPatient = () => {
    return (
        <div className={classes.latestPatient}>
            <div className={classes.Title}>Latest Patient</div>
            <div>
                <p>John Doe ~ Diabetis</p>
            </div>
            <div className={classes.Btns}>
                <button>Send report</button>
                <button>See Profile</button>
            </div>
        </div>
    )
}
export default LatestPatient
