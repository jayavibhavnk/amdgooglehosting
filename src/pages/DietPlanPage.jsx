import "./Page.css";
import Panel from "../components/Planner/Panel";
import MealPlanner from "../components/Planner/MealPlanner";
import { useContext } from "react";
import { AuthContext } from "../components/auth/auth";
import SignInAnimation from "../components/Animation/NotSIgnInAnimation";

function DietPlanPage() {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="">
            {currentUser ? (
                <div className="diet flex lg:flex-row flex-col">
                    <div className="article-panel article-section">
                        <Panel />
                    </div>
                    <div className="article-content article-section flex-1">
                        <MealPlanner />
                    </div>
                </div>
            ) : (
                <SignInAnimation />
            )}
        </div>
    );
}
export default DietPlanPage;
