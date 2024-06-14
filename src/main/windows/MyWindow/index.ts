import { createWindow } from 'main/factories'

export * from './ipcs'

export function MyWindow() {
  const window = createWindow({
    id: 'myWindow',
    title: `My Window`,
    width: 450,
    height: 350,
  })

  window.webContents.on('did-finish-load', () => window.show())

  return window
}
