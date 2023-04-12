import { Draggable, Droppable } from "react-beautiful-dnd";

function MenuDroppable({ filteredItems }) {
    return (
        <div className="absolute z-10 mt-2 w-[12%] bg-white rounded-lg shadow-lg">
            <Droppable droppableId="menuItems">
                {(provided) => (
                    <ul className="py-2 max-h-[400px] overflow-scroll" {...provided.droppableProps} ref={provided.innerRef}>
                        {filteredItems.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className="bg-white hover:bg-gray-400 transition-colors ease-linear duration-300 rounded p-2 mb-2 mt-2 interactable select-none"
                                    >
                                        {item.WorkoutName}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
}
export default MenuDroppable;
