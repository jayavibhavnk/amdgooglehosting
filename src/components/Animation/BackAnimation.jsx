import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/Previous.json";

const BackAnimation = () => {
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

    return <div ref={container}></div>;
};

export default BackAnimation;
