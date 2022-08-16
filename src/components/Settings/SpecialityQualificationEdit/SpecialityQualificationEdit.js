import QualificationEdit from './QualificationEdit/QualificationEdit'
import SpecialityEdit from './SpecialityEdit/SpecialityEdit'
import classes from './SpecialityQualificationEdit.module.css'

const SpecialityQualificationEdit = () => {
    return (
        <div className={classes.specialityQualification}>
            <div className={classes.Qualification}>
                <QualificationEdit />
            </div>
            <div className={classes.Speciality}>
                <SpecialityEdit />
            </div>
        </div>
    )
}
export default SpecialityQualificationEdit
