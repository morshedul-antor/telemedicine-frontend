import Academic from '../ProfessionalInfoEdit/Academic/Academic'
import Workplace from '../ProfessionalInfoEdit/Workplace/Workplace'
import classes from './ProfessionalInfoEdit.module.css'

const ProfessionalInfoEdit = () => {
    return (
        <div className={classes.ProfessionalInfo}>
            <div className={classes.Info}>
                <div className={classes.Academic}>
                    <Academic />
                </div>
                <div className={classes.Workplace}>
                    <Workplace />
                </div>
            </div>
        </div>
    )
}
export default ProfessionalInfoEdit
