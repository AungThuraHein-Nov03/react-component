
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Greetings from './components/Greetings'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/react-component-dep' element = {<Greetings/>}/>
    </Routes>
    </div>
    
  )
}
export default App
