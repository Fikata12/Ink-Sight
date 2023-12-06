import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/authContext"

import Paths from "../../utils/paths";

export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Paths.Login} />;
    }

    return <Outlet />;
}