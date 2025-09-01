import enGames from "~/resources/i18n/en_games.json";
import enGenres from "~/resources/i18n/en_genres.json";
import enOnline from "~/resources/i18n/en_online.json";
import esGames from "~/resources/i18n/es_games.json";
import esGenres from "~/resources/i18n/es_genres.json";
import esOnline from "~/resources/i18n/es_online.json";
import jaGames from "~/resources/i18n/ja_games.json";
import jaGenres from "~/resources/i18n/ja_genres.json";
import jaOnline from "~/resources/i18n/ja_online.json";

export enum OnlineGameplay {
  None,
  PvP,
  CoOp,
}

export enum Genres {
  Action,
  Adventure,
  RPG,
  Simulator,
  Casual,
  Racing,
  Strategy,
  VisualNovel,
  Fight,
}

export enum Languages {
  en = "en",
  es = "es",
  ja = "ja",
}

export type Media = {
  uri: string;
  legend: string;
  comments: string[];
};

export type GameData = {
  title: string;
  oneLine: string;
  description: string;
  rating: number;
  players: number;
  online: [OnlineGameplay, string];
  genres: [Genres, string][];
  media: { [key: string]: Media };
};

export type Resources = { [key: string]: GameData };

type RawGameData = {
  title: string;
  one_line: string;
  description: string;
  rating: number;
  players: number;
  online: string;
  genre: string[];
  img_legend: { [key: string]: string };
  img_comments: { [key: string]: string[] };
};

const resourcesLoader = (language: Languages): Resources => {
  var gamesData: Resources = {};
  const extensionMap: { [key: string]: string } = {
    i: ".jpg",
    v: ".mp4",
    a: ".gif",
    e: ".jpg",
  };
  var _gamesRawData: { [key: string]: RawGameData } = {};
  var _genres: { [key: string]: string } = {};
  var _onlineGameplays: { [key: string]: string } = {};
  switch (language) {
    case Languages.en:
      _gamesRawData = enGames;
      _genres = enGenres;
      _onlineGameplays = enOnline;
      break;
    case Languages.es:
      _gamesRawData = esGames;
      _genres = esGenres;
      _onlineGameplays = esOnline;
      break;
    case Languages.ja:
      _gamesRawData = jaGames;
      _genres = jaGenres;
      _onlineGameplays = jaOnline;
      break;
  }

  Object.keys(_gamesRawData).forEach((game) => {
    const gameRawData = _gamesRawData[game];
    const onlineGameplayText = _onlineGameplays[gameRawData.online];
    const onlineGameplay: OnlineGameplay =
      OnlineGameplay[gameRawData.online as keyof typeof OnlineGameplay];
    const genres: [Genres, string][] = gameRawData.genre.map((genre) => [
      Genres[genre as keyof typeof Genres],
      _genres[genre],
    ]);
    const media: { [key: string]: Media } = {};
    Object.keys(gameRawData.img_legend).forEach((imageID) => {
      const ext = extensionMap[imageID.slice(-1)];
      media[imageID] = {
        uri: `/media/${game}${imageID}${ext}`,
        legend: gameRawData.img_legend[imageID],
        comments: gameRawData.img_comments[imageID],
      };
    });

    gamesData[game] = {
      title: _gamesRawData[game].title,
      oneLine: _gamesRawData[game].one_line,
      description: _gamesRawData[game].description,
      rating: _gamesRawData[game].rating,
      players: _gamesRawData[game].players,
      online: [onlineGameplay, onlineGameplayText],
      genres: genres,
      media: media,
    };
  });

  return gamesData;
};

export default resourcesLoader;
