import { faCamera, faFileUpload, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext, useRef } from 'react'
import { Auth } from '../../../allContext'
import classes from './ProfilePictureUpload.module.css'

const ProfilePictreUpload = ({ msg, setMsg }) => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [selectedImg, setSelectedImg] = useState()
    const [uploadForm, setUploadForm] = useState(false)
    const [preview, setPreview] = useState()

    const inputRef = useRef()
    const triggerFileSelectPopup = () => {
        inputRef.current.click()
    }

    const popup = () => {
        setUploadForm(!uploadForm)
    }

    useEffect(() => {
        if (!selectedImg) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedImg)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImg])

    const onSelectImg = (e) => {
        if (!e.target.files || e.target.length === 0) {
            setSelectedImg(undefined)
            return
        }
        setSelectedImg(e.target.files[0])
    }

    // API Fetch for image Upload
    const upload = async (e) => {
        e.preventDefault()
        const imgData = new FormData()
        imgData.append('file', selectedImg)

        let picUpload = await fetch(`${apiV1}/profile-pic`, {
            headers: {
                Accept: 'appllication/json',
                type: 'image/jpeg',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: imgData,
        })

        const pp = await picUpload.json()

        if (picUpload.ok) {
            setMsg([...msg, 'Profile Pic Updated'])
            setUploadForm(false)
            setPreview(undefined)
            setSelectedImg(undefined)
        }
    }
    return (
        <div>
            <div className={classes.changePP}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faCamera} />
                </button>
            </div>

            {uploadForm && (
                <div className={classes.ImgUploader}>
                    <div onClick={uploadForm}></div>
                    <div className={classes.container}>
                        <div className={classes.header}>
                            <div className={classes.Title}> Upload Profile Picture</div>
                            <button className={classes.Close} onClick={popup}>
                                X
                            </button>
                        </div>

                        <div className={classes.UploadForm}>
                            <div className={classes.SelectedImg}>
                                {selectedImg && (
                                    <div>
                                        <div className={classes.PreviewContainer}>
                                            <img src={preview} className={classes.ImgPreview} alt="proPic" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={classes.Control}>
                                <div>
                                    <input
                                        type="file"
                                        onChange={onSelectImg}
                                        accept="image/*"
                                        ref={inputRef}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                <button onClick={triggerFileSelectPopup} className={classes.Select}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span>Select</span>
                                </button>
                                <button className={classes.Upload} onClick={upload}>
                                    <FontAwesomeIcon icon={faUpload} />
                                    <span> Upload</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProfilePictreUpload
