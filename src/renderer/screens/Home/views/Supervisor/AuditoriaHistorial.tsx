import { faChevronLeft, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import IconElement from 'renderer/components/IconElement/IconElement';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox';

export default function AuditoriaHistorial() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='v-center-normal gap-1'>
                <Button
                    variant='link'
                    className='w-auto'
                    style={{ paddingRight: 1 }}
                    onClick={() => navigate("/home/supervisor")}
                >
                    {"< Supervisor"}
                </Button>
                <p>/ Auditoria / Historial</p>
            </div>

            <CardBox>
                <div className='v-center-end'>
                    <Button onClick={() => null} variant="link" className='v-center'>
                        <IconElement icon={faCloud} />
                        Excel
                    </Button>
                    <Button onClick={() => null} variant="link" className='v-center'>
                        <IconElement icon={faCloud} />
                        PDF
                    </Button>
                    <Button onClick={() => null} variant="link" className='v-center'>
                        <IconElement icon={faCloud} />
                        CSV
                    </Button>
                </div>

                <Table responsive className='text-left'>
                    <thead>
                        <tr>
                            {["FECHA", "HORA", "ACTIVIDAD"].map((title: any, index: number) => (
                                <th key={index}>{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        {Array.from({ length: 3 }).map((_, index) => (<tr key={index}>
                            <td style={{ width: '20%' }}>02/05/2024</td>
                            <td style={{ width: '20%' }}>11.10hs</td>
                            <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </td>
                        </tr>))}
                    </tbody>
                </Table>


            </CardBox>

            <nav className='mt-3 t-paginator v-center-end gap-2'>
                <Button variant='flat' className='v-center w-auto p-2'>
                    <IconElement icon={faChevronLeft} />
                </Button>

                <Button variant='primary' className='v-center'>
                    1
                </Button>

                <Button variant='light' className='v-center'>
                    2
                </Button>

                <Button variant='flat' className='v-center w-auto p-2'>
                    <IconElement icon={faChevronRight} />
                </Button>
            </nav>
        </div>
    )
}
