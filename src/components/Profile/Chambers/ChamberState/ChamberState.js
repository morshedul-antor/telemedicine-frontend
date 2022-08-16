// import { useContext, useState, useEffect } from 'react'
// import { Auth } from '../../../../allContext'
import classes from './ChamberState.module.css'

const ChamberState = ({ chamberId, activate, active }) => {
    return (
        <label className={classes.switch}>
            <button onClick={activate}></button>
            <span className={chamberId === active.id ? `${classes.spanActive}` : `${classes.spanDective}`}></span>
        </label>
    )
}
export default ChamberState
