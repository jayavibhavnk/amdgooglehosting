import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import MenuItem from "@mui/material/MenuItem";
import menu from "../../assets/main-menu.png";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Typography } from "@mui/material";
import Link from "../link/Link";

const style_box = {
    position: "absolute",
    transform: "translate(24%, 7%)",
    width: 1000,
    height: 1000,
    fontWeight: 800,
    background: "linear-gradient(to bottom, #2f4264 0% , transparent 90% )",
    borderRadius: "60%",
    boxShadow: 24,
    p: 4,
};
const style_text = {
    fontWeight: 600,
    cursor: "pointer",
};

function BasicMenu() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div id="menu">
            <Modal className="" open={open} onClose={handleClose}>
                <Box className="card overflow-y-hidden" sx={style_box}>
                    <div className="flex flex-col items-center justify-center mt-[25%] ml-[-45%] gap-7">
                        <Link className="interactable " path="/workout">
                            <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                                Workout
                            </Typography>
                        </Link>
                        <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                            Diet Plan
                        </Typography>
                        <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                            Fitness Plan
                        </Typography>
                        <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                            Progress
                        </Typography>
                        <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                            Rewards
                        </Typography>
                        <Typography color="White" sx={style_text} id="modal-modal-title" variant="h4" component="h2">
                            Sign out
                        </Typography>
                    </div>
                </Box>
            </Modal>
            <IconButton onClick={handleOpen} aria-label="fingerprint" color="secondary">
                <img className="w-6 h-4" src={menu} alt="" />
            </IconButton>
        </div>
    );
}
export default BasicMenu;
