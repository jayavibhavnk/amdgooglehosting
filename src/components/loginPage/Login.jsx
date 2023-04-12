import { useState, useEffect, useContext } from "react";
// import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";
import useNavigation from "../../hooks/use-navigation";

const google = window.google;

function Login({ value, onChange }) {
    const [userData, setUserData] = useState({});
    const { currentPath, navigateReplace } = useNavigation();
    const handleCallbackResponse = (response) => {
        var userObject = jwt_decode(response?.credential);
        // console.log(userObject);
        setUserData(userObject);
        onChange(userObject);
        localStorage.setItem("userObject", JSON.stringify(userObject));
        document.getElementById("signInDiv").hidden = true;
        navigateReplace("/");
    };

    const handleSignOut = (event) => {
        setUserData({});
        document.getElementById("signInDiv").hidden = false;
    };

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "1036535272125-1frig410gdvbbmufiktfqppo1q1i02ik.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large" });
    }, []);

    return <div className="flex justify-center items-center" id="signInDiv"></div>;
}

export default Login;
