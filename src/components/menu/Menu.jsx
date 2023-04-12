import { useEffect } from "react";
import yoga from "../../assets/yoga.jpg";
import "./Menu.css";
function Menu() {
    useEffect(() => {
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            };
        });
    }, []);

    return (
        <div className="m-0" style={{ backgroundColor: "rgb(20,20,20)" }}>
            <div id="menu" className=" items-center flex h-[100vh] w-[100vh]">
                <div id="menu-items" className="z-[2] relative text-white cursor-pointer block text-4xl">
                    <div class="interactable menu-item">Home</div>
                    <div class="interactable menu-item">Shop</div>
                    <div class="interactable menu-item">About</div>
                    <div class="interactable menu-item">Contact Us</div>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image" style={{ backgroundImage: yoga }}></div>
            </div>
        </div>
    );
}

export default Menu;
