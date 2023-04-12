import { IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

function NavigateDateLeft({ handlePrev }) {
    return (
        <div className="flex flex-row justify-center items-center mt-2">
            <IconButton data-type="left" onClick={handlePrev} className="interactable scale-[2]" sx={{ color: "#fff" }}>
                <ChevronLeftRoundedIcon />
            </IconButton>
        </div>
    );
}
export default NavigateDateLeft;
