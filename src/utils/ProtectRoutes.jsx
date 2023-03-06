import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectRoutes = () => {
    const Navigate = useNavigate()
        try {
            const getLog = window.localStorage.getItem('loggeado')
            if(getLog == 'logged') {

            } else {
                Navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
}

export default ProtectRoutes