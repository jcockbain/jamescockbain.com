import React, { useState } from "react"

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
})

interface Props {
  children: any
}

const ThemeProvider = ({ children }: Props) => {
  // const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark")
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    // localStorage.setItem("theme", newTheme)
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ({ element }: any) => <ThemeProvider>{element}</ThemeProvider>
