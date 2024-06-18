import { useEffect, useState } from "react"
import { Button } from "renderer/components/Button/Button"
import { IMenuItem, MENU } from "renderer/store/menuList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

type MenuItemProps = { menuItem: IMenuItem, menuOpen: boolean }

export default function MenuItem({ menuItem, menuOpen }: MenuItemProps) {
   const subMenus = menuItem.subMenus || []
   const [optionOpen, setoptionOpen] = useState(true)
   const [menuListStyle, setmenuListStyle] = useState('menu-list')

   const openMenuItem = () => {
      setoptionOpen(!optionOpen)
   }

   // toggles the 'close' style
   useEffect(() => {
      setmenuListStyle('menu-list'.concat(optionOpen ? '' : ' close'))
      if (optionOpen) return

      // setTimeout(() => {
      //    setmenuListStyle('menu-list'.concat(optionOpen ? '' : ' close hide'))
      // }, 250);
   }, [optionOpen])

   // set active style
   const menuItemStyle = 'menu-item v-center justify-content-between'
      .concat(menuItem.active ? ' active' : '')


   return (
      <div>
         {/* Title */}
         {!menuItem.title || !menuOpen ? null : <div className="title-section">
            <Button
               onClick={openMenuItem}
               variant="flat"
               className="no-shadows p-2 v-center-between"
            >
               {menuItem.title}

               <FontAwesomeIcon icon={faChevronDown} />
            </Button>
         </div>}

         {/* Menu List */}
         <div className={subMenus.length ? menuListStyle : ''}>
            {subMenus.map((_item, index) => <MenuItem
               key={index}
               menuItem={_item}
               menuOpen={menuOpen}
            />)}

            {/* Item */}
            {!menuItem.name ? null : <div className={menuItemStyle}>
               {/* icon */}
               <div className="v-center" style={{ width: 30 }}>
                  {!menuItem.icon ? null : <FontAwesomeIcon
                     style={{ transform: 'scale(1.3)' }}
                     icon={menuItem.icon}
                  />}
               </div>

               {/* name */}
               {!menuOpen ? null : <div className="px-4" style={{ flex: 1 }}>
                  <p>{menuItem.name}</p>
               </div>}
            </div>}
         </div>
      </div>
   )
}
