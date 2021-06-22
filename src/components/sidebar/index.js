import React from 'react';
import NewFile from "./NewFile";
import {
    DeleteOutlined,
    ImportantDevices,
    InsertDriveFileOutlined,
    PeopleAltOutlined,
    QueryBuilderOutlined,
    StarBorderOutlined, StorageOutlined
} from "@material-ui/icons";
import SidebarItem from "./SidebarItem";
import "../../styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NewFile />

            <div className="sidebar__itemsContainer">
                <SidebarItem arrow Icon={(<InsertDriveFileOutlined />)} label={'My Drive'} />
                <SidebarItem arrow Icon={(<ImportantDevices />)} label={'Computers'} />
                <SidebarItem Icon={(<PeopleAltOutlined />)} label={'Shared with me'} />
                <SidebarItem Icon={(<QueryBuilderOutlined />)} label={'Recent'} />
                <SidebarItem Icon={(<StarBorderOutlined />)} label={'Starred'} />
                <SidebarItem Icon={(<DeleteOutlined />)} label={'Bin'} />

                <hr/>

                <SidebarItem Icon={(<StorageOutlined />)} label={'Storage'} />



            </div>
        </div>
    );
};

export default Sidebar;
