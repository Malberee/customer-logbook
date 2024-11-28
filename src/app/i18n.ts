import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@app/locales/en.json'
import uk from '@app/locales/uk.json'

const resources = {
  en: { translation: en },
  uk: { translation: uk },
}

const initialLang = localStorage.getItem('customer-logbook.lang') || 'uk'

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: initialLang,
})
