import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faAddressBook, faEarListen, faFaceFrownOpen, faHand, faMobileRetro, faPhone, faPhoneSlash, faPhoneVolume, faTimesCircle, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { iconAgenda, iconBroma, iconConferencia, iconGridBotones, iconGrupo, iconMano, iconOreja, iconPerfil, iconTelColgar, iconTelContestar, iconTelEspera, iconTelInterna, iconTimes } from "./icons.index"

export type IMenuItem = {
   icon?: IconDefinition | string
   name?: string
   image?: string
   title?: string,
   link?: string,
   active?: boolean,
   subMenus?: IMenuItem[]

}

export const MENU: IMenuItem[] = [
   {
      title: 'Nombre Agente', subMenus: [
         { icon: iconPerfil, name: 'Presencia', link: '/home/supervisor' },
         { icon: iconGridBotones, name: 'Marcar' },
         { icon: iconTelContestar, name: 'Contestar' },
         { icon: iconTelColgar, name: 'Colgar' },
         { icon: iconTelEspera, name: 'Espera' },
         { icon: iconConferencia, name: 'Conferencia' },
         { icon: iconTimes, name: 'Cancelar' },
      ]
   },
   {
      title: 'Escucha', subMenus: [
         { icon: iconOreja, name: 'Escuchar' },
         { icon: iconMano, name: 'Participar' },
      ]
   },
   {
      title: 'Derivacion', subMenus: [
         { icon: iconBroma, name: 'Broma' },
         { icon: iconTelInterna, name: 'Interna' },
      ]
   },
   {
      title: 'Grupo', subMenus: [
         { icon: iconGrupo, name: 'Cola sup.' },
      ]
   },
   {
      title: 'Contactos', subMenus: [
         { icon: iconAgenda, name: 'Agenda', link: '/home/agenda' },
      ]
   },
]