import FloatingButton from "@/components/FloatingButton";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import GlootTheme from "@/utils/themes/gloot-theme";
import WhiteTheme from "@/utils/themes/white-theme";
import useWindowSize from "../../../utils/functions";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "../../../app/scss/fixture.scss";

// Additional import for mobile-friendly animation (if needed)
import { useSpring, animated } from "react-spring";

export default function Fixtures() {
  const router = useRouter();
  const { game, format } = router.query;

  const [fixturesData, setFixturesData] = useState(null);
  const [isFixtureLoaded, setIsFixtureLoaded] = useState(false);
  const [isFinalsShowing, setIsFinalsShowing] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null); // Track selected match details
  const [width, height] = useWindowSize(); // Dynamically get window size
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 175, 500);

  const isMobile = width <= 768; // Example threshold for mobile

  useEffect(() => {
    if (!game || !format) return;

    async function loadData() {
      try {
        switch (game) {
          case "carroms":
            switch (format) {
              case "mens":
                const { carromsMensFixtures } = await import(
                  "@/data/carroms/mens"
                );
                setFixturesData(carromsMensFixtures);
                break;

              case "womens":
                const { carromsWomensFixtures } = await import(
                  "@/data/carroms/womens"
                );
                setFixturesData(carromsWomensFixtures);
                break;

              case "mixed":
                const { carromsMixedFixtures } = await import(
                  "@/data/carroms/mixed"
                );
                setFixturesData(carromsMixedFixtures);
                break;

              default:
                setFixturesData([]);
                break;
            }
            break;
        }
      } catch (error) {
        console.error("Error loading fixtures data:", error);
        setFixturesData([]);
      } finally {
        setIsFixtureLoaded(true);
      }
    }

    loadData();
  }, [game, format]);

  useEffect(() => {
    if (fixturesData && fixturesData.length > 0) {
      const finalMatch = fixturesData.filter(
        (fixture) => fixture.id == "F1"
      )[0];
      debugger;
      if (finalMatch.participants?.some((p) => p.isWinner)) {
        setSelectedMatch(finalMatch); //
        setIsFinalsShowing(true);
      }
    }
  }, [fixturesData]);

  const onMatchClickHandler = (match) => {
    setIsFinalsShowing(false);
    setSelectedMatch(match?.match);
  };

  const handleCloseOverlay = () => {
    setSelectedMatch(null); // Close overlay
  };

  // For mobile devices, use a simpler animation (use react-spring)
  const overlayAnimation = useSpring({
    opacity: selectedMatch ? 1 : 0,
    transform: selectedMatch ? "scale(1)" : "scale(0.8)",
  });

  return (
    <>
      <FloatingButton
        isDarkLightOptionEnabled={true}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <header className="fixture_header">
        <h1 className="fixture_title">
          {format} - {game} Fixtures
        </h1>
      </header>

      {isFixtureLoaded && fixturesData && fixturesData.length > 0 ? (
        <div style={{ position: "relative" }}>
          <SingleEliminationBracket
            matches={fixturesData}
            matchComponent={Match}
            onMatchClick={onMatchClickHandler}
            theme={isDarkMode ? GlootTheme : WhiteTheme}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                background={
                  isDarkMode
                    ? GlootTheme.svgBackground
                    : WhiteTheme.svgBackground
                }
                SVGBackground={
                  isDarkMode
                    ? GlootTheme.svgBackground
                    : WhiteTheme.svgBackground
                }
                width={finalWidth}
                height={finalHeight}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
        </div>
      ) : isFixtureLoaded && (!fixturesData || fixturesData.length === 0) ? (
        <p>
          No fixtures available for {game} - {format}.
        </p>
      ) : (
        <p>Loading fixtures...</p>
      )}
      <br />
      <p
        style={{
          fontWeight: 400,
          color: "#b5838d",
          display: "flex",
          justifyContent: "center",
        }}
      >
        © Sports de Mitsogo
      </p>

      {/* Match Details Overlay */}
      {selectedMatch && (
        <animated.div
          style={{
            ...overlayAnimation,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseOverlay}
        >
          {/* Confetti Effect */}
          {selectedMatch.participants.some((p) => p.isWinner) && (
            <Confetti
              width={width}
              height={height}
              numberOfPieces={isFinalsShowing ? 5000 : 1000}
              initialVelocityY={{ min: 1, max: 10 }}
              gravity={isFinalsShowing ? 0.08 : 0.1}
              recycle={false}
            />
          )}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background: isDarkMode ? "#1f2937" : "#f9fafb",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: isDarkMode
                ? "0px 10px 30px rgba(0, 0, 0, 0.7)"
                : "0px 10px 30px rgba(0, 0, 0, 0.1)",
              maxWidth: "500px",
              width: "90%",
              color: isDarkMode ? "#e5e7eb" : "#1f2937",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: isDarkMode ? "#60a5fa" : "#2563eb",
              }}
            >
              {isFinalsShowing ? (
                <>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    🌟 The Champions are! 🏆
                  </p>
                  <span style={{ display: "flex", justifyContent: "center" }}>
                    `🎉&nbsp;
                    {
                      selectedMatch.participants.find((p) => p.isWinner)?.name
                    }{" "}
                    🏆`
                  </span>
                </>
              ) : (
                selectedMatch.name || "Match Details"
              )}
            </h2>

            {isFinalsShowing ? (
              <div
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    color: "#34D399",
                  }}
                >
                  of the mighty{" "}
                  <span
                    style={{
                      color: "#FFD700",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "1.7rem",
                    }}
                  >
                    {selectedMatch.participants.find((p) => p.isWinner)?.house}
                  </span>{" "}
                  House! 🏆
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  What a fantastic performance !🏅
                </p>
              </div>
            ) : (
              <div
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <p>
                  <strong>Start Time:</strong>{" "}
                  {new Date(selectedMatch.startTime).toLocaleString()}
                </p>
                <p>
                  <strong>Team A:</strong> {selectedMatch.participants[0]?.name}{" "}
                  <span
                    style={{
                      background:
                        selectedMatch.participants[0]?.house === "Phoenix"
                          ? "#FFBF00"
                          : selectedMatch.participants[0]?.house === "Taurus"
                          ? "#ef4444"
                          : selectedMatch.participants[0]?.house === "Draco"
                          ? "#008000"
                          : selectedMatch.participants[0]?.house === "Aquila"
                          ? "#3b82f6"
                          : isDarkMode
                          ? "#374151"
                          : "#dbeafe",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      marginLeft: "8px",
                      width: "100px",
                    }}
                  >
                    {selectedMatch.participants[0]?.house}
                  </span>
                </p>
                <p>
                  <strong>Team B:</strong> {selectedMatch.participants[1]?.name}{" "}
                  <span
                    style={{
                      background:
                        selectedMatch.participants[1]?.house === "Phoenix"
                          ? "#FFBF00"
                          : selectedMatch.participants[1]?.house === "Taurus"
                          ? "#ef4444"
                          : selectedMatch.participants[1]?.house === "Draco"
                          ? "#008000"
                          : selectedMatch.participants[1]?.house === "Aquila"
                          ? "#3b82f6"
                          : isDarkMode
                          ? "#374151"
                          : "#dbeafe",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      marginLeft: "8px",
                      width: "100px",
                    }}
                  >
                    {selectedMatch.participants[1]?.house}
                  </span>
                </p>

                {selectedMatch.participants.some((p) => p.isWinner) ? (
                  <div
                    style={{
                      marginTop: "20px",
                      padding: "12px",
                      background: isDarkMode ? "#2563eb" : "#3b82f6",
                      color: "#fff",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    🎉{" "}
                    {selectedMatch.participants.find((p) => p.isWinner)?.name}{" "}
                    Wins! 🏆
                  </div>
                ) : (
                  <p>No result yet.</p>
                )}
              </div>
            )}
            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                background: isDarkMode ? "grey" : "grey",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={handleCloseOverlay}
            >
              X
            </button>
          </motion.div>
        </animated.div>
      )}
    </>
  );
}
