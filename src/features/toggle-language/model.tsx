import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
} from 'react'
import { useTranslation } from 'react-i18next'

type Lang = 'uk' | 'en'

type Context = {
  currentLang: Lang
  toggleLanguage: () => void
}

const LanguageContext = createContext<Context | null>(null)

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language as Lang

  const toggleLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk'

    i18n.changeLanguage(newLang)
    localStorage.setItem('customer-logbook.lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)!
