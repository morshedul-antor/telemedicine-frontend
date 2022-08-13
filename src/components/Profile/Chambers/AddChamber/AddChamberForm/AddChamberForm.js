import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './AddChamberForm.module.css'

const AddChanberForm = ({
    addChamber,
    name,
    setName,
    detail,
    setDetail,
    district,
    setDistrict,
    detailAddress,
    setDetailAddress,
    chamberPopup,
    setChamberPopup,
}) => {
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
                        <form onSubmit={addChamber}>
                            <div className={classes.formHeader}>Add new chamber</div>
                            <div className={classes.formWrap}>
                                <label>
                                    Chamber Name
                                    <input
                                        id="name"
                                        type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Chamber Detail
                                    <input
                                        id="detail"
                                        type="text"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                    />
                                </label>
                                <label>
                                    District
                                    <input
                                        id="district"
                                        type="text"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Detail Address
                                    <input
                                        id="detail address"
                                        type="text"
                                        value={detailAddress}
                                        onChange={(e) => setDetailAddress(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className={classes.Button}>
                                <button>Create</button>
                                <button className={classes.Close} onClick={popup}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AddChanberForm
