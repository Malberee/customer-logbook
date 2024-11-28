import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language

  const toggleLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk'

    i18n.changeLanguage(newLang)
    localStorage.setItem('customer-logbook.lang', newLang)
  }

  return { currentLang, toggleLanguage }
}
