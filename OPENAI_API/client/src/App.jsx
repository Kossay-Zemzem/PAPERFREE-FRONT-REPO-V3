import './App.css' 
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from '.Pages/Home'
import {Page1} from './Pages/Page1'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}
export default App ;