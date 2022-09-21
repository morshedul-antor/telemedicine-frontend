import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import { toMonthNameShort } from '../../../../utils/date'
import { LineChart } from '../../../Chart'

const Pulse = ({ patientId }) => {
    const { stateAuth } = useContext(Auth)
    const [dataPulse, setDataPulse] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    let token = stateAuth.token

    useEffect(() => {
        let pulseFunc = async () => {
            let pulseFetch = await fetch(
                `${apiV1}/doctor/patient/patient/indicator/pulse/${patientId}?skip=0&limit=10`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            let pulseJson = await pulseFetch.json()
            if (pulseFetch.ok) {
                setDataPulse(pulseJson)
            }
        }

        try {
            pulseFunc()
        } catch (e) {}
    }, [apiV1, token, patientId])

    let data = {
        labels: [
            ...dataPulse
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
                label: 'Pulse',
                data: [...dataPulse.map((elm) => elm.slot_int1).reverse()],
                fill: true,
                backgroundColor: 'rgba(245, 66, 66,0.2)',
                borderColor: 'rgba(245, 66, 66,1)',
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

export default Pulse
