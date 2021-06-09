import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../../Assets/css/home.css';
const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button className="button1" onClick={() => { logout({ returnTo: window.location.origin }); window.localStorage.clear(); }}>
            Log Out
        </button>
    );
};

export default LogoutButton;