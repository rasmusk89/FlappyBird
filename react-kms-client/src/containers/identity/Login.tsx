import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Login = () => {
    const appState = useContext(AppContext);

    const toggleAuthStatus = (e: any) => {
        if (appState.jwt !== '') {
            appState.setAuthInfo('', '', '');
        } else {
            appState.setAuthInfo('a', 'c', 'd');
        }
    }

    return (
        <div onClick={toggleAuthStatus}>Login/Logout {appState.jwt}</div>
    );
}

export default Login;
