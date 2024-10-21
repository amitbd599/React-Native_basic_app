import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";




const GlobalContext = createContext();


export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((res) => {
            if (res) {
                setLogin(true)
                setUser(res)
            } else {
                setLogin(false)
                setUser(null)
            }
        }).catch((err) => {
            console.error(err)
            setIsLoading(false)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{ isLogin, setLogin, user, setUser, isLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;