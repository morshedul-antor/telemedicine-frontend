import React from 'react'
import Movie from '../../../assets/video/Healthx smart doctor animation v 08.mp4'
import classes from './Video.module.css'

export default function Video() {
    return (
        <div className={classes.video}>
            <video controls>
                <source src={Movie} type="video/mp4" />
            </video>
        </div>
    )
}
