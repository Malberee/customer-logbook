import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="text-[60px] opacity-50">404</p>
      <p className="mb-4 text-xl">{t('Page not found!')}</p>
      <Link to="/">
        <Button>{t('Go to home')}</Button>
      </Link>
    </div>
  )
}
