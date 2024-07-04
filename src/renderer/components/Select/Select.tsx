import React, { PropsWithChildren } from 'react'
import { Form } from 'react-bootstrap'

import styles from './styles.module.sass'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import IconElement from 'renderer/components/IconElement/IconElement'

type SelectProps = {
   placeholder?: string
   value?: string
   onChange?: string
   icon?: IconDefinition
   wrapperClassName?: string
} & PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>

export default function Select(P: SelectProps) {
   const combinedClassNames = [styles.selectWrapper, P.wrapperClassName].join(' ')

   return (
      <div className={combinedClassNames}>
         {P.icon ? <IconElement className={styles.myInputIcon} icon={P.icon} /> : null}


         <select className={styles.formSelect} aria-label="Default select example">
            <option>Agencia</option>
            <option value="1">CD VIEDMA</option>
            <option value="2">CD BARILOCHE</option>
            <option value="3">CD GENERAL ROCA</option>
         </select>
      </div>
   )
}
