import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Reset from "./pages/Reset/Reset"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="reset" element={<Reset/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
