import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow fontSize="large" Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow fontSize="large" Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow title="Friends" fontSize="large" Icon={PeopleIcon}/>
            <SidebarRow fontSize="large" Icon={ChatIcon} title="Messenger"/>
            <SidebarRow fontSize="large" Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow fontSize="large" Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow fontSize="large" Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
