import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyIcon } from 'renderer/store/icons.index'

type Props = {
   icon: IconDefinition | MyIcon
   className?: string
   style?: React.CSSProperties | undefined
}

export default function IconElement(P: Props) {
   const isFontAwesome = (): boolean => {
      if (P.icon && (P.icon as IconDefinition).icon) return true
      return false
   }

   if (!P.icon) return <></>

   if (isFontAwesome()) return <FontAwesomeIcon
      className={P.className}
      icon={(P.icon as IconDefinition)}
      style={P.style}
   />

   const SVG = (P.icon) as string
   const alt_text = SVG.split('icons/')[1]
   return (
      <div>
         <img
            className={P.className}
            src={SVG}
            alt={alt_text}
         />
      </div>
   )
}
