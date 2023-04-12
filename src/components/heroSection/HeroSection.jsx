import "./HeroSection.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import man from "../../assets/Man.png";
import woman from "../../assets/woman.png";
import back from "../../assets/back.jpg";
import ModelViewer from "../Model/Model";
import Scene from "../Model/Model";
import TextAnimation from "../Animation/TextAnimation";

function HeroSection() {
    return (
        <section className="w-screen h-auto lg:h-[90vh] bg__gradient pb-20 overflow-y-hidden overflow-hidden">
            <div className="md:container mx-5 md:mx-20 sm:mx-20 flex w-full h-full flex-wrap  lg:flex-nowrap  justify-between ">
                <div className="mt-16 w-full" style={{ zIndex: 10 }}>
                    <h1 className="text-4xl font-bold lg:text-8xl lg:font-extrabold sm:text-7xl md:text-7xl text-white">
                        POWERING YOUR
                        <TextAnimation>WORKOUT</TextAnimation> WITH <span className="text-gradient ">AI</span>
                    </h1>
                    <p className="lg:text-3xl lg:font-bold md:text-3xl sm:text-3xl w-10/12 text-white mt-2">Fuel the future of workout with the application Of 3d motion tracking software.</p>
                    <div className=" mt-4 ">
                        <button type="button" className="interactable bg-white cus_buttons font-bold py-2 px-4 rounded ">
                            Try Now
                        </button>
                        <button type=" button" class="interactable text-white font-bold rounded-lg text-lg pl-10 py-2.5 text-center inline-flex items-center ">
                            Learn More
                            <RiArrowDropDownLine size="40px" />
                        </button>
                    </div>
                </div>
                <div className="absolute -mr-[6%] top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 hidden lg:block">
                    <img alt="woman" src={woman} width="350px" />
                </div>
                <div className="-mr-[6%] lg:mt-24 mt-5 lg:w-10/12 sm:w-8/12 w-9/12" style={{ zIndex: 1 }}>
                    <img className="float-right" alt="man" src={man} width="350px" />
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
