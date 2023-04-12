import { useContext, useEffect } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import sunset from "../../assets/sunset.png";
import DateContext from "../../context/date";
import "./FitnessCard.css";

function FitnessCard({ meals, items }) {
    useEffect(() => {
        document.getElementById("cards").onmousemove = (e) => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
    }, []);

    const RenderedCards = meals.map((meal) => {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="card-image">
                        {meal.id === "1" ? (
                            <WbTwilightRoundedIcon fontSize="large" className="scale-[2.5]" sx={{ color: "white" }} />
                        ) : meal.id === "2" ? (
                            <WbSunnyRoundedIcon fontSize="large" className="scale-[2.5]" sx={{ color: "white" }} />
                        ) : meal.id === "3" ? (
                            <img className="scale-[0.33]" alt="" src={sunset} />
                        ) : (
                            <DarkModeRoundedIcon fontSize="large" className="scale-[2.5]" sx={{ color: "white" }} />
                        )}
                    </div>
                    <div className="card-info-wrapper m-0 text-white font-semibold">
                        <div className="card-info">
                            <div className="card-info-title">
                                <h3 className="font-bold">{meal.name}</h3>
                                <h4>
                                    {items.map((item) => {
                                        console.log(items);
                                        return <div>{item.meal === meal.id ? item.WorkoutName : ""}</div>;
                                    })}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="cards" className="flex justify-center items-center">
            {RenderedCards}
        </div>
    );
}
export default FitnessCard;
