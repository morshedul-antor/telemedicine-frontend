import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from './SkeletonProfessionalInfoEdit.module.css'

const SkeletonProfessionalInfoEdit = () => {
    return (
        <div className={classes.skeletonProfessionalInfo}>
            <div className={classes.skeletonInfo}>
                <div className={classes.Academic}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
                <div className={classes.Workplace}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
    )
}
export default SkeletonProfessionalInfoEdit
