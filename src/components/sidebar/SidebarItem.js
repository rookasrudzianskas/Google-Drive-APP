import React from 'react';
import {ArrowRightOutlined} from "@material-ui/icons";
import "../../styles/SidebarItem.css";

const SidebarItem = ({arrow, Icon, label}) => {
    return (
        <div className="sidebarItem">
            <div className="sidebarItem__arrow">
                {arrow && (<ArrowRightOutlined />)}
            </div>

            <div className="sidebarItem__main">
                {Icon}
                <p>{label}</p>
            </div>
        </div>
    );
};

export default SidebarItem;
