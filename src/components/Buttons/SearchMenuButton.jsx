import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchMenuButton({ setIsOpen, isOpen, filteredItems, searchQuery, setSearchQuery }) {
    return (
        <button
            type="button"
            className="bg-gray-200 z-10 text-gray-900 font-semibold py-2 px-4 rounded-xl inline-flex items-center interactable select-none transition-colors hover:bg-gray-400"
            onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }}
        >
            {!isOpen && <span className="mr-2">{filteredItems.length === 0 ? "No items found" : searchQuery || "Select an item"}</span>}
            {isOpen && (
                <input
                    type="text"
                    className="bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-xl inline-flex items-center interactable transition-colors hover:bg-gray-200 select-none "
                    value={searchQuery}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    onChange={(e) => {
                        e.stopPropagation();
                        setSearchQuery(e.target.value);
                    }}
                    placeholder="Search items"
                />
            )}
            <SearchRoundedIcon sx={{ marginLeft: 1 }} />
        </button>
    );
}
export default SearchMenuButton;
