import classes from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <div>
            <button type="buttton" className={classes.Collapsible}>
                Profile Details
            </button>
            <div className={classes.Content}>
                <p>Email: </p>
                <p>Phone: </p>
            </div>
        </div>
    )
}
export default ProfileCard
