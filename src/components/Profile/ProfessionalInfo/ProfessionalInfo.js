import classes from './ProfessionalInfo.module.css'

const ProfessionalInfo = () => {
    return (
        <>
            <div className={classes.professionalInfo}>
                <div className={classes.Category}>
                    <div>
                        <h2>Work place</h2>
                        <ul>
                            <li>
                                <div>
                                    <h3> Dhaka Medical College</h3>
                                    <p>&#160; &#160; &#160; &#160;Lecturer</p>
                                    <p>&#160; &#160; &#160; &#160;2015-2019</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h3> Healtnx Medical College</h3>
                                    <p>&#160; &#160; &#160; &#160;Asst. Professor</p>
                                    <p>&#160; &#160; &#160; &#160;2020-22</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.Category}>
                    <div>
                        <h2>Academic</h2>
                        <ul>
                            <li>
                                <div>
                                    <h3> Dhaka Medical College</h3>
                                    <p>&#160; &#160; &#160; &#160;MBBS</p>
                                    <p>&#160; &#160; &#160; &#160;Class of 2010</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h3> Healtnx Medical College</h3>
                                    <p>&#160; &#160; &#160; &#160;FCPS</p>
                                    <p>&#160; &#160; &#160; &#160;Class of 2014</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfessionalInfo
