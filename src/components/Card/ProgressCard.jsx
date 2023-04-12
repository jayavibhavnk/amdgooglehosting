import { useEffect } from "react";
import "./ProgressCard.css";

function ProgressCard({ title, subTitle }) {
    useEffect(() => {
        const subtitle = document.getElementsByClassName("card-subtitle")[0];

        const createWord = (text, index) => {
            const word = document.createElement("span");

            word.innerHTML = `${text} `;

            word.classList.add("card-subtitle-word");

            word.style.transitionDelay = `${index * 40}ms`;

            return word;
        };

        const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

        const createSubtitle = (text) => text.split(" ").map(addWord);

        createSubtitle(`${subTitle}`);
    });

    return (
        <div class="card">
            <div class="card-content">
                <h3 class="card-title">{title}</h3>
                <h4 class="card-subtitle"></h4>
            </div>
            <i class="fa-solid fa-hat-witch card-icon"></i>
        </div>
    );
}
export default ProgressCard;
