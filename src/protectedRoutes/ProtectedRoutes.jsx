import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = localStorage.token
    if (!auth){
       return(<Navigate to="/login"/>) 
    }else {
        return(<Outlet/>)
    }
    
}

export default ProtectedRoutes