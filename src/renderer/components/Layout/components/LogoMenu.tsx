import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Button } from "renderer/components/Button/Button"
import IconElement from "renderer/components/IconElement/IconElement"
import LineSeparator from "renderer/components/LineSeparator/LineSeparator"
import MyImage from "resources/public/logo.png"


export default function LogoMenu({ menuOpen, toggleMenuOpen, ref }: any) {
   return (
      <div className="logo-block">
         <div className='v-center my-3'>
            <div className="v-center" style={{ flex: 1 }}>
               <img
                  src={MyImage}
                  alt=""
                  width={menuOpen ? 80 : 50}
                  height={menuOpen ? 80 : 50}
               />
            </div>

            <div ref={ref}>
               <Button onClick={toggleMenuOpen} variant='icon' className="no-shadows">
                  <IconElement
                     style={{ padding: 12 }}
                     icon={menuOpen ? faChevronLeft : faChevronRight}
                  />
               </Button>
            </div>
         </div>

         <LineSeparator />
      </div>
   )
}
