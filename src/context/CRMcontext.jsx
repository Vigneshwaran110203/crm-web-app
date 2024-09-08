import { createContext, useState } from "react";

export const CRMContext = createContext()

export const CRMProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true)

    return(
        <CRMContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </CRMContext.Provider>
    )
}