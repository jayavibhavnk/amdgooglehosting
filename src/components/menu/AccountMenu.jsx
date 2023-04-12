import { useState, Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import UserContext from "../../context/user";
import Link from "../link/Link";
import { auth, logout } from "../auth/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "../auth/auth";

function AccountMenu() {
    const { currentUser } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    console.log(currentUser.photoURL);
    const open = Boolean(anchorEl);

    // const value = useContext(UserContext);
    // const userObject = JSON.parse(localStorage.getItem("userObject"));

    const handleSignOut = () => {
        logout();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{}} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
                        {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                        <div className="w-[40%] h-[40%]">
                            <img className="flex items-center justify-center rounded-xl" src={currentUser.photoURL} alt="" />
                        </div>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "hidden",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={handleClose}>
                    <Link className="interactable " to={`/progress`}>
                        <div className="text-black">Profile</div>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className="interactable " to={`/friends`}>
                        <div className="text-black ">Friends</div>
                    </Link>
                </MenuItem>
                {/* <Divider /> */}
                <MenuItem onClick={handleClose}>
                    <Link className="interactable" to={`/rewards`}>
                        <div className="text-black">Rewards</div>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
        </Fragment>
    );
}

export default AccountMenu;
