import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" alt=""/>
                <span>Drive</span>
                </div>
                <div className="header__searchContainer">
                    <div className="header__searchContainer"></div>
                    <div className="header__icons"></div>

            </div>
        </div>
    );
};

export default Header;
