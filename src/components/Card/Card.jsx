import { Tilt } from "react-tilt";

const Card = ({ title, image, link }) => {
    return (
        <Tilt className="flex-1 p-8" options={{ max: 15 }}>
            <div data-type={title} className="relative block w-full h-[90%] rounded-xl overflow-hidden cursor-pointer interactable">
                <img className="w-full h-full object-cover filter blur-[2px] opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100" src={image} alt={title} />
                <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white font-bold text-3xl">{title}</h2>
                </div>
            </div>
        </Tilt>
    );
};

export default Card;
