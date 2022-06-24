import React from 'react'
import "./_header.scss";
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps} from "react-icons/md";



export default function Header() {
  return (
    <div className='border  header'>
<FaBars className="header__menu" size={26}/>
<img src="https://pngimg.com/uploads/youtube/youtube_PNG102354.png"
alt=''
className='header__logo'/>
<form>
  <input type="text" placeholder='Riafy Search'/>
  <button type='submit'>
    <AiOutlineSearch size={22}/>
  </button>
</form>
<div className='headder__icons' ></div>
<MdNotifications size={28}/>
<MdApps size={28}/>
<img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png'
alt='avatar'/>
    </div>
    
  )
}
