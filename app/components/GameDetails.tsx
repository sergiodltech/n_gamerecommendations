import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import CommentsMarquee from "./CommentsMarquee";
import { Genres, GenresColors, type GameData } from "./ResourcesLoader";

interface IGameDetailsProps {
  gameKey: string;
  gameData: GameData;
  open: boolean;
  onClose: Function;
}

const GameDetails = ({
  gameKey,
  gameData,
  open,
  onClose,
}: IGameDetailsProps) => {
  const _onClose = (_e: {}, _r: string) => onClose();
  return (
    <Dialog
      id={`${gameKey}-details`}
      open={open}
      onClose={_onClose}
      aria-labelledby="game-title"
      aria-describedby="game-description"
    >
      <DialogTitle id="game-title">{gameData.title}</DialogTitle>
      <DialogContent>
        <Box className="flex flex-col">
          <div className="relative flex-row mb-4">
            <video autoPlay loop muted className="w-full h-auto rounded-md">
              <source src={gameData.media["01v"].uri} type="video/mp4" />
            </video>
            <div className="absolute flex bottom-10 w-full justify-center">
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
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default GameDetails;
