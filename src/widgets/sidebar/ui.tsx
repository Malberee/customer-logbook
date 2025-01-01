import { Link, useLocation } from '@tanstack/react-router'
import { BookUser, ChartNoAxesCombined, Menu } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeToggle } from '@features/theme-toggle'
import { LangToggle } from '@features/toggle-language'

import { basePath } from '@shared/config'
import { Button, Sheet, SheetContent, SheetTrigger } from '@shared/ui'

export const Sidebar = () => {
  const pathname = useLocation().pathname
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex h-full flex-col justify-between">
          <nav className="flex flex-col gap-4 pt-4">
            <Link to="/">
              <Button
                className="w-full justify-start"
                variant={pathname === basePath ? 'secondary' : 'ghost'}
                size="lg"
                onClick={() => setIsOpen(false)}
              >
                <BookUser />
                {t('Customers')}
              </Button>
            </Link>
            <Link to="/stats">
              <Button
                className="w-full justify-start"
                variant={
                  pathname === `${basePath}stats` ? 'secondary' : 'ghost'
                }
                size="lg"
                onClick={() => setIsOpen(false)}
              >
                <ChartNoAxesCombined />
                {t('Statistics')}
              </Button>
            </Link>
          </nav>

          <div className="flex flex-col gap-4">
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
