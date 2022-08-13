import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from './SkeletonChamber.module.css'

const SkeletonChamber = () => {
    return (
        <div className={classes.Chambers}>
            <div className={classes.head}>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
            </div>

            <div className={classes.body}>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <div className={classes.btn}>
                        <Skeleton />
                    </div>
                </p>
            </div>
            <div className={classes.body}>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <div className={classes.btn}>
                        <Skeleton />
                    </div>
                </p>
            </div>
            <div className={classes.body}>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <Skeleton />
                </p>
                <p>
                    <div className={classes.btn}>
                        <Skeleton />
                    </div>
                </p>
            </div>
        </div>
    )
}
export default SkeletonChamber
