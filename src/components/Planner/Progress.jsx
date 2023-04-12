import sunset from "../../assets/sunset.png";
import { useContext } from "react";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import calorie from "../../assets/calorie.png";
import DateContext from "../../context/date";
import "./Panel.css";

function Progress() { 
    const { MEALS } = useContext(DateContext);

    return (
        <div className="lg:text-4xl lg:font-bold md:text-3xl sm:font-[600] md:font-[800] sm:text-3xl text-2xl w-full text-white flex flex-col gap-4 mt-20 ml-8 lg:ml-12 ">
            <div>
                <p className="cursor-default">Progress Report</p>
            </div>
            <div className="flex flex-col gap-4">
                {MEALS.map((meal, index) => (
                    <div className="flex flex-row gap-4 w-[80%]">
                        <div className="flex bg_panel items-center justify-center rounded-[50%] mt-2 h-12 w-12">
                            {meal.id === "1" ? (
                                <WbTwilightRoundedIcon fontSize="medium" className="-mt-1" />
                            ) : meal.id === "2" ? (
                                <WbSunnyRoundedIcon fontSize="medium" className="" />
                            ) : meal.id === "3" ? (
                                <img className=" w-6 h-6" alt="" src={sunset} />
                            ) : (
                                <DarkModeRoundedIcon fontSize="medium" className="" />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl">{meal.name}</p>
                            <p className="text-lg">{meal.time}</p>
                        </div>
                        <div className="flex flex-row justify-center items-center ml-auto mt-1">
                            <p className="text-2xl ">223 Kcal</p>
                            <img className="w-8 h-8" alt="" src={calorie} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Progress;
