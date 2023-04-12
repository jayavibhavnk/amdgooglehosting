import { IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function NavigateDate({ handlePrev, handleNext }) {
    return (
        <div className="flex flex-row justify-center items-center gap-6 mt-2">
            <IconButton data-type="left" onClick={handlePrev} className="interactable scale-[2]" sx={{ color: "#fff" }}>
                <ChevronLeftRoundedIcon />
            </IconButton>
            <IconButton data-type="right" onClick={handleNext} className="interactable scale-[2]" sx={{ color: "#fff" }}>
                <ChevronRightRoundedIcon />
            </IconButton>
        </div>
    );
}
export default NavigateDate;
