import { ReactNode, createContext, useState  } from "react";

interface ThemeContextType{
    ThemeColor: string,
    changeProviderTheme: (color:string) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({children}:{children:ReactNode}){
    const [ThemeColor, setThemeColor] = useState('#194AFE') //Default color is dark

    function changeProviderTheme(color:string){
        setThemeColor(color)
        
    }

    return(
        <ThemeContext.Provider value={{ThemeColor, changeProviderTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}