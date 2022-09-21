import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import { toMonthNameShort } from '../../../../utils/date'
import { LineChart } from '../../../Chart'

const Weight = ({ patientId }) => {
    const { stateAuth } = useContext(Auth)
    const [dataWeight, setDataWeight] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    let token = stateAuth.token

    useEffect(() => {
        let weightFunc = async () => {
            let weightFetch = await fetch(
                `${apiV1}/doctor/patient/patient/indicator/weight/${patientId}?skip=0&limit=10`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            let weightJson = await weightFetch.json()
            if (weightFetch.ok) {
                setDataWeight(weightJson)
            }
        }

        try {
            weightFunc()
        } catch (e) {}
    }, [apiV1, token, patientId])

    let data = {
        labels: [
            ...dataWeight
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
                label: 'Weight',
                data: [...dataWeight.map((elm) => elm.slot_flt4).reverse()],
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

export default Weight
