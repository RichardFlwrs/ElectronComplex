import { useRef, useState } from "react"
import { Button } from "renderer/components/Button/Button"
import { IMenuItem } from "renderer/store/menuList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useSildeAnimation } from "renderer/utils/SlideAnimation"

type MenuItemProps = { menuItem: IMenuItem, menuOpen: boolean }

export default function MenuItem({ menuItem, menuOpen }: MenuItemProps) {
   const subMenus = menuItem.subMenus || []
   const [optionOpen, setoptionOpen] = useState(true)
   const slideRef = useRef<any>();
   const onClickRef = useRef<any>();

   const openMenuItem = () => {
      setoptionOpen(!optionOpen)
   }

   useSildeAnimation({
      eToSlide: slideRef,
      onClickRef: onClickRef,
   });

   // set active style
   const menuItemStyle = `menu-item v-center ${menuOpen ? 'justify-content-between' : ''}`
      .concat(menuItem.active ? ' active' : '')


   return (
      <div>
         {/* Title */}
         {!menuItem.title ? null : <div
            className={`title-section ${menuOpen ? '' : 'hide'}`}
            ref={subMenus.length ? onClickRef : null}
         >
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
         <div className='' ref={subMenus.length ? slideRef : null}>
            {subMenus.map((_item, index) => <MenuItem
               key={index}
               menuItem={_item}
               menuOpen={menuOpen}
            />)}

            {/* Item */}
            {!menuItem.name ? null : <div className={menuItemStyle}>
               {/* icon */}
               <div className="v-center" style={{ width: 28, height: 28 }}>
                  {!menuItem.icon ? null : <FontAwesomeIcon
                     style={{ transform: 'scale(1.3)' }}
                     icon={menuItem.icon}
                  />}
               </div>

               {/* name */}
               <div className={`px-4 ${menuOpen ? '' : 'hide'}`} style={{ flex: 1 }}>
                  <p>{menuItem.name}</p>
               </div>
            </div>}
         </div>
      </div>
   )
}
