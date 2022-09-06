import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";





// Create authenticate
const AuthenticateUser = ({ children }) => {

    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? children : <Navigate to="/login" />;

}


// Export middlewares
export default AuthenticateUser;