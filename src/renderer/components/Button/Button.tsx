import React, { PropsWithChildren } from 'react'

import styles from './styles.module.sass'
import { Button as BtnBootstrap } from 'react-bootstrap'

type Variant = 'primary' | 'light' | 'link' | 'flat'

type Button = {
  variant?: Variant
} & PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

export function Button(P: Button) {
  const combinedClassNames = [getStyleVariant(P.variant), P.className].join(' ')

  if (P.variant === 'link') return (
    <BtnBootstrap
      variant="link"
      type={P.type || "button"}
      className={'w-100 mb-2'}
      {...P}
    >
      {P.children}
    </BtnBootstrap>
  )


  return (
    <button {...P} type={P.type || "button"} className={combinedClassNames}>
      {P.children}
    </button>
  )
}


const getStyleVariant = (type: Variant | undefined): string => {
  switch (type) {
    case 'light':
      return styles.buttonLight

    case 'flat':
      return styles.buttonFlat

    default:
      return styles.button
  }

}