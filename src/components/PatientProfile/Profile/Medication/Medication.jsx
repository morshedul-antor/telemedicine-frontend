import React from 'react'
import ReportFetch from '../ReportFetch/ReportFetch'

export default function Medication({ patientId }) {
    return (
        <div>
            <ReportFetch patientId={patientId} address={`patient_medication`} />
        </div>
    )
}
