import { createContext, useContext, useState, useEffect } from 'react'
//creating the context that want to go
const GlobalContext = createContext();
//creating a custom hook to be used globally
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(
    'opacity-0 -translate-y-full transition-all overflow-hidden'
  )
  const [apear, setApear] = useState('opacity-0')
  useEffect(() => {
    setFadeIn('opacity-100 translate-y-0 transition-all overflow-hidden')
    setApear('opacity-100')
  }, [])
  return (
    <GlobalContext.Provider value={{ apear, fadeIn }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
