import { eachMonthOfInterval, format, isSameMonth, subMonths } from 'date-fns'
import { enGB, uk } from 'date-fns/locale'

import { useLanguage } from '@features/toggle-language'

import { customers } from '@entities/customer'

export const useStats = () => {
  const visits = customers.allVisits
  const { currentLang } = useLanguage()

  const dates = eachMonthOfInterval({
    start: subMonths(new Date(), 5),
    end: new Date(),
  })
  const data = dates.map((date) => ({
    month: format(date, 'LLL', { locale: currentLang === 'uk' ? uk : enGB }),
    earnings: 0,
    visits: 0,
  }))

  visits.forEach((visit) => {
    const index = data.findIndex((_, index) =>
      isSameMonth(dates[index], visit.date),
    )

    if (index !== -1) {
      data[index].earnings += visit.price || 0
      data[index].visits += 1
    }
  })

  return data
}
