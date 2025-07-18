"use client";

import { useState, useEffect } from "react";
import { Header } from "@/app/page";
import { useSpring, animated } from "react-spring";

import "../../app/scss/leaderboard.scss";
import "../../app/scss/home.scss";

// Function to calculate total points
const calculateTotalPoints = (medals) => {
  const medalTypes = ["Gold", "Silver", "Bronze", "Fourth"];
  let totalPoints = 0;

  medalTypes.forEach((medalType) => {
    medals[medalType].forEach((medal) => {
      totalPoints += medal.points;
    });
  });

  return totalPoints;
};

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [selectedMedal, setSelectedMedal] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const overlayProps = useSpring({
    opacity: selectedMedal ? 1 : 0,
    transform: selectedMedal ? "translateY(0)" : "translateY(-100%)",
  });

  useEffect(() => {
    // Simulate loading JSON data (in real-world, you can use fetch or import)
    const data = require("../../data/leaderboard.json");

    // Add total points to each house data
    const housesWithTotalPoints = data.map((houseData) => {
      const totalPoints = calculateTotalPoints(houseData.medals);
      return { ...houseData, totalPoints };
    });

    // Sort the houses by total points in descending order
    housesWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);
    setLeaderboardData(housesWithTotalPoints);
  }, []);

  const handleMedalClick = (medalType, house) => {
    setSelectedMedal(medalType);
    setSelectedHouse(house);
  };

  const handleCloseOverlay = () => {
    setSelectedMedal(null);
    setSelectedHouse(null);
  };

  // Close modal when clicking outside
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      handleCloseOverlay();
    }
  };

  // Close modal when pressing the Escape key
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      handleCloseOverlay();
    }
  };

  useEffect(() => {
    // Add event listener for outside click and Escape key press
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listeners when the component is unmounted
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <div id="leaderboard">
          <div className="ribbon"></div>
          <table>
            <thead>
              <tr>
                <td className="number"></td>
                <td className="name">House</td>
                <td className="name">🥇</td>
                <td className="name">🥈</td>
                <td className="name">🥉</td>
                <td className="name">⓸</td>
                <td className="name">Total</td>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((house, index) => {
                const goldMedals = house.medals.Gold.length;
                const silverMedals = house.medals.Silver.length;
                const bronzeMedals = house.medals.Bronze.length;
                const fourthMedals = house.medals.Fourth.length;
                return (
                  <tr key={house.house}>
                    <td className="number">
                      {/* {index === 0 ? (
                        <img
                          style={{ paddingLeft: "0px", marginLeft: "-10px" }}
                          className="gold-medal"
                          src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                          alt="gold medal"
                        />
                      ) : ( */}
                      {index + 1}
                      {/* )} */}
                    </td>
                    <td className="name">{house.house}</td>
                    <td
                      className="name medal"
                      onClick={() => handleMedalClick("Gold", house)}
                    >
                      {goldMedals}
                    </td>
                    <td
                      className="name medal"
                      onClick={() => handleMedalClick("Silver", house)}
                    >
                      {silverMedals}
                    </td>
                    <td
                      className="name medal"
                      onClick={() => handleMedalClick("Bronze", house)}
                    >
                      {bronzeMedals}
                    </td>
                    <td
                      className="name medal"
                      onClick={() => handleMedalClick("Fourth", house)}
                    >
                      {fourthMedals}
                    </td>
                    <td className="points">{house.totalPoints}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>

      {/* Overlay */}
      {selectedMedal && selectedHouse && (
        <animated.div className="overlay" style={overlayProps}>
          <div className="overlay-content">
            <h2>
              {selectedHouse.house} - {selectedMedal} Medals
            </h2>
            <ul className="medal-list">
              {selectedHouse.medals[selectedMedal].map((medal, index) => (
                <li key={index}>
                  <strong>{medal.game}</strong>: {medal.points} points
                </li>
              ))}
            </ul>
            <button onClick={handleCloseOverlay}>Close</button>
          </div>
        </animated.div>
      )}
    </>
  );
}
