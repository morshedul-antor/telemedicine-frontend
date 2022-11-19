import '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { UserInfo } from '../../../allContext'
import classes from './Popup.module.css'

export default function Popup() {
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    return (
        <div className={classes.float}>
            <a href={`https://healthxbd.com/${userDetail.id}`}>
                <div className={classes.trigger}>
                    <FontAwesomeIcon icon={faStethoscope} />
                    {/* <img src={Doc} alt="" /> */}
                </div>
                <p>আমার প্রোফাইল</p>
            </a>
        </div>
    )
}
