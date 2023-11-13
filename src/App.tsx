import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Reset from "./pages/Reset/Reset"
import LoginLayout from "./layout/LoginLayout/LoginLayout"
import './index.css'
function App() {

  return (
    <BrowserRouter >
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path="login" element={<LoginLayout><Login/></LoginLayout>}></Route>
      <Route path="register" element={<LoginLayout><Register/></LoginLayout>}></Route>
      <Route path="reset" element={<Reset/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
