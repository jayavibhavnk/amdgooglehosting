import React, { useEffect } from "react";
import "./TextAnimation.css";

function TextAnimation({ children }) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const textElement = document.getElementById("Text");

        if (textElement) {
            textElement.addEventListener("mouseover", handleMouseover);
        }

        return () => {
            if (textElement) {
                textElement.removeEventListener("mouseover", handleMouseover);
            }
        };
    }, []);

    const handleMouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    let interval = null;

    return (
        <div className="inline-block whitespace-nowrap pad">
            <h1 id="Text" data-value={children}>
                {children}
            </h1>
        </div>
    );
}

export default TextAnimation;
