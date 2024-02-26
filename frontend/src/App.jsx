import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Layout from "./components/Layout"
import LoginPage from "./pages/LoginPage"
import AddNewWordPage from "./pages/AddNewWordPage"
import RegisterPage from "./pages/RegisterPage"
import ExaminePage from "./pages/ExaminePage"
import axios from "axios"
import SignUpPage from "./pages/SignUpPage"

axios.defaults.baseURL = "http://localhost:1234";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/english/addWord" element={<AddNewWordPage />} />
          <Route path="/english/examine" element={<ExaminePage />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App
