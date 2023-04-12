import { useState, useContext, useEffect, Fragment } from "react";
import DateContext from "../../context/date";
import dayjs from "dayjs";
import { DragDropContext } from "react-beautiful-dnd";
import food from "../../assets/food.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./Panel.css";
import MenuDroppable from "../Droppables/MenuDroppable.";
import SearchMenuButton from "../Buttons/SearchMenuButton";
import ItemDropSpace from "../Droppables/ItemDropSpace";
import { data } from "../Data/WorkoutData";
import WorkoutRecommendation from "../Recommendation/WorkoutRecommendation";

import { doc, setDoc, collection, getDocs, query, where, deleteDoc } from "firebase/firestore";
import { db } from "../../components/auth/Firebase";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../components/auth/auth";

let menuItems = data;

const FitnessPlanner = () => {
    const { date, MEALS } = useContext(DateContext); // Date for the current items
    const collectionDate = dayjs(date).format("MMMM,DD");

    const { currentUser } = useContext(AuthContext);
    const currentUserId = currentUser ? currentUser.uid : null;

    const [items, setItems] = useState([]); // items to add to the db
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(menuItems);
    const [docRef, setDocRef] = useState(null);
    const [collectionRef, setCollectionRef] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const userRef = collection(db, "users");
            const userDocSnapshot = await getDocs(query(userRef, where("uid", "==", currentUserId)));
            if (!userDocSnapshot.empty) {
                // Get the first document from the query snapshot
                const userDocRef = userDocSnapshot.docs[0].ref;
                setDocRef(userDocRef);
            } else {
                // No documents match the query
                console.log("No documents match the query!");
            }
            setCollectionRef(collection(docRef, "date-" + collectionDate));
        };
        fetchData();
        items.map(async (item) => {
            try {
                const itemRef = doc(collectionRef, item.id);
                await setDoc(itemRef, item);
            } catch (error) {
                console.log(error);
            }
        });
    }, [items, date]);

    useEffect(() => {
        setItems([]);
        let newItems = [];
        let newFilteredItems = [];
        const fetchData = async () => {
            try {
                // Get the collection reference using the current user ID and the current date
                const userRef = collection(db, "users");
                const userDocSnapshot = await getDocs(query(userRef, where("uid", "==", currentUserId)));
                if (!userDocSnapshot.empty) {
                    const userDocRef = userDocSnapshot.docs[0].ref;
                    const collectionRef = collection(userDocRef, "date-" + dayjs(date).format("MMMM,DD"));
                    // Get the subcollection documents
                    const subDocsSnapshot = await getDocs(collectionRef);
                    subDocsSnapshot.forEach((doc) => {
                        if (doc.exists()) {
                            const subDocData = doc.data();
                            newItems = [...newItems, subDocData];
                            newFilteredItems = [...newFilteredItems, subDocData];
                            console.log("Here");
                            // console.log(filteredItems[filteredItems.findIndex((item) => item.id === subDocData.id)]);
                        } else {
                            console.log("Subdocument does not exist!");
                        }
                    });
                    const filteredArray = filteredItems.filter((obj) => !newFilteredItems.some((filterObj) => filterObj.id === obj.id));
                    setFilteredItems(filteredArray);
                    setItems(newItems);
                } else {
                    console.log("No documents match the query!");
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [date, currentUserId]);

    useEffect(() => {
        const filtered = menuItems.filter((item) => item.WorkoutName.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredItems(filtered);
    }, [searchQuery]);

    const handleEditStatus = () => {
        setIsReady(true);
    };

    const handleRecommendation = async (workoutPlan) => {
        setFilteredItems(menuItems);
        setItems([]);

        const userRef = collection(db, "users");
        const userDocSnapshot = await getDocs(query(userRef, where("uid", "==", currentUserId)));
        if (!userDocSnapshot.empty) {
            const userDocRef = userDocSnapshot.docs[0].ref;
            const collectionRef = collection(userDocRef, "date-" + dayjs(date).format("MMMM,DD"));
            // Get the subcollection documents
            const subDocsSnapshot = await getDocs(collectionRef);
            subDocsSnapshot.forEach(async (doc) => {
                if (doc.exists()) {
                    await deleteDoc(doc.ref);
                } else {
                    console.log("Subdocument does not exist!");
                }
            });
        }

        const filteredArray = filteredItems.filter((obj) => !workoutPlan.some((filterObj) => filterObj === obj.WorkoutName));
        const newfilteredArray = filteredItems.filter((obj) => workoutPlan.some((filterObj) => filterObj === obj.WorkoutName));

        setItems(newfilteredArray);
        setFilteredItems(filteredArray);
    };

    const handleTextChange = (text, item) => {
        const newArray = [...items];
        const index = newArray.findIndex((obj) => obj.id === item.id);
        const updatedObject = { ...newArray[index], WorkoutName: text };
        newArray.splice(index, 1, updatedObject);
        setItems(newArray);
    };

    const handleDocDelete = async (itemId) => {
        const userRef = collection(db, "users");
        const userDocSnapshot = await getDocs(query(userRef, where("uid", "==", currentUserId)));
        if (!userDocSnapshot.empty) {
            const userDocRef = userDocSnapshot.docs[0].ref;
            const collectionRef = collection(userDocRef, "date-" + dayjs(date).format("MMMM,DD"));
            const subDocsSnapshot = await getDocs(collectionRef);

            subDocsSnapshot.forEach((doc) => {
                if (doc.id === itemId) {
                    deleteDoc(doc.ref);
                }
            });
        }
    };

    const handleClick = (e) => {
        const found = items.find((item) => item.id === e);
        if (found.added === true) {
            const newItems = items.filter((item) => item.id !== e);
            console.log(newItems);
            setItems(newItems);
        } else {
            menuItems = [...menuItems, found];
            setFilteredItems(menuItems);
            const newItems = items.filter((item) => item.id !== e);
            setItems(newItems);
            handleDocDelete(e);
        }
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const sourceMealId = result.source.droppableId;
        const destinationMealId = result.destination.droppableId;

        if (sourceMealId !== destinationMealId) {
            if (sourceMealId === "menuItems") {
                const dragObj = result.draggableId;
                const newItems = [...items, filteredItems.find((item) => item.id === dragObj)];
                newItems[newItems.findIndex((item) => item?.id === dragObj)].meal = destinationMealId;

                const index = filteredItems.findIndex((item) => item?.id === dragObj);

                // check if the object exists
                if (index !== -1) {
                    // remove the object
                    menuItems.splice(index, 1);
                    setFilteredItems(menuItems);
                    setItems(newItems);
                }
            } else {
                if (destinationMealId !== "menuItems") {
                    const newItems = Array.from(items);
                    const [reorderedItem] = newItems.splice(result.source.index, 1);
                    // Update the meal value of the reordered item
                    reorderedItem.meal = destinationMealId || "";

                    newItems.splice(result.destination.index, 0, reorderedItem);
                    setItems(newItems);
                }
            }
        } else {
            if (destinationMealId !== "menuItems") {
                const newItems = Array.from(items);
                const [reorderedItem] = newItems.splice(result.source.index, 1);
                newItems.splice(result.destination.index, 0, reorderedItem);
                setItems(newItems);
            }
        }
    };

    const renderedMeals = MEALS.map((meal) => {
        return (
            <div className="flex flex-row w-[50%] " key={meal.id}>
                <div className="flex flex-col mt-7 w-[20%] text-white">
                    <div className="text-sm -mb-2 text-gray-400 font- select-none w-[70px]">{meal.time}</div>
                    <div className="text-lg font-bold select-none">{meal.name}</div>
                </div>
                <div className="mb-10">
                    {
                        <div className="flex flex-col items-start justify-center ml-[40px] w-[200px]">
                            <ItemDropSpace
                                items={items}
                                meal={meal}
                                handleEditStatus={handleEditStatus}
                                isEdit={isEdit}
                                isReady={isReady}
                                handleTextChange={handleTextChange}
                                handleClick={handleClick}
                            />
                            {/* <ItemAddButton meal={meal} setItems={setItems} items={items} /> */}
                        </div>
                    }
                    <section className="absolute mt-8 h-[2px] w-[57%] bg-slate-600"></section>
                </div>
            </div>
        );
    });

    return (
        <div className="">
            <div className="font-[800] lg:text-3xl sm:text-2xl text-2xl w-full text-white flex flex-row gap-2 justify-center items-center select-none mt-4">
                <div className="cursor-pointer ">{dayjs(date).format("dddd")}</div>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row ml-10 mt-10 justify-between">
                    <div>
                        {isEdit && (
                            <div className="absolute text-xl w-[50%] -translate-y-3 text-gray-400 flex items-center justify-center">
                                <span>You can edit now</span>
                                <div className="ml-1 animate-bounce">
                                    <KeyboardDoubleArrowDownIcon />
                                </div>
                            </div>
                        )}
                        {renderedMeals}
                    </div>
                    <div className="-mt-8">
                        <div className="mt-14">
                            <div className="absolute -translate-y-4 w-24 h-24 scale-[2] mt-4 z-1">
                                <img alt="" src={food} />
                            </div>
                            <div className="relative z-10 mr-20 flex flex-col gap-4 text-black">
                                {/* <EditButton editable={editable} isEdit={isEdit} /> */}
                                <SearchMenuButton setIsOpen={setIsOpen} isOpen={isOpen} filteredItems={filteredItems} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                        </div>
                        {isOpen && <MenuDroppable filteredItems={filteredItems} />}
                    </div>
                </div>
            </DragDropContext>
            <div>
                <WorkoutRecommendation handleRecommendation={handleRecommendation} workouts={data} />
            </div>
        </div>
    );
};

export default FitnessPlanner;
