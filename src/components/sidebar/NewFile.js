import React from 'react';
import {AddOutlined} from "@material-ui/icons";

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
