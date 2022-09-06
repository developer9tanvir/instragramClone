import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";





// Create authenticate
const AuthRedirectUser = ({ children }) => {

    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? <Navigate to="/" /> : children;

}


// Export middlewares
export default AuthRedirectUser;