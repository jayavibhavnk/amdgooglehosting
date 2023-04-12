import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../auth/Firebase";
import "./Reset.css";
import useNavigation from "../../hooks/use-navigation";
import Link from "../link/Link";
import LoadingAnimation from "../Animation/LoadingAnimation";
function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const { navigate } = useNavigation();
    useEffect(() => {
        if (loading) {
            <LoadingAnimation />;
            return;
        }
        if (user) navigate("/");
    }, [user, loading]);
    return (
        <div className="reset">
            <div className="reset__container">
                <input type="text" className="reset__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Reset;
