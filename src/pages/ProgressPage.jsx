import { useContext, useEffect, useState } from "react";
import DateSelect from "../components/Planner/DateSelect";
import NavigateDateLeft from "../components/Planner/NavigateDateLeft";
import NavigateDateRight from "../components/Planner/NavigateDateRight";
import DateContext from "../context/date";
import dayjs from "dayjs";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { AuthContext } from "../components/auth/auth";
import { db } from "../components/auth/Firebase";
import FitnessCard from "../components/Card/FitnessCard";
import MealCard from "../components/Card/MealCard";

function ProgressPage() {
    const { date, MEALS, setDate } = useContext(DateContext);
    const { currentUser } = useContext(AuthContext);
    const currentUserId = currentUser ? currentUser.uid : null;

    const [fitnessItems, setFitnessItems] = useState([]);
    const [mealItems, setMealItems] = useState([]);

    const handleNextDay = () => {
        const nextDay = dayjs(date).add(1, "day");
        setDate(nextDay);
    };

    // function to handle going to the previous day
    const handlePrevDay = () => {
        const prevDay = dayjs(date).subtract(1, "day");
        setDate(prevDay);
    };

    useEffect(() => {
        setFitnessItems([]);
        setMealItems([]);
        let newFitnessItems = [];
        let newMealItems = [];
        const fetchData = async () => {
            try {
                // Get the collection reference using the current user ID and the current date
                const userRef = collection(db, "users");
                const userDocSnapshot = await getDocs(query(userRef, where("uid", "==", currentUserId)));
                if (!userDocSnapshot.empty) {
                    const userDocRef = userDocSnapshot.docs[0].ref;

                    const dateCollectionRef = collection(userDocRef, "date-" + dayjs(date).format("MMMM,DD"));
                    const subDateDocsSnapshot = await getDocs(dateCollectionRef);

                    const mealCollectionRef = collection(userDocRef, "meal-" + dayjs(date).format("MMMM,DD"));
                    const subMealDocsSnapshot = await getDocs(mealCollectionRef);

                    subDateDocsSnapshot.forEach((doc) => {
                        if (doc.exists()) {
                            const subDocData = doc.data();
                            newFitnessItems = [...newFitnessItems, subDocData];
                        } else {
                            console.log("Subdocument does not exist!");
                        }
                    });

                    subMealDocsSnapshot.forEach((doc) => {
                        if (doc.exists()) {
                            const subDocData = doc.data();
                            console.log(subDocData);
                            newMealItems = [...newMealItems, subDocData];
                        } else {
                            console.log("Subdocument does not exist!");
                        }
                    });
                    setFitnessItems(newFitnessItems);
                    setMealItems(newMealItems);
                } else {
                    console.log("No documents match the query!");
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [date, currentUserId]);
    return (
        <div className="m-0 overflow-auto bg-gradient h-screen">
            <div className="rounded-full flex flex-row items-center justify-evenly ml-12 mr-12 h-[80px] shadow_navigator mt-6 gap-[20rem]">
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
            <div>
                <div className="flex items-center justify-center text-2xl font-bold text-white mt-[30px] mb-[30px]">Fitness Plan</div>
                <div className="flex flex-row gap-1 items-center justify-center mx-auto">
                    <FitnessCard meals={MEALS} items={fitnessItems} />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center text-2xl font-bold text-white mt-[30px] mb-[30px]">Meal Plan</div>
                <div className="flex flex-row gap-1 items-center justify-center mx-auto">
                    <MealCard items={mealItems} />
                </div>
            </div>
        </div>
    );
}

export default ProgressPage;
