import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

function ItemAddButton({ meal, setItems, items }) {
    return (
        <button
            data-type="add"
            className="flex items-center justify-center ml-[50%] text-gray-500 font-bold text-lg rounded-3xl border-dashed border  w-[30vw] min-h-[50px] hover:text-gray-300 transition-colors duration-300 mt-4 mb-20 interactable select-none"
            onClick={() => {
                const newItem = {
                    id: uuidv4(),
                    WorkoutName: "Item added",
                    meal: meal.id,
                    added: true,
                };
                setItems([...items, newItem]);
            }}
        >
            <AddIcon fontSize="medium" className="mr-2" />
            <span>Add item</span>
        </button>
    );
}

export default ItemAddButton;
