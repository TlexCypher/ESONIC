import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Layout from "./components/Layout"
import LoginPage from "./pages/LoginPage"
import AddNewWordPage from "./pages/AddNewWordPage"
import ExaminePage from "./pages/ExaminePage"
import axios from "axios"
import SignUpPage from "./pages/SignUpPage"
import RouteAuthGuard from "./routes/RouteAuthGuard"

axios.defaults.baseURL = "http://localhost:1234";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/:username" >
            <Route index element={<RouteAuthGuard component={<IndexPage />} />} />
            <Route path="english/addWord" element={<RouteAuthGuard component={<AddNewWordPage />} />} />
            <Route path="english/examine" element={<RouteAuthGuard component={<ExaminePage />} />} />
          </Route>
          <Route path={"*"} element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App
