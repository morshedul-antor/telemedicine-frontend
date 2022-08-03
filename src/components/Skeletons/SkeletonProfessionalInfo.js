import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProfessionalInfo = () => {
    return (
        <div>
            <h2>
                <Skeleton />
            </h2>
            <ul>
                <li>
                    <div>
                        <h3>
                            <Skeleton />
                        </h3>
                        <p>
                            <Skeleton />
                        </p>
                        <p>
                            <Skeleton />
                        </p>
                    </div>
                </li>

                <li>
                    <div>
                        <h3>
                            <Skeleton />
                        </h3>
                        <p>
                            <Skeleton />
                        </p>
                        <p>
                            <Skeleton />
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default SkeletonProfessionalInfo
