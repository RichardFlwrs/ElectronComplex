import { useContext, createContext, useState } from 'react'

export interface WindowStore {
  about: {
    isOpen: boolean
    setAboutWindowState: (value: boolean) => void
  },
  myNew: {
    isOpen: boolean
    setMyNewWindowState: (value: boolean) => void
  }
}

const WindowStoreContext = createContext({} as WindowStore)

export function useWindowStore() {
  return useContext(WindowStoreContext)
}

export function WindowStoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState({
    about: { isOpen: false, setAboutWindowState },
    myNew: { isOpen: false, setMyNewWindowState },
  })

  function setAboutWindowState(value: boolean) {
    setState((state) => ({
      ...state,
      about: {
        ...state.about,
        isOpen: value,
      },
    }))
  }

  function setMyNewWindowState(value: boolean) {
    setState((state) => ({
      ...state,
      myNew: {
        ...state.myNew,
        isOpen: value,
      },
    }))
  }

  return (
    <WindowStoreContext.Provider value={state}>
      {children}
    </WindowStoreContext.Provider>
  )
}
