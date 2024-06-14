import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function createMyNewWindow() {
  const channel = IPC.WINDOWS.MY_NEW.CREATE_WINDOW

  ipcRenderer.invoke(channel)
}
