import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../auth/Firebase";
import "./Register.css";
import LoadingAnimation from "../Animation/LoadingAnimation";
import Link from "../link/Link";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) {
            <LoadingAnimation />;
            return;
        }
    }, [user, loading]);
    return (
        <div className="register">
            <div className="register__container">
                <input type="text" className="register__textBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="text" className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <input type="password" className="register__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button className="register__btn register__google" onClick={signInWithGoogle}>
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;
