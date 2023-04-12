import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/loading.json";

const LoadingAnimation = () => {
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 opacity-80 bg-opacity-50 z-50">
            <div className="w-40 h-40 scale-[3]" ref={container}></div>
        </div>
    );
};

export default LoadingAnimation;
