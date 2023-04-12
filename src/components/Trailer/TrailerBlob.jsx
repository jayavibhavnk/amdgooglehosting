import { useEffect } from "react";
import "../Page.css";

function TrailerBob() {
    useEffect(() => {
        const blob = document.getElementById("blob");
        document.body.onpointermove = (event) => {
            const { clientX, clientY } = event;
            blob.animate({ left: `${clientX}px`, top: `${clientY}px` }, { duration: 3000, fill: "forwards" });
        };
    }, []);

    return (
        <div>
            <div id="blob" className="z-1 overflow-hidden h-[300px] bg-white aspect-square absolute left-[50%] top-[50%] rounded-full"></div>
            <div id="blur" className="h-full overflow-hidden w-full absolute"></div>
        </div>
    );
}
export default TrailerBob;
