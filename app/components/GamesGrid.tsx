import * as React from "react";
import GameDetails from "./GameDetails";
import type { Resources } from "./ResourcesLoader";
import "./GamesGrid.css";

interface IGameDetailsState {
  [key: string]: boolean;
}

const GamesGrid = (games: Resources, featured: string[]) => {
  const gamesInitStates = Object.keys(games).map((key) => [key, false]);
  const [state, setState] = React.useState<IGameDetailsState>(
    Object.fromEntries(gamesInitStates)
  );
  const openDetails = (gameKey: string) => {
    setState((prev) => ({ ...prev, [gameKey]: true }));
  };
  const closeDetails = (gameKey: string) => {
    setState((prev) => ({ ...prev, [gameKey]: false }));
  };
  const gridTitle =
    typeof games["GridTitle"] === "string"
      ? games["GridTitle"]
      : "New Releases!";
  const translationStrings: { [key: string]: string } = {};
  translationStrings["Online"] =
    typeof games["Online"] === "string" ? games["Online"] : "Online";
  translationStrings["Players"] =
    typeof games["Players"] === "string" ? games["Players"] : "Players";
  return (
    <div className="w-full text-white text-center md:text-left my-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-black font-bold inline border-b-4 border-gray-500">
            {gridTitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
          {Object.keys(games).map((gameKey) => {
            if (typeof games[gameKey] === "string") return null; // Ignore translation strings
            const highlight = featured.includes(gameKey) ? "flame-border" : "";
            const gameData = games[gameKey];
            return (
              <div key={gameKey}>
                <div
                  className={`${highlight} relative flex h-[8rem] items-center shadow-md shadow-gray-600 rounded-lg overflow-hidden`}
                  onClick={() => openDetails(gameKey)}
                >
                  <img
                    src={gameData.media["Title"].uri}
                    alt={gameData.title}
                    className="rounded-md duration-200 hover:scale-105 top-0 left-0 w-full h-full object-cover"
                  />
                  <img
                    src={gameData.media["01a"].uri}
                    alt={`${gameData.title}-animation`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <GameDetails
                  gameKey={gameKey}
                  gameData={gameData}
                  translationStrings={translationStrings}
                  open={state[gameKey]}
                  onClose={() => closeDetails(gameKey)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
