import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddChamber from './AddChamber/AddChamber'
import ChamberState from './ChamberState/ChamberState'
import classes from './Chambers.module.css'
import DeleteChamber from './DeleteChamber/DeleteChamber'
import EditChamber from './EditChamber/EditChamber'

const Chambers = ({ chamberDetail }) => {
    let data = Array.from(chamberDetail)
    return (
        <div>
            <div className={classes.Chambers}>
                <div className={classes.head}>
                    <p>ID</p>
                    <p>Name</p>
                    <p>Detail</p>
                    <p>Active</p>
                    <p>Action</p>
                </div>
                {data.map((chamber, i) => {
                    return (
                        <div className={classes.body} key={i}>
                            <p>{chamber.id}</p>
                            <p>{chamber.name}</p>
                            <p>{chamber.detail}</p>
                            {/* {chamber.is_active === false ? 'False' : 'True'} */}
                            <p>
                                <ChamberState />
                            </p>
                            <p>
                                <div className={classes.btn}>
                                    <DeleteChamber chamberId={chamber.id} />
                                    <EditChamber chamberId={chamber.id} />
                                </div>
                            </p>
                        </div>
                    )
                })}
            </div>
            <AddChamber />
        </div>
    )
}
export default Chambers
