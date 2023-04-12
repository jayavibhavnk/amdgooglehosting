import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/loader.json";

const TimeAnimation = () => {
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

    return <div className="w-10 h-10 scale-[2] ml-2" ref={container}></div>;
};

export default TimeAnimation;
