import DateSelect from "./DateSelect";
import { useState, useContext } from "react";
import DateContext from "../../context/date";
import dayjs from "dayjs";
import "./Panel.css";
import NavigateDateLeft from "./NavigateDateLeft";
import NavigateDateRight from "./NavigateDateRight";
import Progress from "./Progress";

function Panel() {
    const { date, setDate } = useContext(DateContext);
    // function to handle going to the next day
    const handleNextDay = () => {
        const nextDay = dayjs(date).add(1, "day");
        setDate(nextDay);
    };

    // function to handle going to the previous day
    const handlePrevDay = () => {
        const prevDay = dayjs(date).subtract(1, "day");
        setDate(prevDay);
    };

    // console.log(dayjs(date).add(1, "day"));
    return (
        <div className="relative bg_panel">
            <div className="lg:w-[35vw] w-[100vw] h-[50vh] lg:h-[109vh] float-right bg-slate-700 overflow-y-auto overflow-x-hidden z-10 box__shadow rounded-xl flex flex-col">
                <div
                    className="rounded-full flex flex-row items-center justify-evenly ml-6 h-[80px] shadow_navigator mr-6 mt-6 gap-14
                2"
                >
                    <div className="-mt-2">
                        <NavigateDateLeft handlePrev={handlePrevDay} />
                    </div>
                    <div className="">
                        <DateSelect updatedDate={date} handleDate={setDate} />
                    </div>
                    <div className="-mt-2">
                        <NavigateDateRight handleNext={handleNextDay} />
                    </div>
                </div>

                <div className="-mt-8">
                    <Progress />
                </div>
            </div>
        </div>
    );
}

export default Panel;
