import Link from "../components/link/Link";
import "./Page.css";
import Card from "../components/Card/Card";

const cards = [
    {
        title: "Yoga",
        image: "https://source.unsplash.com/Dqx4XWuXu7w",
        link: "yoga",
    },
    {
        title: "Workout",
        image: "https://source.unsplash.com/sHfo3WOgGTU",
        link: "fitness",
    },
];

const TwoBigCards = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient">
                <div>
                    <p className="flex justify-center items-center w-full h-full font-[800] lg:text-3xl sm:text-2xl text-2xl py-8 -mt-6 text-white">Select the training</p>
                </div>

                <div className="max-w-screen-xl flex flex-nowrap">
                    {cards.map((card) => (
                        <Link className="flex flex-row" to={`/${card.link}`} key={card.title}>
                            <div className="flex">
                                <Card {...card} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TwoBigCards;
