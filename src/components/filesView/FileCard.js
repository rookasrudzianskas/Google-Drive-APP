import React from 'react';
import {InsertDriveFileOutlined} from "@material-ui/icons";
import "../../styles/FileCard.css";

const FileCard = ({name}) => {
    return (
        <div className="fileCard">
            <div className="fileCard--top">
                <InsertDriveFileOutlined style={{fontsize: 130}} />
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default FileCard;
