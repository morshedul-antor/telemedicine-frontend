import { useState, useEffect } from 'react'
import GridLoader from 'react-spinners/GridLoader'
import LandingPage from '../components/LandingPage/LandingPage'

const HomePage = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return <div>{loading ? <GridLoader color="#419CD9" size={10} loading={loading} /> : <LandingPage />}</div>
}

export default HomePage
