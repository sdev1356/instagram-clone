import React from 'react';
import {ReactComponent as Home }from '../images/home.svg'
import {ReactComponent as Inbox}from '../images/inbox.svg'
import {ReactComponent as Explore}from '../images/explore.svg'
import {ReactComponent as Notifications}from '../images/notifications.svg'
import image from "../images/devInstagram.jpg"
import ProfileIcon from "./ProfileIcon"

import "../styles/Menu.scss"
function Menu(){
return (
    <div className="menu">
    Menu
    <Home classNmae="icon"/>
    <Inbox classNmae="icon"/>
    <Explore classNmae="icon"/>
    <Notifications classNmae="icon"/>
    <ProfileIcon iconSize="small" image={image} />
    </div>
   
)
}
export default Menu