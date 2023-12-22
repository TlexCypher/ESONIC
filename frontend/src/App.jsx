import { Route, Routes } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Layout from "./components/Layout"
import LoginPage from "./pages/LoginPage"
import AddNewWordPage from "./pages/AddNewWordPage"
import RegisterPage from "./pages/RegisterPage"
import ExaminePage from "./pages/ExaminePage"

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addNewWord" element={<AddNewWordPage />} />
        <Route path="/examine" element={< ExaminePage />} />
      </Route>
    </Routes>
  )
}

export default App
