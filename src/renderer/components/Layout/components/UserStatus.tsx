import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'renderer/components/Button/Button'

export default function UserStatus({ menuOpen }: { menuOpen: boolean }) {
   const circleStyle = {
      background: 'gray',
      borderRadius: '50%',
      height: 35,
      width: 35,
      color: 'white',
   }
   return (
      <div>
         <Button variant='flat' className='card-shadow my-4 v-center justify-content-between'>
            {/* User-Icon */}
            <div
               className='v-center'
            >
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
               <FontAwesomeIcon
                  icon={faChevronDown}
               />
            </div>
         </Button>
      </div>
   )
}
