import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProfileDetail = () => {
    return (
        <div>
            <h2>
                <Skeleton />
            </h2>
            <ul>
                <li>
                    <Skeleton />
                </li>
                <li>
                    <Skeleton />
                </li>
            </ul>
        </div>
    )
}
export default SkeletonProfileDetail
