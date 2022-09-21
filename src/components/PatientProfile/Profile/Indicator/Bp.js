import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import { toMonthNameShort } from '../../../../utils/date'
import { LineChart } from '../../../Chart'

const Bp = ({ patientId }) => {
    const { stateAuth } = useContext(Auth)
    const [dataBp, setDataBp] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    let token = stateAuth.token

    useEffect(() => {
        let bpFunc = async () => {
            let bpFetch = await fetch(`${apiV1}/doctor/patient/patient/indicator/bp/${patientId}?skip=0&limit=10`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            let bpJson = await bpFetch.json()
            if (bpFetch.ok) {
                setDataBp(bpJson)
            }
        }

        try {
            bpFunc()
        } catch (e) {}
    }, [apiV1, token, patientId])

    let data = {
        labels: [
            ...dataBp
                .map(
                    (elm) =>
                        `${elm.created_at.slice(8, 10)}-${toMonthNameShort(
                            elm.created_at.slice(6, 7)
                        )}${elm.created_at.slice(2, 4)}`
                )
                .reverse(),
        ],
        datasets: [
            {
                label: 'Systolic',
                data: [...dataBp.map((elm) => elm.slot_int1).reverse()],
                fill: true,
                backgroundColor: 'rgba(45, 114, 178,0.2)',
                borderColor: 'rgba(45, 114, 178,1)',
                lineTension: 0.4,
            },
            {
                label: 'Diastolic',
                data: [...dataBp.map((elm) => elm.slot_int2).reverse()],
                fill: true,
                backgroundColor: 'rgba(65, 173, 217, 0.2)',
                borderColor: 'rgba(65, 173, 217, 1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <LineChart data={data} />
        </div>
    )
}

export default Bp
