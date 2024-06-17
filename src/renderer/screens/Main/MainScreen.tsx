import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Container, Heading, Button } from 'renderer/components'
import { useWindowStore } from 'renderer/store'
import { NavBar } from 'renderer/components/Layout/NavBar'
import { ipcRenderer } from 'electron'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)
  const storeAbout = useWindowStore().about
  const storeMyNew = useWindowStore().myNew

  useEffect(() => {
    // App.sayHelloFromBridge()
    App.whenAboutWindowClose(({ message }) => storeAbout.setAboutWindowState(false))
    App.whenMyNewWindowClose(({ message }) => storeMyNew.setMyNewWindowState(false))

    // Redirect to Login or Home
    navigate(auth ? '/home' : '/login')

  }, [])

  function openAboutWindow() {
    App.createAboutWindow()
    storeAbout.setAboutWindowState(true)
  }

  function openMyNewWindow() {
    App.createMyNewWindow()
    storeMyNew.setMyNewWindowState(true)
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      Loading...
    </div>
  )
}
