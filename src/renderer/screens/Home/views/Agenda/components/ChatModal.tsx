import { faPhone, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'renderer/components'

export default function ChatModal() {
   return (
      <div
         className='card-box-style p-0'
         style={{
            position: 'absolute',
            bottom: 0,
            right: 30,
            width: 340,
            height: 550,
         }}
      >

         <div
            style={{ borderBottom: '1px solid cyan' }}
            className='v-center-between p-2 position-relative'
         >
            <div className='v-center-normal gap-3 px-4 pt-3'>
               <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 43 }} />
               <div>
                  <p>Florencia Gonzalez</p>
                  <p>000000</p>
               </div>
            </div>

            <div className='px-4'>
               <Button variant='flat'>
                  <FontAwesomeIcon icon={faPhone} style={{ fontSize: 24 }} />
               </Button>
            </div>

         </div>

      </div>
   )
}
