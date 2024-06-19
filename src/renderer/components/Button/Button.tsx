import React, { PropsWithChildren, useRef } from 'react'

import styles from './styles.module.sass'
import { Button as BtnBootstrap } from 'react-bootstrap'
import { useClickAnimation } from 'renderer/utils/ClickAnimation'

type Variant = 'primary' | 'light' | 'link' | 'flat' | 'icon'

type Button = {
  variant?: Variant
  noShadow?: boolean
} & PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

export function Button(P: Button) {
  const buttonRef = useRef<any>();
  const combinedClassNames = [getStyleVariant(P.variant), P.className].join(' ')

  useClickAnimation(buttonRef, {
    color: "gray",
    size: 15,
    duration: 600,
    effectName: "ripple"
  });

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

  if (P.noShadow) combinedClassNames.concat(' no-shadows')


  return (
    <button
      {...P}
      type={P.type || "button"}
      className={combinedClassNames}
      ref={buttonRef}
    >
      {P.children}
    </button>
  )
}


const getStyleVariant = (type: Variant | undefined): string => {
  switch (type) {
    case 'light':
      return styles.buttonLight

    case 'icon':
      return styles.buttonIcon

    case 'flat':
      return styles.buttonFlat

    default:
      return styles.button
  }

}