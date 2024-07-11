import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Button as BtnBootstrap } from 'react-bootstrap'
import * as DomFunctions from "./DomFunctions";

type StopwatchButton = {
    onFinish: Function,
    whileRunning?: Function
} & PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

// https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
export default function StopwatchBtn(P: StopwatchButton) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const buttonRef = useRef(null)
    const [startTime, setStartTime] = useState(new Date);
    const TIMER_ID = "timer-dom"

    setTimeonPush(buttonRef,
        () => {
            setStartTime(new Date())    // start time Date, in case that is needed 
            setIsRunning(true)
        },
        () => {
            // Since this function is inside on Click Event, we need to get the value from DOM attributes
            const isR = DomFunctions.getBooleanFromDOM(TIMER_ID)

            if (isR) {
                setIsRunning(false)
                P.onFinish(getTimerResult())    // send timer to parent

                // Set time when ending
                let currentTime = new Date().getTime();
                let elapsedTime = currentTime - startTime.getTime()
                let seconds = Math.floor(elapsedTime / 1000) % 60;

                setTimeout(() => { reset() }, 100);     // reset stopwatch
            }
        },
    )

    const getTimerResult = (_time?: number) => {
        const t = _time ? _time : DomFunctions.getValueFromDOM(TIMER_ID)

        const hours = Math.floor(t / 360000);
        const minutes = Math.floor((t % 360000) / 6000);
        const minutes_format = minutes.toString().padStart(2, "0")
        const seconds = Math.floor((t % 6000) / 100);
        const seconds_format = seconds.toString().padStart(2, "0")
        const milliseconds = t % 100;
        const milliseconds_format = milliseconds.toString().padStart(2, "0")

        return `${hours}:${minutes_format}:${seconds_format}:${milliseconds_format}`
    }

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
        DomFunctions.printTimerOnDOM(TIMER_ID, 0, isRunning);

        const el = document.getElementById(TIMER_ID)
        if (el) {
            el.setAttribute("data-isRunning", isRunning.toString())
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timer;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 8);
            DomFunctions.printTimerOnDOM(TIMER_ID, time, isRunning)
            if (P.whileRunning) P.whileRunning(getTimerResult(time))
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Render
    return (
        <BtnBootstrap
            id={TIMER_ID}
            ref={buttonRef}
            variant='light'
            className={`card-btn px-5 ${P.className}`}
            style={P.style}
        >
            {P.children}
        </BtnBootstrap>
    )
}

/**
 * Sett all the listeners for the stopwatch functions
 * 
 * @param _ref Button reference
 * @param fn Function when the button is PRESS IN
 * @param end Function when the button is PRESS OUT
 */
function setTimeonPush(_ref: any, fn: () => void, end: () => void) {
    useEffect(() => {
        if (!_ref.current) return
        const mainButton = _ref.current as HTMLButtonElement

        const onClick = () => { fn() }
        const onStop = () => { end() }
        const onPress = (e: KeyboardEvent) => { e.key === "Enter" ? onClick() : null }
        const onUp = (e: KeyboardEvent) => { e.key === "Enter" ? onStop() : null }
        const handleClickOutside = (event: MouseEvent) => {
            if (_ref.current && !_ref.current.contains(event.target)) onStop()
        }

        // Add the event listener on mount
        mainButton.addEventListener("mousedown", onClick);
        mainButton.addEventListener("mouseup", onStop);
        mainButton.addEventListener("keydown", onPress);
        mainButton.addEventListener("keyup", onUp);
        document.addEventListener("mouseup", handleClickOutside);

        // Needed for referencing the ref in the return function
        const cleanupRef = mainButton;

        return () => {
            cleanupRef.removeEventListener("mousedown", onClick);
            cleanupRef.removeEventListener("mouseup", onStop);
            cleanupRef.removeEventListener("keydown", onPress);
            cleanupRef.removeEventListener("keyup", onUp);
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [_ref]);
}