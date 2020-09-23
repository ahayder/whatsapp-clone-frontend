import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import { SearchOutlined } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import SidebarChat from './SidebarChat'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/103966344_10216101350039593_8552848949602936127_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeHTNClY9hxd_Z4Byt6bpaR97-OIby_72Vfv44hvL_vZV2tfeFbrqYHIjE_q1XZtnlk&_nc_ohc=h05jFHz0FgIAX9cgTv5&_nc_ht=scontent.fdac22-1.fna&oh=b69e2e59d185bc0715e15f57287cd7f6&oe=5F7A4E95" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat"
            type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
