import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import { toMonthNameShort } from '../../../../utils/date'
import { LineChart } from '../../../Chart'

const Pulse = ({ patientId }) => {
    const { stateAuth } = useContext(Auth)
    const [dataRbs, setDataRbs] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    let token = stateAuth.token

    useEffect(() => {
        let rbsFunc = async () => {
            let rbsFetch = await fetch(`${apiV1}/doctor/patient/patient/indicator/rbs/${patientId}?skip=0&limit=10`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            let rbsJson = await rbsFetch.json()
            if (rbsFetch.ok) {
                setDataRbs(rbsJson)
            }
        }

        try {
            rbsFunc()
        } catch (e) {}
    }, [apiV1, token, patientId])

    let data = {
        labels: [
            ...dataRbs
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
                label: 'RBS',
                data: [...dataRbs.map((elm) => elm.slot_flt4).reverse()],
                fill: true,
                backgroundColor: 'rgba(119, 221, 119,0.2)',
                borderColor: 'rgba(119, 221, 119,1)',
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
