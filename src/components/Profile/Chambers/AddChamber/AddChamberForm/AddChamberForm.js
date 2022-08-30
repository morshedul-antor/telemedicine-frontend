import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import districts from '../../../../../utils/districts.json'
import classes from './AddChamberForm.module.css'

const AddChanberForm = ({
    addChamber,
    name,
    setName,
    detail,
    setDetail,
    setDistrict,
    detailAddress,
    setDetailAddress,
    chamberPopup,
    setChamberPopup,
    fee,
    setFee,
}) => {
    const popup = () => {
        setChamberPopup(!chamberPopup)
    }

    return (
        <div>
            <div className={classes.addChamber}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Chamber</span>
                </button>
            </div>

            {chamberPopup && (
                <div className={classes.formPopup}>
                    <div onClick={chamberPopup}></div>
                    <div className={classes.chamberForm}>
                        <form onSubmit={addChamber}>
                            <div className={classes.formHeader}>Add New Chamber</div>
                            <div className={classes.formWrap}>
                                <div className={classes.formGrid}>
                                    <label>
                                        Chamber Name
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Chamber Fee
                                        <input
                                            type="number"
                                            value={fee}
                                            onChange={(e) => setFee(parseFloat(e.target.value))}
                                            step="any"
                                            min={0}
                                        />
                                    </label>
                                </div>
                                <label>
                                    Chamber Details
                                    <input
                                        type="text"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                        required
                                    />
                                </label>
                                <label>
                                    District
                                    <select onChange={(e) => setDistrict(e.target.value)} required>
                                        <option value="">Select District</option>
                                        {districts.data.map((data) => (
                                            <option>{`${data.district} - ${data.districtbn}`}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    Detail Address
                                    <input
                                        type="text"
                                        value={detailAddress}
                                        onChange={(e) => setDetailAddress(e.target.value)}
                                        required
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
