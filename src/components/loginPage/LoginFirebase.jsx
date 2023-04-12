import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../auth/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import useNavigation from "../../hooks/use-navigation";
import LoadingAnimation from "../Animation/LoadingAnimation";
import Link from "../link/Link";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const { navigateReplace } = useNavigation();
    useEffect(() => {
        if (loading) {
            <LoadingAnimation />;
            return;
        }
        // navigateReplace("/")
        if (user) {
            navigateReplace("/");
        }
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>
                <button
                    className="login__btn login__google"
                    onClick={() => {
                        signInWithGoogle();
                        navigateReplace("/");
                    }}
                >
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;
