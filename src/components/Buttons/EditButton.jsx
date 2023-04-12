import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

function EditButton({ editable, isEdit }) {
    const BootstrapTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: "#254974",
        },
        [`& .${tooltipClasses.tooltip}`]: {
            padding: 10,
            backgroundColor: "#254974",
        },
    }));
    return (
        <button onClick={editable} className="bg-gray-200 z-10 transition-colors hover:bg-gray-400 rounded-xl p-2 w-10 ml-auto interactable">
            {isEdit ? (
                <BootstrapTooltip title="Edit Done">
                    <DoneAllRoundedIcon />
                </BootstrapTooltip>
            ) : (
                <EditRoundedIcon />
            )}
        </button>
    );
}
export default EditButton;
