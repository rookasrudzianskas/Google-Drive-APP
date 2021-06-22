import React, {useEffect, useState} from 'react';
import {db} from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
const FilesView = () => {

    const [files, setFiles] = useState([]);

    // we get all the data here
    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
              id: doc.id,
              item: doc.data(),
            })))
        })
    }, []);


    return (
        <div className="fileView">
            <div className="fileView__row">
            {/*    file cards */}
            </div>

            <div className="filesView__titles">
                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>

                <div className="fileView__titles--right">
                    <p>Last modified</p>
                    <p>Files size</p>
                </div>
            </div>


        {/*    file items go in here*/}

            {
                files.map(({id, item}) => (
                    <FileItem key={id} id={id} caption={item.caption} size={item.size} timestamp={item.timestamp} fileUrl={item.fileUrl} />
                ))
            }
        </div>
    );
}

export default FilesView;
