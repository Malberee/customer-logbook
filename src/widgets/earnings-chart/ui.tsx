import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import { useStats } from '@shared/model'
import { ChartConfig, ChartContainer } from '@shared/ui'

const chartConfig = {
  earnings: {
    label: 'Earnings',
    color: '#2563eb',
  },
} satisfies ChartConfig

export const EarningsChart = observer(() => {
  const data = useStats()
  const { t } = useTranslation()

  return (
    <section className="pb-4">
      <h2 className="mb-2 text-3xl">{t('Earnings')}</h2>
      <ChartContainer
        config={chartConfig}
        className="border-default-50 rounded-xl border p-2"
      >
        <BarChart data={data} margin={{ top: 20 }}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} />
          <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4}>
            <LabelList
              position="top"
              formatter={(value: number) => `₴${value}`}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </section>
  )
})
