import { Router, Route } from 'electron-router-dom'

import { MainScreen, AboutScreen, AnotherScreen, MyNewScreen } from 'renderer/screens'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/anotherScreen" element={<AnotherScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
      myWindow={<Route path="/" element={<MyNewScreen />} />}
    />
  )
}
