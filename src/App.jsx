
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AddLabEntry from './Components/AddLabEntry'
import ViewLabEntries from './Components/ViewLabEntries'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-lab-entry" element={<AddLabEntry />} />
        <Route path="/view-lab-entries" element={<ViewLabEntries />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
