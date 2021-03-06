import React from 'react';
import {AppsOutlined, ExpandMore, HelpOutlined, SearchOutlined, SettingsOutlined} from "@material-ui/icons";
import "../../styles/Header.css";

const Header = ({userPhoto}) => {
    return (

    <div className='header'>
        <div className="header__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" alt="Google Drive" />
            <span>Drive</span>
        </div>
        <div className="header__searchContainer">
            <div className="header__searchBar">
                <SearchOutlined />
                <input type="text" placeholder='Search in Drive' />
                <ExpandMore />
            </div>
        </div>
        <div className="header__icons">
                <span>
                       <HelpOutlined />
                            <SettingsOutlined />
                </span>
            <AppsOutlined />
            <img src={userPhoto} alt="User Photo"/>
        </div>
    </div>
    );
};

export default Header;
