import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Draggable } from "react-beautiful-dnd";

function DraggableItem({ item, handleEditStatus, index, isEdit, isReady, handleTextChange, handleClick }) {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onClick={handleEditStatus}
                    className="bg-gray-200 rounded-xl px-4 py-1 items-center justify-center flex flex-row mb-2 mt-2 font-bold text-xl select-none"
                >
                    {isEdit && isReady && item.added ? (
                        <input
                            onChange={(e) => {
                                handleTextChange(e.target.value, item);
                            }}
                            value={item.WorkoutName}
                            type="text"
                        ></input>
                    ) : (
                        item.WorkoutName
                    )}
                    <ClearRoundedIcon
                        fontSize="medium"
                        onClick={() => {
                            handleClick(item.id);
                        }}
                        className="ml-auto mr-2 interactable "
                    />
                </div>
            )}
        </Draggable>
    );
}
export default DraggableItem;
