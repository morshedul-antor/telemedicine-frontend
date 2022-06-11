import React from 'react'
import doc from '../../../assets/img/doc.png'
import ep from '../../../assets/img/ep.png'
import pat from '../../../assets/img/pat.png'
import classes from './ServiceBox.module.css'

export default function SeriveBox() {
    return (
        <div className={classes.serviceWrapper} id="service">
            <div className={classes.service}>
                <div className={classes.box}>
                    <p className={classes.number}>01</p>
                    <img className={classes.icon} src={doc} alt="" />
                    <p className={classes.title}>Smart Doctor</p>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                        veniam amet atque omnis ducimus error vitae.
                    </span>
                    <button>Discover More</button>
                </div>
                <div className={classes.box}>
                    <p className={classes.number}>02</p>
                    <img className={classes.icon} src={ep} alt="" />
                    <p className={classes.title}>E Prescription</p>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                        veniam amet atque omnis ducimus error vitae.
                    </span>
                    <button>Discover More</button>
                </div>
                <div className={classes.box}>
                    <p className={classes.number}>03</p>
                    <img className={classes.icon} src={pat} alt="" />
                    <p className={classes.title}>My Health Portal</p>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                        veniam amet atque omnis ducimus error vitae.
                    </span>
                    <button>Discover More</button>
                </div>
            </div>
        </div>
    )
}
