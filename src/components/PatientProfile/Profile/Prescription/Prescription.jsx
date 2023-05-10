import { useState } from 'react'
import EPrescription from './EPrescription/EPrescription'
import UploadList from './UploadList/UploadList'

export default function Prescription({ patientId }) {
    const [, setPrescriptionOpen] = useState(true)
    const [, setUploadOpen] = useState(false)

    return (
        <div>
            <EPrescription setPrescriptionOpen={setPrescriptionOpen} setUploadOpen={setUploadOpen} />
            <UploadList patientId={patientId} setPrescriptionOpen={setPrescriptionOpen} setUploadOpen={setUploadOpen} />
        </div>
    )
}
