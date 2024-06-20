import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'renderer/components/Button/Button'

export default function UserStatus({ menuOpen }: { menuOpen: boolean }) {
   const circleStyle = {
      background: 'gray',
      borderRadius: '50%',
      height: 35,
      width: 35,
      color: 'white',
   }

   const [listOpen, setlistOpen] = useState(false)

   const toggleListOpen = () => {
      setlistOpen(!listOpen)
   }

   return (
      <div className='position-relative'>
         <Button
            onClick={toggleListOpen}
            variant='flat'
            id='userStatus'
            className={`card-shadow my-4 v-center`}
         >
            {/* User-Icon */}
            <div className='v-center' >
               <div className='v-center' style={circleStyle}>
                  A
               </div>
            </div>

            {/* Name */}
            <div className={'status-section-width'.concat(menuOpen ? ' ' : ' hide')}>
               <p className='m-0 text-truncate'>CD Viedma, CD Bariloche</p>
               <p className='m-0 text-truncate'>Supervisor</p>
            </div>

            {/* dropdown icon */}
            <div className={menuOpen ? '' : 'hide'}>
               <FontAwesomeIcon icon={faChevronDown} />
            </div>
         </Button>

         {!listOpen ? null : <div className='drop-down-card'>
            <p className=''>Estado</p>
            <Button variant='flat' className='dd-option'>
               <div className='circle-status-green'></div>
               <p>Presente</p>
            </Button>
            <Button variant='flat' className='dd-option'>
               <div className='circle-status-red'></div>
               <p>Desocupado</p>
            </Button>
            <Button variant='flat' className='dd-option'>
               <div className='circle-status-orange'></div>
               <p>En espera</p>
            </Button>
         </div>}
      </div>
   )
}
