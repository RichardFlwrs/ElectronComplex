import { useEffect, useState } from "react"
import LogoMenu from "./components/LogoMenu"
import UserStatus from "./components/UserStatus"
import { IMenuItem, MENU } from "renderer/store/menuList"
import MenuItem from "./components/MenuItem"
import { addSlideStyle, removeCloseStyle, removeSlideStyle } from "renderer/utils/SlideAnimation"

const checkActiveItem = (array: IMenuItem[], selected: string) => {
   return array.map((_item) => {
      _item.active = _item.name === 'Presencia'
      if (_item.subMenus) _item.subMenus = checkActiveItem(_item.subMenus, selected)
      return _item
   })
}


export default function SideMenu() {
   const [menuOpen, setmenuOpen] = useState(true)
   const [menuActive, setmenuActive] = useState<IMenuItem[]>([])

   const toggleMenuOpen = () => {
      setmenuOpen(!menuOpen)
      if (menuOpen) {
         removeCloseStyle()
         addSlideStyle('menu-separator')
         document.getElementById('userStatus')?.classList.add('justify-content-between')
      } else {
         removeSlideStyle('menu-separator')
      }
   }

   useEffect(() => {
      setmenuActive(checkActiveItem(MENU, 'Presencia'))
   }, [])

   return (
      <div id="main-side-menu" className='sideMenu'>
         {/* Logo */}
         <LogoMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />

         {/* Status */}
         <UserStatus menuOpen={menuOpen} />

         {/* Menu list */}
         <nav>
            {menuActive.map((item, index) => <MenuItem
               key={index}
               menuItem={item}
               menuOpen={menuOpen}
            />)}
         </nav>
         <div
            className={'menuFooter'}
            style={{ display: menuOpen ? 'block' : 'none' }}
         >
            <span style={{ fontSize: 10 }}>© 2024 POWERED BY TELEFONICA</span>
         </div>
      </div>
   )
}