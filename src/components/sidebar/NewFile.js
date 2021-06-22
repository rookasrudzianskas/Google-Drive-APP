import React, {useState} from 'react';
import {AddOutlined} from "@material-ui/icons";
import "../../styles/NewFile.css";
import {storage, db} from "../../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import firebase from "firebase";


function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const NewFile = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        // this is starting the process in here
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () => {
        setUploading(true);

        storage.ref(`files/${files.name}`).put(files).then(snapshot => {
            console.log(snapshot);

            storage.ref('files').child(file.name).getDownloadURL().then(url => {
                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    // size is this one
                    size: snapshot._delegate.bytesTransferred,
                })

                setUploading(false);
                setOpen(false);
                setFile(null);
            })
        })
    }


    return (
        <div className="newFile">
            <div className="newFile__container" onClick={handleOpen}>
            {/*    plus icon    */}
                <AddOutlined />
                <p>New</p>
            </div>

            {/* modal shit going on in here*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                            <>
                                <input type="file" onChange={handleChange} />
                                <button onClick={handleUpload}>Upload</button>
                            </>
                        )
                    }
                </div>
            </Modal>
        </div>
    );
};

export default NewFile;
