import React, {useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext'
// import icons
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,  setIsOpen} = useContext(SidebarContext);
  return (
    <div>
      <div>header</div>
      <div onClick={ () =>{
        setIsOpen(!isOpen)
      }} >
        <BsBag className='text-2xl'/>
      </div>
    </div>
  )
};

export default Header;
