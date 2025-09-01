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
              className="flex h-[8rem] items-center shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={games[gameKey].media["01i"].uri}
                alt={games[gameKey].title}
                className="rounded-md duration-200 hover:scale-105 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
