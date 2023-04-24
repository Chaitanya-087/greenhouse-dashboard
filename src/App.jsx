import Home from "./pages/home/Home"
import Overview from "./pages/overview/Overview"
import Calculator from "./pages/calculator/Calculator"
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Overview />} />
        <Route path="calculator" element ={<Calculator />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
