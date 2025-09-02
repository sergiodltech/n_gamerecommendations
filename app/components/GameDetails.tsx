import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import CommentsMarquee from "./CommentsMarquee";
import { Genres, GenresColors, type GameData } from "./ResourcesLoader";
import ScreenshotFrame from "./ScreenshotFrame";

interface IGameDetailsProps {
  gameKey: string;
  gameData: GameData;
  translationStrings: { [key: string]: string };
  open: boolean;
  onClose: Function;
}

const GameDetails = ({
  gameKey,
  gameData,
  translationStrings,
  open,
  onClose,
}: IGameDetailsProps) => {
  const _onClose = (_e: {}, _r: string) => onClose();
  const onlinePlay = `${translationStrings["Online"]}: ${gameData.online[1]}`;
  const players = `${translationStrings["Players"]}: ${gameData.players}`;
  return (
    <Dialog
      id={`${gameKey}-details`}
      open={open}
      onClose={_onClose}
      aria-labelledby="game-title"
      aria-describedby="game-description"
    >
      <DialogTitle id="game-title">
        <div className="flex justify-between items-center">
          <span className="text-bold">{gameData.title}</span>
          <span className="text-xs text-gray-600">
            {`${onlinePlay} | `}
            <span className="text-sm text-gray-800 text-bold">
              {gameData.rating}
            </span>
            {`/10 | ${players}`}
          </span>
        </div>
      </DialogTitle>
      <DialogContent>
        <Box className="flex flex-col">
          <div className="relative flex-row mb-4">
            <video autoPlay loop muted className="w-full h-auto rounded-md">
              <source src={gameData.media["01v"].uri} type="video/mp4" />
            </video>
            <div className="absolute flex top-10 w-full justify-center">
              {CommentsMarquee(gameData.media["01v"].comments)}
            </div>
          </div>
          <div className="flex-row">
            <DialogContentText id="game-oneliner" className="font-bold mb-2">
              {gameData.oneLine}
            </DialogContentText>
          </div>
          <div className="flex-row justify-center mx-auto m-5">
            {gameData.genres.map((genre, idx) => {
              const genreColorKey: string = Genres[genre[0]];
              return (
                <div
                  className="inline-block rounded-2xl text-white px-4 mx-4 py-1"
                  style={{ backgroundColor: GenresColors[genreColorKey] }}
                  key={idx}
                >
                  {genre[1]}
                </div>
              );
            })}
          </div>
          <div className="flex-row">
            <DialogContentText id="game-description">
              {gameData.description}
            </DialogContentText>
          </div>
          <div className="flex-row">
            {Object.keys(gameData.media).map((mediaKey) => {
              if (mediaKey.endsWith("i")) {
                return ScreenshotFrame(mediaKey, gameData.media[mediaKey]);
              }
            })}
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default GameDetails;
