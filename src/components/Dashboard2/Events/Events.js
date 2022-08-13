import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Events.module.css'

export default function Events() {
    const date = new Date()
    const today = date.toString()

    return (
        <div className={classes.calenderWrapper}>
            <section className={classes.todayBox}>
                <span className={classes.breadcrumb}>Today</span>
                <h3 className={classes.dateTitle}>
                    {today.slice(4, 10)}, {today.slice(11, 15)}
                </h3>
                <div className={classes.plusIcon}>
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
            </section>
        </div>
    )
}
