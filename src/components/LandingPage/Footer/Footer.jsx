import React from 'react'
import Love from '../../../assets/img/LOVE.png'
import footerImg from '../../../assets/img/footer.png'
import fb from '../../../assets/img/social/fb.png'
import insta from '../../../assets/img/social/insta.png'
import yt from '../../../assets/img/social/yt.png'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <img src={Love} className={classes.loveImg} alt="" />
            <img src={footerImg} className={classes.footerImg1} alt="" />
            <div>
                <p>Smart Doctor Solution</p>
                <div>
                    <a target="__blank" href="https://www.facebook.com/Healthx.BD/">
                        <img src={fb} alt="" />
                    </a>
                    <a target="__blank" href="https://instagram.com/healthx.bd?igshid=YmMyMTA2M2Y=">
                        <img src={insta} alt="" />
                    </a>
                    <a target="__blank" href="https://www.youtube.com/@healthxbd">
                        <img src={yt} alt="" />
                    </a>
                </div>
                <span>© HEALTHX VENTURES LTD. All rights reserved.</span>
            </div>
        </div>
    )
}
