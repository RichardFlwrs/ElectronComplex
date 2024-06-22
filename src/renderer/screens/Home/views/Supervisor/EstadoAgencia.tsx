import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'renderer/components'
import CardBox from 'renderer/components/CardBox/CardBox'

export default function EstadoAgencia() {
    return (
        <div>
            <CardBox>
                <div className='v-center-between'>
                    <h3 className='cardTitle'>Estado de Agencias</h3>
                    <div className='v-center-end'>
                        <Button onClick={() => null} variant="link" className='v-center'>
                            <FontAwesomeIcon icon={faCloud} />
                            Excel
                        </Button>
                        <Button onClick={() => null} variant="link" className='v-center'>
                            <FontAwesomeIcon icon={faCloud} />
                            PDF
                        </Button>
                        <Button onClick={() => null} variant="link" className='v-center'>
                            <FontAwesomeIcon icon={faCloud} />
                            CSV
                        </Button>
                    </div>
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
        </div>
    )
}
