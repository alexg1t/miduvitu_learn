import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


function App(){
  const formatUserName = (userName) =>  `@${userName}`
  return(
    <section className='App'>
      <TwitterFollowCard 
      formatUserName={formatUserName} 
      
      userName="midudev" 
      >
        Miguelito

      </TwitterFollowCard>
      

      <TwitterFollowCard
      formatUserName={formatUserName} 
      
      userName="elonmusk" 
      name="miguelito2">
        Elon Musk
      </TwitterFollowCard>

    </section>
  )   
}

export default App;










/* function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  
    </div>
  )
}

export default App */
