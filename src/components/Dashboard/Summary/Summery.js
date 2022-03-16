import classes from './Summery.module.css'

const Summery = () => {
    return (
        <div className={classes.Summery}>
            <div>
                <p>Mmonthly appointments</p>
                <p>52</p>
            </div>
            <div>
                <p>Today's Appoinments</p>
                <p>3</p>
            </div>
            <div></div>
        </div>
    )
}

export default Summery
