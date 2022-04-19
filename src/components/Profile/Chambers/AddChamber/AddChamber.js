import AddChamberForm from './AddChamberForm/AddChamberForm'

const AddChamber = ({ addChamber, name, setName, detail, setDetail, chamberPopup, setChamberPopup }) => {
    return (
        <div>
            <AddChamberForm
                addChamber={addChamber}
                name={name}
                setName={setName}
                detail={detail}
                setDetail={setDetail}
                chamberPopup={chamberPopup}
                setChamberPopup={setChamberPopup}
            />
        </div>
    )
}
export default AddChamber
