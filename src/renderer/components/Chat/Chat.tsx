import { faPaperPlane, faPhone, faTimesCircle, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'renderer/components'
import TextInput from 'renderer/components/TextInput/TextInput'

const CHAT_HARDCODE: IChat[] = [
   { type: 'sending', message: 'Lorem.' },
   { type: 'source', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, odio.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'source', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'source', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi laboriosam esse laudantium.' },
   { type: 'source', message: 'Lorem ipsum.' },
   { type: 'sending', message: 'Lorem.' },
   { type: 'source', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, odio.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'source', message: 'Lorem ipsum dolor sit amet.' },
   { type: 'source', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi laboriosam esse laudantium.' },
   { type: 'source', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque dignissimos dolores, natus repudiandae porro! Doloribus architecto quas delectus labore voluptates fugiat corrupti quibusdam.' },
   { type: 'source', message: 'Lorem ipsum.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, odio, sit amet consectetur adipisicing elit. Quasi laboriosam esse laudantium.' },
   { type: 'sending', message: 'Lorem ipsum dolor sit amet.' },
]

export default function Chat() {
   return (
      <>
         {/* Header */}
         <div
            className='v-center-between p-2 chat-header'
         >
            <div className='v-center-normal gap-3 px-4 pt-3'>
               <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 43 }} />
               <div>
                  <p>Florencia Gonzalez</p>
                  <p className='number-phone'>000000</p>
               </div>
            </div>
         </div>

         {/* Chat */}
         <div className='conversation-box'>
            {CHAT_HARDCODE.map((_d, idx) => <BubleChat data={_d} key={idx} />)}
         </div>

         <div className='p-3 pt-1 position-relative'>
            <TextInput
               wrapperclassname='no-shadows card-input p-2'
               placeholder='Enviar un mensaje'
               id='send-message-input'
            />

            <FontAwesomeIcon
               style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '2rem',
                  pointerEvents: 'none'
               }}
               icon={faPaperPlane}
            />
         </div>

      </>
   )
}

const BubleChat = ({ data }: { data: IChat }) => {
   return (
      <div className={`v-center-normal bubble-chat ${data.type}`}>
         {data.message}
      </div>
   )
}


type IChat = {
   type: 'source' | 'sending',
   message: string,
}