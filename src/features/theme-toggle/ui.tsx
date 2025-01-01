import { Moon, Sun } from 'lucide-react'

import { Button } from '@shared/ui'

import { useTheme } from './model'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      size="lg"
      className="justify-start capitalize"
      variant="ghost"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
      {theme}
    </Button>
  )
}
