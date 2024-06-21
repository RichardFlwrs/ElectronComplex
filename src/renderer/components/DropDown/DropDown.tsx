import React, { PropsWithChildren, useState } from 'react'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

type Button = {
    dropdownParent: any,
    parentId?: string,
    headerTitle?: string,
    withCloseBtn?: boolean,
    classContainer?: string,
    ddOption?: {
        top?: number,
        right?: number,
        width?: string | number
    }
} & PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

export default function DropDown(P: Button) {
    const [listOpen, setlistOpen] = useState(false)
    const PARENT_ID = P.parentId || 'dd-parent-button'

    const toggleListOpen = () => {
        setlistOpen(!listOpen)
        setTimeout(() => {
            if (!listOpen)
                document.getElementById('dd-close-btn')?.focus()
            else
                document.getElementById(PARENT_ID)?.focus()
        }, 100);
    }

    const combinedClassNames = ['v-center', P.className].join(' ')
    const withHeader = P.headerTitle || P.withCloseBtn
    const ddPosition = {
        top: P.ddOption?.top || 0,
        right: P.ddOption?.right || 0,
        width: P.ddOption?.width || '12rem',
    }

    const CloseButton = (
        <Button
            variant='flat'
            className='v-center w-auto'
            onClick={toggleListOpen}
            id='dd-close-btn'
        >
            <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
    )

    return (
        <div className={`position-relative ${P.classContainer}`}>
            <Button
                variant='flat'
                className={combinedClassNames}
                onClick={toggleListOpen}
                id={PARENT_ID}
            >
                {P.dropdownParent}
            </Button>

            {!listOpen ? null : <div className='drop-down-card' style={ddPosition}>
                {!withHeader ? null : <div className='v-center-between dd-header'>
                    <p className=''>{P.headerTitle}</p>
                    {P.withCloseBtn ? CloseButton : null}
                </div>}
                {P.children}
            </div>}
        </div>
    )
}