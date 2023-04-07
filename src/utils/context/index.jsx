// import { createContext, useState } from 'react'

// export const BannerContext = createContext()
// export const BannerProvider = ({ children }) => {
//     console.log(useState)
//     const [banner, setBanner] = useState('light')
//     const getPage = () => {
//         const url = new URL(window.location.href)
//         if (url.pathname === '/') {
//             return "home"
//         } else {
//             return "page"
//         }
//     }
 
//     return (
//         <BannerContext.Provider value={{ banner, getPage }}>
//             {children}
//         </BannerContext.Provider>
//     )
// }