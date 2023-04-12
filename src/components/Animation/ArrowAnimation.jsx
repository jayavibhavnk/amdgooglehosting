import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../assets/arrow.json";

const ArrowAnimation = () => {
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

export default ArrowAnimation;
