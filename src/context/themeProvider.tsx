import React, { useState } from "react"

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
})

const ThemeProvider = props => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark")

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    localStorage.setItem("theme", newTheme)
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>
