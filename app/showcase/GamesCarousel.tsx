import * as React from "react";
import PrevIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NextIcon from "@mui/icons-material/NavigateNextOutlined";

import type { GameData } from "./ResourcesLoader";

const GAMES_INTERVAL = 15000; // Interval to proceed to the next game in the carousel, in ms
const COMMENT_INTERVAL = 4000;

const CommentCarousel = (comments: string[]) => {
  const [currentCmt, setCurrentCmt] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(
      () => setCurrentCmt((prevCmt) => (prevCmt + 1) % comments.length),
      COMMENT_INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="text-center text-white p-4 md:p-8 max-w-2xl"
      key={currentCmt}
    >
      <h2 className="text-lg justify-center font-bold mb-4 transition-transform durantion-300 ease-out">
        {comments[currentCmt]}
      </h2>
    </div>
  );
};

const GamesCarousel = (games: GameData[]) => {
  const [currentGame, setCurrentGame] = React.useState(0);
  const nextGame = () =>
    setCurrentGame((prevGame) => (prevGame + 1) % games.length);
  const prevGame = () =>
    setCurrentGame((prevGame) => (prevGame - 1 + games.length) % games.length);
  React.useEffect(() => {
    const timer = setInterval(nextGame, GAMES_INTERVAL);
    return () => clearInterval(timer); // on component unmount, clean up the timer
  }, []); // Start at component mount

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-600 ease-out"
        style={{ transform: `translateX(-${currentGame * 100}%)` }}
      >
        {games.map((gameData, gameIdx, _) => (
          <div key={gameIdx} className="w-full flex-shrink-0">
            <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
              <img
                src={gameData.media["Title"].uri}
                alt={gameData.media["Title"].legend}
                className="w-full h-full object-cover"
              />
              <div className="absolute flex bottom-1 w-full justify-center">
                {CommentCarousel(gameData.media["01v"].comments)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation arrows */}
      <button
        onClick={prevGame}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <PrevIcon className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextGame}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <NextIcon className="w-6 h-6 text-black" />
      </button>
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {games.map((_, idx) => (
            <button
              key={idx}
              className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${currentGame === idx ? "bg-white scale-110" : "bg-white bg-opacity-50"}
            `}
              onClick={() => setCurrentGame(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesCarousel;
