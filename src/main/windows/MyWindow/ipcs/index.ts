import { ipcMain } from 'electron'

import { registerWindowCreationByIPC } from 'main/factories'
import { IPC } from 'shared/constants'
import { MyWindow } from '..'

export function registerMyWindowCreationByIPC() {

   registerWindowCreationByIPC({
      channel: IPC.WINDOWS.MY_NEW.CREATE_WINDOW,
      window: MyWindow,

      callback(window, { sender }) {
         const channel = IPC.WINDOWS.MY_NEW.WHEN_WINDOW_CLOSE

         ipcMain.removeHandler(channel)

         window.on('closed', () =>
            sender.send(channel, {
               message: 'MY_NEW window closed!',
            })
         )
      },
   })
}
