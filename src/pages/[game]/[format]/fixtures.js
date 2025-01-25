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
import useWindowSize from '../../../utils/functions'

export default function Fixtures() {
  const router = useRouter();
  const { game, format } = router.query; // Access dynamic route parameters

  const [fixturesData, setFixturesData] = useState(null); // Default to null to indicate no data loaded yet
  const [isFixtureLoaded, setIsFixtureLoaded] = useState(false); // React state for tracking load completion

  useEffect(() => {
    if (!game || !format) return;

    // Dynamically import the correct data module based on game and format
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

  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);

  return (
    <>
      <FloatingButton />
      <header>
        <h1>
          {format?.charAt(0).toUpperCase() + format?.slice(1)} -{" "}
          {game?.charAt(0).toUpperCase() + game?.slice(1)} Fixtures
        </h1>
        {isFixtureLoaded && fixturesData && fixturesData.length > 0 ? (
          <SingleEliminationBracket
            matches={fixturesData}
            matchComponent={Match}
            theme={WhiteTheme}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                background={WhiteTheme.svgBackground}
                SVGBackground={WhiteTheme.svgBackground}
                width={finalWidth}
                height={finalHeight}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
        ) : isFixtureLoaded && (!fixturesData || fixturesData.length === 0) ? (
          <p>
            No fixtures available for {game} - {format}.
          </p>
        ) : (
          <p>Loading fixtures...</p>
        )}
        <br />
        <p>© Sports de Mitsogo</p>
      </header>
    </>
  );
}
