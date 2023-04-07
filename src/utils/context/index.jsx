import { createContext, useState } from 'react'

export const CollapseContext = createContext()
export const CollapseProvider = ({ children }) => {
    console.log(useState)
    const [collapse, setCollapse] = useState('open')
    const clickCollapse = () => {
        setCollapse(collapse === 'open' ? 'close' : 'open')
    }
 
    return (
        <CollapseContext.Provider value={{ collapse, clickCollapse }}>
            {children}
        </CollapseContext.Provider>
    )
}