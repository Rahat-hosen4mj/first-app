import { Dispatch, ReactNode, createContext, useState } from "react";
type TThemeContext = {
    dark: boolean;
    setDark: Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
}
const ThemeProvider = ({children}: ThemeProviderProps) => {
   const [dark, setDark] = useState(false)
    const vlaues ={
        dark,
        setDark
    }
    return (
        <ThemeContext.Provider value={vlaues}>
            {children}
        </ThemeContext.Provider >
    );
};

export default ThemeProvider;