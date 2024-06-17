import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.sass'
import { PropsWithChildren } from 'react'
import { Form } from 'react-bootstrap'

type TextInputProps = {
   type?: React.HTMLInputTypeAttribute | undefined
   placeholder?: string
   value?: string
   onChange?: string
   icon?: IconDefinition
   wrapperClassName?: string
} & PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>



export default function TextInput(P: TextInputProps) {
   const combinedClassNames = [styles.myInputWrapper, P.wrapperClassName].join(' ')

   return (
      <div className={combinedClassNames} {...P}>
         {P.icon ? <FontAwesomeIcon className={styles.myInputIcon} icon={P.icon} /> : null}

         <input
            tabIndex={P.tabIndex || 1}
            className={styles.myInput}
            type={P.type || "text"}
            placeholder={P.placeholder}
         />
      </div>
   )
}
