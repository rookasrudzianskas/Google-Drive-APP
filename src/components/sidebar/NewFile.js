import React from 'react';
import {AddOutlined} from "@material-ui/icons";
import "../../styles/NewFile.css";

const NewFile = () => {
    return (
        <div className="newFile">
            <div className="newFile__container">
            {/*    plus icon    */}
                <AddOutlined />
                <p>New</p>
            </div>
        </div>
    );
};

export default NewFile;
