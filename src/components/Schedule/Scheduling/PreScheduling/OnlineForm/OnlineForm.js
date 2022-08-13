import Timepicker from '../../Timepicker/Timepicker'
import classes from './OnlineForm.module.css'

const OnlineForm = ({ day, msg, setMsg, online }) => {
    return (
        <div className={classes.Timepicker}>
            <Timepicker day={day} msg={msg} setMsg={setMsg} online={online} />
        </div>
    )
}
export default OnlineForm
