import { Router, Route } from 'electron-router-dom'

import { MainScreen, AboutScreen, AnotherScreen, MyNewScreen } from 'renderer/screens'
import LoginScreen from './screens/Login/LoginScreen'
import HomeScreen from './screens/Home/HomeScreen'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/login/*" element={<LoginScreen />} />
          <Route path="/home/*" element={<HomeScreen />} />
          <Route path="/anotherScreen" element={<AnotherScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
      myWindow={<Route path="/" element={<MyNewScreen />} />}
    />
  )
}
