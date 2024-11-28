import { GB, UA } from 'country-flag-icons/react/3x2'

import { Button } from '@shared/ui'

import { useLanguage } from './model'

export const LangToggle = () => {
  const { currentLang, toggleLanguage } = useLanguage()

  return (
    <Button
      size="icon"
      className="aspect-square"
      variant="ghost"
      onClick={toggleLanguage}
    >
      {currentLang === 'uk' ? (
        <UA className="!w-6 rounded-sm" />
      ) : (
        <GB className="!w-6 rounded-sm" />
      )}
    </Button>
  )
}
