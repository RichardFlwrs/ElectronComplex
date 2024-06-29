import Chat from "renderer/components/Chat/Chat";
import ContactCard from "../components/ContactCard";
import TextInput from "renderer/components/TextInput/TextInput";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "renderer/components";

export default function Mensajes() {
   return (
      <div id="mensajes-tap-wrapper">
         {/* List of Contacts */}
         <div className="contacts-wrapper">
            <div className="py-2 px-4">
               <TextInput
                  icon={faSearch}
                  placeholder="Buscar"
                  wrapperclassname="card-input py-0"
               />
               <div className="filter-options gap-2">
                  <Button variant="flat" className="selected">Todos</Button>
                  <Button variant="flat">No leidos</Button>
               </div>
            </div>
            <div className="list-of-contacts">
               {Array.from({ length: 15 }).map(
                  (data, idx) => <ContactCard key={idx} id={idx} />
               )}
            </div>
         </div>

         {/* Chat Box */}
         <div className="chatbox-section chat-box-wrapper">
            <Chat />
         </div>
      </div>
   )
}
