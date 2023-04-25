
import { useNavigate } from 'react-router-dom'

const ProtectRoutes = () => {
    const Navigate = useNavigate()
        try {
            if(!localStorage.getItem('loggeado')){
                Navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
}

export default ProtectRoutes