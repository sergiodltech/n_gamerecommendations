import type { Resources } from "./ResourcesLoader";

const GamesGrid = (games: Resources, featured: string[]) => {
  return (
    <div className="w-full text-white md:h-screen text-center md:text-left">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-black font-bold inline border-b-4 border-gray-500">
            Check our new releases!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
          {Object.keys(games).map((gameKey) => (
            <div
              key={gameKey}
              className="relative flex h-[8rem] items-center shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={games[gameKey].media["01i"].uri}
                alt={games[gameKey].title}
                className="rounded-md duration-200 hover:scale-105 top-0 left-0 w-full h-full object-cover"
              />
              <img
                src={games[gameKey].media["01a"].uri}
                alt={`${games[gameKey].title}-animation`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
