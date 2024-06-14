import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function whenMyNewWindowClose(fn: (...args: any[]) => void) {
  const channel = IPC.WINDOWS.MY_NEW.WHEN_WINDOW_CLOSE

  ipcRenderer.on(channel, (_, ...args) => {
    fn(...args)
  })
}
