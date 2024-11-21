import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) ?? 'light',
  )

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body')?.classList.add('dark')
    } else {
      document.querySelector('body')?.classList.remove('dark')
    }
  }, [theme])

  return { theme, toggleTheme, setTheme }
}
