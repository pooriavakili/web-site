import React,{createContext} from 'react'

const Context =createContext()
export default function ContextProvider({children}) {
return(
    <Context.Provider>
        {
            children
        }
    </Context.Provider>
)
}