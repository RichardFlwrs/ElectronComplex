import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Button } from '../Button/Button'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import IconElement from '../IconElement/IconElement'

type Button = {
    dropdownParent: any,
    parentId?: string,
    headerTitle?: string,
    withCloseBtn?: boolean,
    classContainer?: string,
    ddOption?: {
        top?: string | number,
        right?: string | number,
        left?: string | number,
        width?: string | number
    }
} & PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

export default function DropDown(P: Button) {
    const [listOpen, setlistOpen] = useState(false)
    const [ddPosition, setddPosition] = useState({
        top: P.ddOption?.top || 0,
        right: P.ddOption?.right || 0,
        left: P.ddOption?.left || 0,
        width: P.ddOption?.width || '12rem',
    })
    const PARENT_ID = P.parentId || 'dd-parent-button'
    const wrapperRef = useRef(null);


    const toggleListOpen = () => {
        setlistOpen(!listOpen)
        setTimeout(() => {
            if (!listOpen) {
                document.getElementById('dd-close-btn')?.focus()
                // setConfiguration()
            }
            else
                document.getElementById(PARENT_ID)?.focus()
        }, 25);
    }

    const combinedClassNames = ['v-center', P.className].join(' ')
    const withHeader = P.headerTitle || P.withCloseBtn

    useOutsideAlerter(
        wrapperRef,
        () => {
            setlistOpen(false)
        }
    );

    const setConfiguration = () => {
        const el = document.getElementById(PARENT_ID)

        if (el) {
            setddPosition({
                top: P.ddOption?.top || el.offsetHeight,
                right: P.ddOption?.right || 0,
                left: P.ddOption?.left || 'auto',
                width: P.ddOption?.width || el.offsetWidth,
            })
        }
    }

    useEffect(() => {
        setConfiguration()
    }, [wrapperRef, listOpen])

    const CloseButton = (
        <Button
            variant='flat'
            className='v-center w-auto'
            onClick={toggleListOpen}
            id='dd-close-btn'
        >
            <IconElement icon={faTimesCircle} />
        </Button>
    )

    return (
        <div ref={wrapperRef} className={`position-relative ${P.classContainer}`}>
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

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(_ref: any, fn: () => void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event: MouseEvent) => {
            if (_ref.current && !_ref.current.contains(event.target)) {
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