import React from 'react'
import ProfileDetail from './Academic/ProfileDetail'
import Achievement from './Achievement/Achievement'
import Activity from './Activity/Activity'
import Curricular from './Curricular/Curricular'
import Membership from './Membership/Membership'
import Training from './Training/Training'
import Workplace from './Workplace/Workplace'

export default function About() {
    return (
        <div>
            <ProfileDetail />
            <br />
            <Workplace />
            <br />
            <Training />
            <br />
            <Membership />
            <br />
            <Achievement />
            <br />
            <Activity />
            <br />
            <Curricular />
        </div>
    )
}
