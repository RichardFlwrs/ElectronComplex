import { IconDefinition, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.sass'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { MyIcon } from 'renderer/store/icons.index'
import IconElement from '../IconElement/IconElement'

type TextInputProps = {
   type?: React.HTMLInputTypeAttribute | undefined
   placeholder?: string
   value?: string
   onChange?: string
   icon?: IconDefinition | MyIcon
   wrapperclassname?: string
   max?: number
   maxLength?: number
   inputstyle?: React.CSSProperties | undefined
} & PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>

function focusInputOnClick(_ref: any, fn: () => void) {
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (_ref.current && _ref.current.contains(event.target)) {
            fn();
         }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [_ref]);
}

export default function TextInput(P: TextInputProps) {
   const combinedClassNames = [styles.myInputWrapper, P.wrapperclassname].join(' ')
   const wrapperRef = useRef(null);
   const inputRef = useRef(null);
   focusInputOnClick(wrapperRef, () => {
      if (inputRef.current) {
         const _input = inputRef.current as HTMLInputElement
         setTimeout(() => { _input.focus() }, 25);
      }
   })

   return (
      <div {...P} className={combinedClassNames} ref={wrapperRef}>
         {!P.icon ? null : <IconElement
            icon={P.icon}
            wrapperClassName={styles.myInputIcon}
         />}

         <input
            ref={inputRef}
            tabIndex={P.tabIndex || 0}
            max={P.max}
            maxLength={P.maxLength}
            style={P.inputstyle}
            className={styles.myInput}
            type={P.type || "text"}
            placeholder={P.placeholder}
         />
      </div>
   )
}
