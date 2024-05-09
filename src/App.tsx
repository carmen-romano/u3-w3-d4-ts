import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/MyNavbar'
import Paper from "./components/Paper";
import PaperDetails from "./components/PaperDetails";
import { Container } from "react-bootstrap";

function App() {

  return (
    <Container>
     <BrowserRouter>
     <MyNavbar/>
     <h1 className="text-center my-5">Spaceflight <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
</h1>
     <Routes>
      <Route path="/" element={<Paper/>} />
      <Route path="/detail/:id" element={<PaperDetails/>} />
     </Routes>
     </BrowserRouter>
    </Container>
  )
}

export default App
