import Header from "./components/Header/Header";
import WelcomePage from "./pages/WelcomePage";
import Route from "./components/route/Route";
import DietPlanPage from "./pages/DietPlanPage";
import WorkoutPage from "./pages/WorkoutPage";
import FitnessPlanPage from "./pages/FitnessPlanPage";
import ProgressPage from "./pages/ProgressPage";
import FriendsPage from "./pages/FriendsPage";
import Workout from "./pages/Workout";
import SignInAnimation from "./components/Animation/NotSIgnInAnimation";
import Yoga from "./pages/Yoga";
import LoginFirebase from "./components/loginPage/LoginFirebase";
import ResetFirebase from "./components/loginPage/ResetFirebase";
import RegisterFirebase from "./components/loginPage/RegisterFirebase";
import { useContext, useState } from "react";
import "./App.css";
import RewardsPage from "./pages/RewardsPage";
import { AuthContext } from "./components/auth/auth";
import TrailerBob from "./components/Trailer/TrailerBlob";
import Trailer from "./components/Trailer/Trailer";
import DateContext from "./context/date";
import dayjs from "dayjs";

const MEALS = [
    { id: "1", name: "Breakfast", time: "08:30 AM" },
    { id: "2", name: "Lunch", time: "12:30 PM" },
    { id: "3", name: "Snacks", time: "4:30 PM" },
    { id: "4", name: "Dinner", time: "8:30 PM" },
];

function App() {
    const { currentUser } = useContext(AuthContext);
    const [date, setDate] = useState(dayjs());
    return (
        <div className="app scrollbar z-0 overflow-hidden">
            <Trailer />
            {/* <TrailerBob /> */}
            <div className="m-0 overflow-hidden">
                <Header />
            </div>
            <section className="z-10 h-1 bg-slate-700"></section>
            <DateContext.Provider value={{ date, setDate, MEALS }}>
                {currentUser ? (
                    <div className="z-10 m-0 overflow-hidden">
                        <Route path="/workout">
                            <WorkoutPage />
                        </Route>
                        <Route path="/">
                            <WelcomePage />
                        </Route>
                        <Route path="/dietplan">
                            <DietPlanPage />
                        </Route>
                        <Route path="/fitnessplan">
                            <FitnessPlanPage />
                        </Route>
                        <Route path="/progress">
                            <ProgressPage />
                        </Route>
                        <Route path="/friends">
                            <FriendsPage />
                        </Route>

                        <Route path="/rewards">
                            <RewardsPage />
                        </Route>
                        <Route path="/yoga">
                            <Yoga />
                        </Route>
                        <Route path="/fitness">
                            <Workout />
                        </Route>
                    </div>
                ) : (
                    <div className="m-0 overflow-hidden">
                        <Route path="/">
                            <WelcomePage />
                        </Route>
                        <Route path="/animation">
                            <SignInAnimation />
                        </Route>

                        <Route path="/login">
                            {/* <LogInPage handleChange={handleUser} /> */}
                            <LoginFirebase />
                        </Route>
                        <Route path="/reset">
                            <ResetFirebase />
                        </Route>
                        <Route path="/register">
                            <RegisterFirebase />
                        </Route>
                    </div>
                )}
            </DateContext.Provider>
        </div>
    );
}

export default App;
