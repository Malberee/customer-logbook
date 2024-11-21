import { Header } from './header'

const customers = [
  { name: 'Elena', tel: '0675375756', id: 1 },
  { name: 'NeElena', tel: '0675375756', id: 2 },
  { name: 'Vadim', tel: '0675375756', id: 3 },
  { name: 'Kto-to', tel: '0675375756', id: 4 },
  { name: 'Chirik', tel: '0675375756', id: 5 },
]

export const Customers = () => {
  return (
    <>
      <Header />
      <ul>
        {customers.map(({ name, tel, id }) => (
          <li key={id}>
            <a className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-accent">
              <div>
                <p>{name}</p>
                <p>{tel}</p>
              </div>
              <p>Last visit: 21.11.2024</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
