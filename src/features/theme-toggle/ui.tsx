import { Moon, Sun } from 'lucide-react'

import { Button } from '@shared/ui'

import { useTheme } from './model'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className="ml-auto"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
