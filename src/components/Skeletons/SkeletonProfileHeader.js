import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import cover from '../../assets/img/doctor/bg.jpg'
import classes from './SkeletonProfileHeader.module.css'

const SkeletonProfileHeader = () => {
    return (
        <>
            <div
                className={classes.header}
                style={{
                    background: `url(${cover})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                <div>
                    <div className={classes.headLeftWrapper}>
                        <div className={classes.profilePic}>
                            <Skeleton height={150} width={150} />
                        </div>

                        <div className={classes.intro}>
                            <h2>
                                <Skeleton />
                            </h2>
                            <p>
                                <Skeleton />
                            </p>
                            <p>
                                <Skeleton />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.Chamber}>
                    <div>
                        <h1>
                            <Skeleton />
                        </h1>
                        <p>
                            <Skeleton />
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.infoWrapper}>
                <div className={classes.Info}>
                    <div>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>

                    <div>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>

                    <div>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkeletonProfileHeader
