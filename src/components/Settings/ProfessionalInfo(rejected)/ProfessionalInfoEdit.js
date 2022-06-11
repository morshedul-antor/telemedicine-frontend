import AcademicForm from './AcademicForm/AcademicForm'
import classes from './ProfessionalInfoEdit.module.css'
import WorkplaceForm from './WorkplaceForm/WorkplaceForm'

const ProfessionalInfoEdit = () => {
    return (
        <div className={classes.ProfessionalInfo}>
            <div className={classes.Info}>
                <div className={classes.Academic}>
                    <AcademicForm />
                </div>
                <div className={classes.Practice}>
                    <WorkplaceForm />
                </div>
            </div>
        </div>
    )
}
export default ProfessionalInfoEdit
