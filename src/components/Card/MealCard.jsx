import { useContext, useEffect } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import sunset from "../../assets/sunset.png";
import DateContext from "../../context/date";
import "./MealCard.css";

const MEALS = [
    { id: "1", name: "Morning", time: "08:30 AM" },
    { id: "2", name: "Afternoon", time: "12:30 PM" },
    { id: "3", name: "Evening", time: "5:30 PM" },
    { id: "4", name: "Night", time: "9:30 PM" },
];
function MealCard({ items }) {
    useEffect(() => {
        document.getElementById("meal-cards").onmousemove = (e) => {
            for (const card of document.getElementsByClassName("meal-card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
    }, []);

    const RenderedCards = MEALS.map((meal) => {
        return (
            <div className="meal-card">
                <div className="meal-card-content">
                    <div className="meal-card-image">
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
                    <div className="meal-card-info-wrapper m-0 text-white font-semibold">
                        <div className="meal-card-info">
                            <div className="meal-card-info-title">
                                <h3 className="font-bold">{meal.name}</h3>
                                <h4>
                                    {items.map((item) => {
                                        console.log(items);
                                        return <div>{item.meal === meal.id ? item.FoodItem : ""}</div>;
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
        <div id="meal-cards" className="flex justify-center items-center">
            {RenderedCards}
        </div>
    );
}
export default MealCard;
