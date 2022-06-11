import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './AddChamberForm.module.css'

const AddChanberForm = ({ addChamber, name, setName, detail, setDetail, chamberPopup, setChamberPopup }) => {
    const popup = () => {
        setChamberPopup(!chamberPopup)
    }

    return (
        <div>
            <div className={classes.addChamber}>
                <button onClick={popup}>
                    {' '}
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Chamber</span>
                </button>
            </div>

            {chamberPopup && (
                <div className={classes.formPopup}>
                    <div onClick={chamberPopup}></div>
                    <div className={classes.chamberForm}>
                        <h2>Create Chamber</h2>
                        <div className={classes.content}>
                            <form onSubmit={addChamber}>
                                <label htmlFor="name">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="detail">Detail</label>
                                <input value={detail} onChange={(e) => setDetail(e.target.value)} />

                                <button>Create</button>
                                <button className={classes.Close} onClick={popup}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AddChanberForm
