import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../../allContext'
import { dateTime } from '../../utils/date'
import { calenderDate } from '../../utils/date'
import { Sidebar } from '../Nav'
import classes from './Schedule.module.css'
import ScheduleForm from './ScheduleForm/ScheduleForm'
import ScheduleList from './ScheduleList/ScheduleList'
import ScheduleListDate from './ScheduleListDate/ScheduleListDate'

export default function Schedule() {
    const [chambers, setChambers] = useState([])
    const [todaySchedule, setTodaySchedule] = useState([])
    const [changeableSchedule, setChangeableSchedule] = useState([])

    const today = dateTime.slice(0, 10)

    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    const [calender, setCalender] = useState(new Date())
    const changeDate = calenderDate(calender).slice(0, 10)

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/doctors/chamber/`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setChambers(data)
            }
        }
        try {
            fetchData()
        } catch (e) {
            setChambers([])
        }
    }, [apiV1, token])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/doctor/schedules/?date=${today}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setTodaySchedule(data)
            }
        }
        try {
            fetchData()
        } catch (e) {
            setTodaySchedule([])
        }
    }, [apiV1, token, today])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${apiV1}/doctor/schedules/?date=${changeDate}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setChangeableSchedule(data)
            }
        }
        try {
            fetchData()
        } catch (e) {
            setChangeableSchedule([])
        }
    }, [apiV1, token, changeDate])

    return (
        <div className={classes.schedule}>
            <div>
                <Sidebar />
            </div>
            <div>
                <div className={classes.section}>
                    <ScheduleForm apiV1={apiV1} token={token} chambers={chambers} />
                    <ScheduleList todaySchedule={todaySchedule} />
                </div>

                <div>
                    <ScheduleListDate
                        changeableSchedule={changeableSchedule}
                        calender={calender}
                        setCalender={setCalender}
                    />
                </div>
            </div>
        </div>
    )
}
