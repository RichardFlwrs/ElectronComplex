import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Button as BtnBootstrap } from 'react-bootstrap'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import ClockReady from "resources/public/config/tiempo-carta-01.svg"
import ClockOnProcess from "resources/public/config/tiempo-carta-02.svg"
import ClockError from "resources/public/config/tiempo-carta-03.svg"
import "./stopwatch.css";
import StopwatchBtn from 'renderer/components/StopwatchBtn/StopwatchBtn'

export default function PttCatalog() {
    const [recordsArray, setRecordsArray] = useState<any[]>([])

    const addNewRecord = (record: any) => {
        const ms = record.split(":")[3]     // milisenconds

        if (parseInt(ms) > 10)
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

                <PTT_Action onTimerEnds={(record: any) => { addNewRecord(record) }} />

                <div className='mt-3 records-list'>
                    {recordsArray.map((_r, idx) => <div key={idx} className='v-center-normal gap-2'>
                        <span>({idx < 9 ? ' ' : ''}{idx + 1})</span> <p>{_r}</p>
                    </div>)}
                </div>
            </CardBox>
        </div>
    )
}

const PTT_Action = (P: { onTimerEnds: Function }) => {
    const initTimer = "0:00:00:00"
    const initColor = "green"
    const [record, setRecord] = useState(initTimer)
    const [colorTxt, setColorTxt] = useState(initColor)

    const running = (data: string) => {
        setRecord(data);
        setColorTxt("red");
    }
    const whenTimerEnds = (data: any) => {
        // send timer to parent
        P.onTimerEnds(data)

        // re-setting timer
        setRecord(initTimer)
        setColorTxt(initColor)
    }

    return (
        <div className='v-center-normal gap-2 mt-3'>
            <StopwatchBtn whileRunning={running} onFinish={whenTimerEnds}>
                PTT
            </StopwatchBtn>
            <p style={{ color: colorTxt }}>{record}</p>
        </div>
    )
}

