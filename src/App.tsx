import { useState } from 'react'
import './App.css'
import { BetterRange, SuperInp } from './SuperInp'

function App() {
  const [range, setRange] = useState<BetterRange>({
    start: 2,
    end: 500
  })

  return (
    <>

      <SuperInp value={range} setValue={setRange} />
      <h1>{JSON.stringify(range)}</h1>
    </>
  )
}

export default App
