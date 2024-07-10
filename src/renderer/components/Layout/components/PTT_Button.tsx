import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components/Button/Button'
import DropDown from 'renderer/components/DropDown/DropDown'
import IconElement from 'renderer/components/IconElement/IconElement'
import { iconPaperSearching } from 'renderer/store/icons.index'

export default function PTT_Button() {
    const navigate = useNavigate()

    return (
        // <Button variant='light' className='v-center round'>
        //     <IconElement icon={faMicrophoneAlt} style={{fontSize: 20}} />
        //     <p>PTT</p>
        // </Button>

        <DropDown
            classContainer='nav-dropdown'
            buttonVariant='light'
            className='round'
            dropdownParent={<>
                <IconElement icon={faMicrophoneAlt} style={{ fontSize: 20 }} />
                <p>PTT</p>
            </>}
            ddOption={{ width: '16rem' }}
        >
            <div className='py-3'>
                <div>
                    {Array.from({ length: 15 }).map(
                        (_, idx) => <div key={idx} className='list-tem'>
                            <Form.Check id={`lorem ipsum${idx}`} />
                            <label htmlFor={`lorem ipsum${idx}`}>lorem ipsum</label>
                        </div>
                    )}
                </div>

                <div className='mt-4'>
                    <Button onClick={() => navigate('/home/ptt')} variant='link' className='w-auto py-1 m-0'>
                        Ver todas
                    </Button>
                </div>
            </div>
        </DropDown>
    )
}
