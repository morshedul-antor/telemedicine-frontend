import { useState, useEffect } from 'react'
import GridLoader from 'react-spinners/GridLoader'
import LandingPage from '../components/LandingPage/LandingPage'

const HomePage = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40vh' }}>
                    <GridLoader color="#419CD9" size={20} loading={loading} />
                </div>
            ) : (
                <LandingPage />
            )}
        </div>
    )
}

export default HomePage
