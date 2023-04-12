import styles from "../../../style";
import "./GetStarted.css";
import { arrowUp } from "../../../assets";
function GetStarted() {
    return (
        <div id="get__started" className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>
                <div className={`${styles.flexStart} flex`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 ">
                        <span className="text-grad">Get</span>
                    </p>
                    <img alt="arrow" src={arrowUp} className="w-[23px] h[23px] object-contain" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px] ">
                    <span className="text-grad">Started</span>
                </p>
            </div>
        </div>
    );
}

export default GetStarted;
