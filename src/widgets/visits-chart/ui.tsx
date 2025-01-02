import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import { useStats } from '@shared/model'
import { ChartConfig, ChartContainer } from '@shared/ui'

const chartConfig = {
  visits: {
    label: 'visits',
    color: '#2563eb',
  },
} satisfies ChartConfig

export const VisitsChart = observer(() => {
  const data = useStats()
  const { t } = useTranslation()

  return (
    <section className="py-4">
      <h2 className="mb-2 text-3xl">{t('Visits')}</h2>
      <ChartContainer
        config={chartConfig}
        className="border-default-50 rounded-xl border p-2"
      >
        <BarChart data={data} margin={{ top: 20 }}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} />
          <Bar dataKey="visits" fill="var(--color-visits)" radius={4}>
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </ChartContainer>
    </section>
  )
})
