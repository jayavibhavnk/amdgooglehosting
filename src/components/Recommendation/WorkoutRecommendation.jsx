import React, { useState } from "react";

function WorkoutRecommendation({ workouts, handleRecommendation }) {
    const [Level, setLevel] = useState("Beginner");
    const [ExpectedkcalLost, setExpectedkcalLost] = useState(200);
    const [workoutPlan, setWorkoutPlan] = useState([]);
    const [preferredTime, setPreferredTime] = useState("Morning");

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };

    const handleCaloriesChange = (event) => {
        setExpectedkcalLost(parseInt(event.target.value));
    };

    const handleTimeChange = (event) => {
        setPreferredTime(event.target.value);
    };

    const handleGenerateWorkout = () => {
        setWorkoutPlan([]);
        const filteredWorkouts = workouts.filter((workout) => workout.Level === Level);
        const sortedWorkouts = filteredWorkouts.sort((a, b) => a.ExpectedkcalLost - b.ExpectedkcalLost);
        let totalCalories = 0;
        const selectedWorkouts = [];

        while (totalCalories < ExpectedkcalLost && selectedWorkouts.length < sortedWorkouts.length) {
            const randomIndex = Math.floor(Math.random() * sortedWorkouts.length);
            const randomWorkout = sortedWorkouts[randomIndex];

            if (!selectedWorkouts.includes(randomWorkout.WorkoutName)) {
                selectedWorkouts.push(randomWorkout.WorkoutName);
                totalCalories += randomWorkout.ExpectedkcalLost;
            }
        }
        handleRecommendation(selectedWorkouts);
        setWorkoutPlan(selectedWorkouts);
    };

    return (
        <div className="max-w-lg ml-10 mt-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Workout Recommendation</h2>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2" htmlFor="Level">
                    Level
                </label>
                <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Level"
                    name="Level"
                    value={Level}
                    onChange={handleLevelChange}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2" htmlFor="ExpectedkcalLost">
                    Expected Calories
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ExpectedkcalLost"
                    type="number"
                    name="ExpectedkcalLost"
                    value={ExpectedkcalLost}
                    onChange={handleCaloriesChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2" htmlFor="preferredTime">
                    Preferred Time
                </label>
                <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="preferredTime"
                    name="preferredTime"
                    value={preferredTime}
                    onChange={handleTimeChange}
                >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleGenerateWorkout}>
                Generate Workout Plan
            </button>
            {workoutPlan.length > 0 ? (
                <>
                    <h3 className="text-2xl font-bold mb-2 text-gray-200 mt-2">Your {preferredTime} Workout Plan:</h3>
                    <ul className="list-disc pl-4">
                        {workoutPlan.map((workout, index) => (
                            <li className="text-gray-200 text-xl" key={index}>
                                {workout}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default WorkoutRecommendation;
