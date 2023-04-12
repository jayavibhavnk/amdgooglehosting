import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/sign.json";
import Link from "../link/Link";
import { Button } from "@mui/material";
import ArrowAnimation from "./ArrowAnimation";

const SignInAnimation = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: loading,
        });
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute z-10 font-[800] lg:text-3xl sm:text-2xl text-2xl text-gray-800 -mt-[400px]">Log In To Browse The Features</div>
            <div className="absolute z-10 font-[500] -rotate-[36deg] text-gray-800 mt-[380px] -ml-[390px]">Click Here</div>
            <div className="absolute z-20 w-40 h-40 mt-[450px] -ml-[250px]">
                <ArrowAnimation />
            </div>
            <div className="absolute z-10 mt-[400px]">
                <Link className="interactable" to="/login">
                    <Button sx={{ borderRadius: "20px", backgroundColor: "#E0E1DD", color: "black", fontWeight: "bold" }} variant="contained" size="medium" disableElevation>
                        Log In
                    </Button>
                </Link>
            </div>
            <div className="absolute z-0 bg-gray-500 bg-opacity-50 w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 scale-[3]" ref={container}></div>
            </div>
        </div>
    );
};

export default SignInAnimation;
