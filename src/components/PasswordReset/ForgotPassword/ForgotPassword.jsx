import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo/logo.png'
import Pic from '../../../assets/password/pass.png'
import classes from './ForgotPassword.module.css'

export default function ForgotPassword() {
    return (
        <div className={classes.wraper}>
            <Link to="/login">
                <img src={Logo} alt="" />
            </Link>
            <div className={classes.box}>
                <div>
                    <img src={Pic} alt="" />
                </div>
                <div>
                    <h2>
                        Forgot <br />
                        Password?
                    </h2>
                    <p>
                        Enter the mobile number associated with your account!<span>*</span>
                    </p>

                    <form>
                        <label>+88</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            minLength={11}
                            maxLength={11}
                            pattern="[0][1][0-9]{9}"
                        />
                        <button type="submit">Next</button>
                    </form>

                    <span>OTP has been sent to your number!</span>

                    <div className={classes.show}>
                        <p>OTP</p>
                        <div>
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                            <input type="tel" name="" id="" maxLength={1} minLength={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
