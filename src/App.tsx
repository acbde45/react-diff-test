import React, { useState } from 'react'
import Console from './components/Console'
import Paper from './components/Paper'
import mockData from './data.json'

function App() {
  const [shape, setShape] = useState<string>('shape1');
  const data = (mockData as any)[shape] as TCNode[];

  return (
    <div className="App">
      <Console params={Object.keys(mockData)} onChange={setShape} />
      <Paper data={data} />
    </div>
  )
}

export default App
