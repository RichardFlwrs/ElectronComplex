import { useEffect, useRef, useState } from 'react'
import { Button as BtnBootstrap } from 'react-bootstrap'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import ClockReady from "resources/public/config/tiempo-carta-01.svg"
import ClockOnProcess from "resources/public/config/tiempo-carta-02.svg"
import ClockError from "resources/public/config/tiempo-carta-03.svg"
import "./stopwatch.css";

export default function PttCatalog() {
    const [recordsArray, setRecordsArray] = useState<any[]>([])

    const addNewRecord = (record: any) => {
        setRecordsArray(oldArray => [...oldArray, record])
    }

    return (
        <div>
            <CardBox>
                <div
                    style={{
                        backgroundColor: 'cyan',
                        height: 500,
                        borderRadius: 10,
                    }}
                    className='w-100'
                ></div>

                <Stopwatch onFinish={(record: any) => { addNewRecord(record) }} />

                <div className='mt-3 records-list'>
                    {recordsArray.map((_r, idx) => <div key={idx} className='v-center-normal gap-2'>
                        <span>({idx < 9 ? ' ' : ''}{idx + 1})</span> <p>{_r}</p>
                    </div>)}
                </div>
            </CardBox>
        </div>
    )
}

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

class RecordDuration {
    public time: number

    constructor(_time?: number) {
        this.time = _time ? _time : 0
    }

    get hours(): number {
        return Math.floor(this.time / 360000);
    }
}

// https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
const Stopwatch = (P: any) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const buttonRef = useRef(null)
    const [startTime, setStartTime] = useState(new Date);

    setTimeonPush(buttonRef,
        () => {
            setStartTime(new Date())
            setIsRunning(true)
        },
        () => {
            const isR = getBooleanFromDOM()
            if (isR) {
                setIsRunning(false)
                P?.onFinish(getTimerResult())
                setTimeout(() => { reset() }, 100);
            }
        },
    )

    const printTimerOnDOM = (_t: number) => {
        const el = document.getElementById('timer-dom')
        if (el) {
            el.setAttribute("data-timer", _t.toString())
            el.setAttribute("data-isRunning", isRunning.toString())
        }
    }

    const getValueFromDOM = (): number => {
        const el = document.getElementById('timer-dom')
        return el ? Number(el.getAttribute("data-timer")) : 0
    }

    const getBooleanFromDOM = () => {
        const el = document.getElementById('timer-dom')
        if (el) return el.getAttribute("data-isRunning") == 'true'
        return false
    }

    const getTimerResult = () => {
        const t = getValueFromDOM()

        const hours = Math.floor(t / 360000);
        const minutes = Math.floor((t % 360000) / 6000);
        const minutes_format = minutes.toString().padStart(2, "0")
        const seconds = Math.floor((t % 6000) / 100);
        const seconds_format = seconds.toString().padStart(2, "0")
        const milliseconds = t % 100;
        const milliseconds_format = milliseconds.toString().padStart(2, "0")

        return `${hours}:${minutes_format}:${seconds_format}:${milliseconds_format}`
    }

    useEffect(() => {
        let intervalId: NodeJS.Timer;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 8);
            printTimerOnDOM(time)
            // let currentTime = new Date().getTime();
            // let elapsedTime = currentTime - startTime.getTime()
            // let seconds = Math.floor(elapsedTime / 1000) % 60;
            // console.log(seconds);

        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // timer calculation
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
        printTimerOnDOM(0);

        const el = document.getElementById('timer-dom')
        if (el) {
            el.setAttribute("data-isRunning", isRunning.toString())
        }
    };

    return <div className='mt-3 v-center-normal gap-3'>
        <BtnBootstrap ref={buttonRef} variant='light' className='card-btn px-5'>
            PTT
        </BtnBootstrap>

        <div className='circle-number' style={{ width: 43, height: 43, background: 'lightgray' }}></div>
        <img onClick={() => console.log(startTime.getSeconds())} src={ClockReady} alt="" />
        <p className="" id='timer-dom'>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
        </p>
    </div>
};