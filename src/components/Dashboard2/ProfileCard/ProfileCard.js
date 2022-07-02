import pp from '../../../assets/img/docstock.jpg'
import classes from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <div className={classes.Profilecard}>
            <div className={classes.Image}>
                <img src={pp} alt="pp" />
            </div>
            <div>
                <h3>Dr. Rashedul Islam Rahat</h3>
            </div>
        </div>
    )
}
export default ProfileCard
