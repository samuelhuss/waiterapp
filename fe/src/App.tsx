import { GlobalStyles } from "./styles/GlobalStyles"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import { Header } from "./components/Header"
import { Orders } from "./components/Orders"

export function App() {
  return (
    <>
        <GlobalStyles/>
        <Header/>
        <Orders/>
        <ToastContainer position="bottom-center"/>
    </>
  )
}
