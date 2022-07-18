import Timepicker2 from '../../Timepicker2/Timepicker'
import classes from './OnlineForm.module.css'

const OnlineForm = ({ day, msg, setMsg, online }) => {
    return (
        <>
            <>
                <Timepicker2 day={day} msg={msg} setMsg={setMsg} online={online} />
            </>
        </>
    )
}
export default OnlineForm
