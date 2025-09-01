import logo from "~/resources/logo.svg";
import { Box } from "@mui/material";

import resourcesLoader from "~/components/ResourcesLoader";
import { Languages } from "~/components/ResourcesLoader";
import GamesCarousel from "~/components/GamesCarousel";
import GamesGrid from "~/components/GamesGrid";

const FEATURED_GAMES = ["Peak", "HogwartsLegacy", "FatalFury", "BillionRoad"];

export function Showcase() {
  const resources = resourcesLoader(Languages.en);
  const carouselResources = FEATURED_GAMES.map((gameKey) => resources[gameKey]);
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img src={logo} alt="MyNuggets" className="block" />
          </div>
        </header>
        <div className="flex w-full space-y-6 px-4 justify-center">
          <Box sx={{ display: "flex-col", width: 3 / 4 }}>
            <div className="flex-row">{GamesCarousel(carouselResources)}</div>
            <div className="flex-row mt-3">
              {GamesGrid(resources, FEATURED_GAMES)}
            </div>
          </Box>
        </div>
      </div>
    </main>
  );
}
