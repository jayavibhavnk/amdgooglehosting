import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";

function ItemDropSpace({ items, handleEditStatus, isEdit, isReady, handleTextChange, handleClick, meal }) {
    return (
        <Droppable droppableId={meal.id}>
            {(provided) => (
                <>
                    <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 mt-6 rounded-3xl p-2 ml-[50%] w-[30vw] min-h-[50px] h-auto ">
                        {items.length === 0 && <span className="flex items-center justify-center mt-1 text-gray-600 select-none">....Drag Over The Food Items....</span>}
                        {items.length > 0 &&
                            items.map((item, index) => {
                                if (item?.meal === meal.id) {
                                    return (
                                        <DraggableItem
                                            item={item}
                                            handleEditStatus={handleEditStatus}
                                            index={index}
                                            isEdit={isEdit}
                                            isReady={isReady}
                                            handleTextChange={handleTextChange}
                                            handleClick={handleClick}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        {provided.placeholder}
                    </div>
                </>
            )}
        </Droppable>
    );
}

export default ItemDropSpace;
