import { IconButton } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function NavigateDateRight({ handleNext }) {
    return (
        <div className="flex flex-row justify-center items-center gap-6 mt-2">
            <IconButton data-type="right" onClick={handleNext} className="interactable scale-[2]" sx={{ color: "#fff" }}>
                <ChevronRightRoundedIcon />
            </IconButton>
        </div>
    );
}
export default NavigateDateRight;
