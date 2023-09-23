import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import AddSkills from './pages/AddSkills'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/addskills" element={<AddSkills/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
