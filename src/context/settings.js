import React, { createContext } from 'react'
export const SettingContext = createContext()
const settingsProvider = (props) => {
  return (
    <SettingContext.Provider value={{}}>

        {props.children}

    </SettingContext.Provider>
  )
}

export default settingsProvider;