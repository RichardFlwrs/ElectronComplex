import React, { PropsWithChildren } from 'react'

import styles from './styles.module.sass'
import { Button as BtnBootstrap } from 'react-bootstrap'

type Variant = 'primary' | 'light' | 'link'

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
      Olvidaste tu contrasena?
    </BtnBootstrap>
  )

  return (
    <button type={P.type || "button"} className={combinedClassNames} {...P}>
      {P.children}
    </button>
  )
}


const getStyleVariant = (type: Variant | undefined): string => {
  switch (type) {
    case 'light':
      return styles.buttonLight

    default:
      return styles.button
  }

}