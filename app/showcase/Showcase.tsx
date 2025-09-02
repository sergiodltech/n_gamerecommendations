// import logo from "~/resources/logo.svg";
import "./Showcase.css";
import * as React from "react";
import { Box } from "@mui/material";

import resourcesLoader from "~/components/ResourcesLoader";
import { Languages } from "~/components/ResourcesLoader";
import type { GameData } from "~/components/ResourcesLoader";
import Typography from "@mui/material/Typography";
import GamesCarousel from "~/components/GamesCarousel";
import GamesGrid from "~/components/GamesGrid";

const FEATURED_GAMES = ["Peak", "HogwartsLegacy", "FatalFury", "BillionRoad"];

export function Showcase() {
  const [language, setLanguage] = React.useState(Languages.ja);
  const resources = resourcesLoader(language);
  const carouselResources = FEATURED_GAMES.map((gameKey) =>
    (resources[gameKey] as GameData).title === undefined
      ? null
      : (resources[gameKey] as GameData)
  ).filter((x) => !!x);
  const translationStrings: { [key: string]: string } = {};
  translationStrings["Online"] =
    typeof resources["Online"] === "string" ? resources["Online"] : "Online";
  translationStrings["Players"] =
    typeof resources["Players"] === "string" ? resources["Players"] : "Players";
  return (
    <main className="flex items-center justify-center">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {/*         <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img src={logo} alt="MyNuggets" className="block" />
          </div>
        </header> */}
        <div className="flex w-full space-y-6 px-4 justify-center">
          <Box sx={{ display: "flex-col", width: 3 / 4 }}>
            <div className="flex flex-row justify-end w-full mx-auto my-4">
              <Typography
                fontSize="2rem"
                component="span"
                className={language === Languages.en ? "selected-language" : ""}
                sx={{ mx: 1, cursor: "pointer" }}
                onClick={() => setLanguage(Languages.en)}
              >
                🇬🇧
              </Typography>
              <Typography
                fontSize="2rem"
                component="span"
                className={language === Languages.es ? "selected-language" : ""}
                sx={{ mx: 1, cursor: "pointer" }}
                onClick={() => setLanguage(Languages.es)}
              >
                🇪🇸
              </Typography>
              <Typography
                fontSize="2rem"
                component="span"
                className={language === Languages.ja ? "selected-language" : ""}
                sx={{ mx: 1, cursor: "pointer" }}
                onClick={() => setLanguage(Languages.ja)}
              >
                🇯🇵
              </Typography>
            </div>
            <div className="flex flex-row">
              {GamesCarousel(carouselResources, translationStrings)}
            </div>
            <div className="flex flex-row">
              {GamesGrid(resources, FEATURED_GAMES)}
            </div>
          </Box>
        </div>
      </div>
    </main>
  );
}
