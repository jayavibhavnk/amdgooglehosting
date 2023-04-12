import { IconButton, Button } from "@mui/material";
import Link from "../link/Link";
import AccountMenu from "../menu/AccountMenu";
import { useState, useContext, useEffect } from "react";
import menu from "../../assets/main-menu.png";
import BasicMenu from "../menu/BasicMenu";
import Menu from "../menu/Menu";
import { AuthContext } from "../auth/auth";
import useNavigation from "../../hooks/use-navigation";

function Header() {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser);
    const { navigate } = useNavigation();
    const links = [
        { id: 1, label: "Workout", path: "/workout" },
        { id: 2, label: "Diet Plan", path: "/dietplan" },
        { id: 3, label: "Fitness Plan", path: "/fitnessplan" },
        { id: 4, label: "Progress", path: "/progress" },
        { id: 5, label: "Friends", path: "/friends" },
    ];
    const renderedLinks = links.map((link) => {
        return (
            <div key={link.id} className="interactable">
                {currentUser ? (
                    <Link activeClassName="" className="mt-1 hover:text-blue-300" to={link.path}>
                        {link.label}
                    </Link>
                ) : (
                    <Link activeClassName="" className="mt-1 hover:text-blue-300" to={"/animation"}>
                        {link.label}
                    </Link>
                )}
            </div>
        );
    });

    return (
        <div style={{ backgroundColor: "#0e1b2b" }} className="m-0 overflow-hidden relative flex w-full flex-row items-center justify-between py-3 gap-8 font-Rubik ">
            <Link className="ml-6" to={`/`}>
                <div className="py-1 interactable">LOGO</div>
            </Link>
            <div className=" flex-row py-1 justify-center items-center hidden md:flex gap-10">
                {renderedLinks}
                {currentUser && (
                    <div data-type="account" className="interactable -ml-8 mr-2">
                        <AccountMenu />
                    </div>
                )}
                {!currentUser && (
                    <Link className="interactable mr-6" to="/login">
                        <Button sx={{ borderRadius: "20px", backgroundColor: "#E0E1DD", color: "black", fontWeight: "bold" }} variant="contained" size="medium" disableElevation>
                            Log In
                        </Button>
                    </Link>
                )}
            </div>
            <div className=" md:hidden interactable">
                <IconButton variant="text " disableRipple>
                    <BasicMenu />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
