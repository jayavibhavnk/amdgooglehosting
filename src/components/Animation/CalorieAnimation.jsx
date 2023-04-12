import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/colorie.json";

const CalorieAnimation = () => {
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

    return <div className="w-8 h-8 mb-2" ref={container}></div>;
};

export default CalorieAnimation;
