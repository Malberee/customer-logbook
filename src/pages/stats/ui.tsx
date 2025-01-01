import { observer } from 'mobx-react-lite'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import { ChartConfig, ChartContainer } from '@shared/ui'

import { useStats } from './model'

const chartConfig = {
  earnings: {
    label: 'Earnings',
    color: '#2563eb',
  },
  visits: {
    label: 'Visits',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export const Stats = observer(() => {
  const data = useStats()

  return (
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
        <Bar dataKey="visits" fill="var(--color-visits)" radius={4}>
          <LabelList position="top" />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
})
