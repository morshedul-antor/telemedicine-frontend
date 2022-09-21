import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import classes from './IndicatorView.module.css'
import { Bp, Rbs, Weight, Pulse } from './index'

export default function IndicatorView({ patientId }) {
    const [select, setSelect] = useState(1)
    return (
        <div className={classes.wrapper}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                    Select Indicators:
                </p>
                <select onChange={(e) => setSelect(parseInt(e.target.value))}>
                    <option value="1">Blood Pressure</option>
                    <option value="2">Diabetes</option>
                    <option value="3">Weight</option>
                    <option value="4">Pulse</option>
                </select>
            </div>
            <div className={classes.grid}>
                {select === 1 ? <Bp patientId={patientId} /> : ''}
                {select === 2 ? <Rbs patientId={patientId} /> : ''}
                {select === 3 ? <Weight patientId={patientId} /> : ''}
                {select === 4 ? <Pulse patientId={patientId} /> : ''}
            </div>
        </div>
    )
}
