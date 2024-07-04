import { faChevronLeft, faChevronRight, faCloud } from '@fortawesome/free-solid-svg-icons'
import IconElement from 'renderer/components/IconElement/IconElement'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'
import { iconDescargar } from 'renderer/store/icons.index'

export default function EstadoAgencia() {
    const navigate = useNavigate()

    const DATA = [
        {
            id: 1,
            code: 'VIE',
            agency: 'Viedma',
            status: 'Conectada',
            lastConection: '02/05/2024 - 12:32HS',
            timelapse: '',
        },
        {
            id: 2,
            code: 'BAR',
            agency: 'Bariloche',
            status: 'Desconectada',
            lastConection: '18/04/2024 - 10:30HS',
            timelapse: '21hs',
        },
    ]

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
                <p>/ Estado de Agencias</p>
            </div>

            <CardBox className='mb-3'>
                <div className='v-center-between'>
                    <h3 className='cardTitle'>Estado de Agencias</h3>
                    <div className='v-center-end'>
                        <Button onClick={() => null} variant="link" className='v-center gap-1'>
                            <IconElement icon={iconDescargar} />
                            Excel
                        </Button>
                        <Button onClick={() => null} variant="link" className='v-center gap-1'>
                            <IconElement icon={iconDescargar} />
                            PDF
                        </Button>
                        <Button onClick={() => null} variant="link" className='v-center gap-1'>
                            <IconElement icon={iconDescargar} />
                            CSV
                        </Button>
                    </div>
                </div>

                <Table responsive className='text-left'>
                    <thead>
                        <tr>
                            {[
                                "ID",
                                "CÓDIGO",
                                "AGENCIA",
                                "ESTADO",
                                "ÚLTIMO AVISO DE CONEXIÓN",
                                "TIEMPO",
                            ].map((title: any, index: number) => (
                                <th key={index}>{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        {DATA.map((data, index) => (<tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.code}</td>
                            <td>{data.agency}</td>
                            <td>
                                <div className={`box-status-${data.status}`}>
                                    {data.status}
                                </div>
                            </td>
                            <td>{data.lastConection}</td>
                            <td>{data.timelapse}</td>
                        </tr>))}
                    </tbody>
                </Table>


            </CardBox>

            <nav className='t-paginator v-center-end gap-2'>
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
