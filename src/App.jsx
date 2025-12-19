
import './App.css'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import List from './components/List'
import Greetings from './components/Greetings'
import User from './components/User'

function App() {
  return (
    <Routes>
      <Route path='/react-component-dep' element = {<Greetings/>}/>
    </Routes>
  )
}
export default App
