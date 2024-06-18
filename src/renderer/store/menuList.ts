import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faAddressBook, faEarListen, faFaceSurprise, faHand, faMobileRetro, faPhone, faPhoneSlash, faPhoneVolume, faTimesCircle, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"

export type IMenuItem = {
   icon?: IconDefinition
   name?: string
   image?: string
   title?: string,
   active?: boolean,
   subMenus?: IMenuItem[]

}

export const MENU: IMenuItem[] = [
   {
      title: 'Nombre Agente', subMenus: [
         { icon: faUser, name: 'Presencia' },
         { icon: faMobileRetro, name: 'Marcar' },
         { icon: faPhone, name: 'Contestar' },
         { icon: faPhoneSlash, name: 'Colgar' },
         { icon: faPhoneVolume, name: 'Espera' },
         { icon: faUsers, name: 'Conferencia' },
         { icon: faTimesCircle, name: 'Cancelar' },
      ]
   },
   {
      title: 'Escucha', subMenus: [
         { icon: faEarListen, name: 'Escuchar' },
         { icon: faHand, name: 'Participar' },
      ]
   },
   {
      title: 'Derivacion', subMenus: [
         { icon: faFaceSurprise, name: 'Broma' },
         { icon: faMobileRetro, name: 'Interna' },
      ]
   },
   {
      title: 'Grupo', subMenus: [
         { icon: faUsers, name: 'Cola sup.' },
      ]
   },
   {
      title: 'Contactos', subMenus: [
         { icon: faAddressBook, name: 'Agenda' },
      ]
   },
]