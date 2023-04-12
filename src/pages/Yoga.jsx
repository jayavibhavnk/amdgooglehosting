import { Suspense, useState } from "react";
import Card from "../components/Card/Card";
import Virabhadrasana from "../components/Motion/Virabhadrasana";
import Trikonasana from "../components/Motion/Trikonasana";
import LoadingAnimation from "../components/Animation/LoadingAnimation";
import { IconButton, Tooltip } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import Link from "../components/link/Link";

const cards = [
    {
        title: "Trikonasana",
        image: "https://source.unsplash.com/N7Q8V9R_AVU",
        link: "trikonasana",
    },
    {
        title: "Virabhadrasana",
        image: "https://source.unsplash.com/5Yh35OCwL0U",
        link: "virabhadrasanat",
    },
];

function Yoga() {
    const [Yoga, setYoga] = useState(null);
    const handleClick = (title) => {
        setYoga(title);
    };
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient">
                <div className="flex flex-row gap-4">
                    {!Yoga && <p className="flex flex-row justify-center items-center w-full h-full font-[800] lg:text-3xl sm:text-2xl text-2xl py-8  text-white">Select the training</p>}
                    <div data-type="back" className="items-center justify-center mt-8 interactable">
                        <Tooltip title="Go Back">
                            <Link to="/workout">
                                <IconButton>
                                    <ArrowBackRounded sx={{ color: "#fff" }} />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
                <div className="max-w-screen-xl flex flex-nowrap">
                    {Yoga === "Virabhadrasana" ? (
                        <Virabhadrasana handleYoga={setYoga} />
                    ) : Yoga === "Trikonasana" ? (
                        <Trikonasana handleYoga={setYoga} />
                    ) : (
                        cards.map((card) => (
                            <div
                                className="flex"
                                onClick={() => {
                                    handleClick(card.title);
                                }}
                            >
                                <Card {...card} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
export default Yoga;
