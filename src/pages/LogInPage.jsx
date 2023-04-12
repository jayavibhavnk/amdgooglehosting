import Login from "../components/loginPage/Login";
import { useState } from "react";
import "./Page.css";
function LogInPage({ handleChange, auth }) {
    const [user, setUser] = useState({});
    const handleUser = (val) => {
        setUser(val);
        handleChange(val);
    };

    return (
        <div className="bg-gradient h-screen">
            {/* <Header heading="Login to your account" paragraph="Don't have an account yet? " linkName="Signup" linkUrl="/signup" /> */}
            {/* <Login value={user} onChange={handleUser} /> */}
        </div>
    );
}

export default LogInPage;
