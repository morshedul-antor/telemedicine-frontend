import AddChamberForm from './AddChamberForm/AddChamberForm'

const AddChamber = ({
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
    return (
        <div>
            <AddChamberForm
                addChamber={addChamber}
                name={name}
                setName={setName}
                detail={detail}
                setDetail={setDetail}
                district={district}
                setDistrict={setDistrict}
                detailAddress={detailAddress}
                setDetailAddress={setDetailAddress}
                chamberPopup={chamberPopup}
                setChamberPopup={setChamberPopup}
            />
        </div>
    )
}
export default AddChamber
