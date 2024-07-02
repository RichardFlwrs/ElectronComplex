import { Form, Table } from 'react-bootstrap'

export default function CentrosDespachoTable() {
   return (
      <div>
         <h6 className="cardTitle my-3">Centros de despacho</h6>

         <div className='scroll-style' style={{ maxHeight: 300, overflowY: 'scroll' }}>
            <Table responsive>
               <thead>
                  <tr>
                     <th>ESTADO</th>
                     <th>NOMBRE</th>
                     <th>TIPO</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {Array.from({ length: 5 }).map((_, index) => (<tr key={index}>
                     <td style={{ paddingLeft: 20 }}>Disponible</td>
                     <td>Sincronizador de serivor</td>
                     <td>Admin</td>
                     <td>
                        <Form.Check
                           type='checkbox'
                           defaultChecked={false}

                        />
                     </td>
                  </tr>))}
               </tbody>
            </Table>
         </div>
      </div>
   )
}
