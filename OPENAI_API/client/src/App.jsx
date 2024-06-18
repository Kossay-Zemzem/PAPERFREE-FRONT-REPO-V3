import './App.css' 
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/home.jsx'
import Page1 from './Pages/Page1.jsx'
import Page2 from "./Pages/Page2.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Page1" element={<Page1 />} />
      {/* <Route path="page1/Page2" element={<Page2 />} /> */}
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}
export default App ;