import './App.css' 
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home.jsx'
import Page1 from './Pages/Page1.jsx'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Page1" element={<Page1/>} />        
      </Routes>
    </Router>
  )
}
export default App ;