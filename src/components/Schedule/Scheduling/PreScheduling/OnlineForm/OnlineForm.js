import Timepicker2 from '../../Timepicker2/Timepicker'
import classes from './OnlineForm.module.css'

const OnlineForm = ({ day, msg, setMsg }) => {
    return (
        <>
            <>
                <Timepicker2 day={day} msg={msg} setMsg={setMsg} />
            </>
        </>
    )
}
export default OnlineForm
