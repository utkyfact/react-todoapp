
import { Route, Routes } from "react-router"
import { ToastContainer, toast } from 'react-toastify';
import HomePage from "./pages/HomePage"
import Detay from "./pages/Detay"
import 'react-toastify/ReactToastify.css'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detay/:slug" element={<Detay />} />
      </Routes>



      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default App
