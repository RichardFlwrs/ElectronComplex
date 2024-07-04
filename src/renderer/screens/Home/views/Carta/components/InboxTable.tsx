import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronLeft, faChevronRight, faCloud, faEllipsisV, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";

export default function InboxTable() {
   const nav = useNavigate()
   return (
      <div>
         <CardBox>
            <div className='v-center-between'>
               <h3 className='cardTitle'>Estado de Agencias</h3>
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
            </div>

            <Table className='position-relative'>
               <thead className='sticky-top'>
                  <tr>
                     <th>P <IconElement icon={faChevronDown} /> </th>
                     <th>ID</th>
                     <th>FECHA</th>
                     <th>HORA</th>
                     <th>AGENCIA</th>
                     <th>TIPO DE DELITO</th>
                     <th>RECURSOS</th>
                     <th>ANI</th>
                     <th>ESTADO<IconElement icon={faChevronDown} /></th>
                     <th>ACCIÓN</th>
                     <th className="px-4"><IconElement icon={faEllipsisV} /></th>
                  </tr>
               </thead>
               <tbody>
                  {Array.from({ length: 3 }).map((_, index) => (<tr key={index}>
                     <td style={{ paddingLeft: 20 }}>
                        <div className='circle-status-red m-auto'></div>
                     </td>
                     <td>30.245.592</td>
                     <td>22.05.2023</td>
                     <td>16:30:34</td>
                     <td>Circunscripcion 1</td>
                     <td>Lorem ipsum dolor</td>
                     <td>Lorem ipsum</td>
                     <td>Lorem ipsum</td>
                     <td className="v-center">[ P ]</td>
                     <td colSpan={2}>
                        <div className='v-center-normal gap-3  '>
                           <Button
                              variant='flat'
                              className='w-auto no-shadows'
                              onClick={() => { nav(`/home/carta/ver/${index + 1}`) }}
                           >
                              <IconElement icon={faEye} />
                           </Button>
                           <Button
                              variant='flat'
                              className='w-auto no-shadows'
                              onClick={() => { }}
                           >
                              <IconElement icon={faPlusCircle} />
                           </Button>
                        </div>
                     </td>
                  </tr>))}
               </tbody>
            </Table>
         </CardBox>

         <nav className='t-paginator v-center-end gap-2 mt-3'>
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
