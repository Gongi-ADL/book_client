import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import ViewRoutes from './views/ViewRoutes'

const app = () => {
  return(
    <div className="w-full h-screen overflow-auto bg-gray-100">
    <ViewRoutes />
    <ToastContainer />
    </div>
    
  )
}

export default app
