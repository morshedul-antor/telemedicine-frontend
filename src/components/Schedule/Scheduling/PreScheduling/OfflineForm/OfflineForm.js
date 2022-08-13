import Timepicker from '../../Timepicker/Timepicker'
import classes from './OfflineForm.module.css'

const OfflineForm = ({ day, msg, setMsg, online }) => {
    return (
        <div className={classes.Timepicker}>
            <Timepicker day={day} msg={msg} setMsg={setMsg} online={online} />
        </div>
    )
}
export default OfflineForm
