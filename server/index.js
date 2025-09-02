import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { Box as Box$1 } from "@mui/material";
import Typography from "@mui/material/Typography";
import PrevIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NextIcon from "@mui/icons-material/NavigateNextOutlined";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const normalTheme = createTheme({
  palette: {
    primary: {
      main: "#e60012",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#8c8c8c",
      light: "#b4b4b4",
      contrastText: "#3c3c3c"
    }
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800
  }
});
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(ThemeProvider, {
    theme: normalTheme,
    children: [/* @__PURE__ */ jsx(CssBaseline, {}), /* @__PURE__ */ jsx(Outlet, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const BillionRoad$2 = { "title": "Billion Road", "one_line": "Billion Road: where dice, sushi shops, and mischievous monsters decide if you're Japan's next billionaire—or just broke in Akihabara.", "description": "Billion Road is a family-friendly board game-style adventure where players travel across Japan, investing in properties like sushi restaurants and anime shops to become the richest player. Dice rolls, random events, and over 50 quirky monsters shape your fate—sometimes boosting your fortune, other times sabotaging your plans. With more than 30 items to help or hinder rivals, multiple game modes ranging from quick matches to decades-long campaigns, and both local and online multiplayer, the game blends strategy, luck, and chaos into a fun race to billionaire status.", "rating": 8, "players": 1, "online": "PvP", "genre": ["Casual", "Strategy"], "img_legend": { "01v": "", "01i": "Explore!", "02i": "Fight!", "03i": "Cooperate!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Feels like Monopoly but way crazier lol", "The monsters are pure chaos 😂", "Lowkey learning about money while trolling my friends", "Skirmish mode = instant chaos party", "The map makes me wanna go to Japan fr"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const ComixPlay$2 = { "title": "COMIXPLAY", "one_line": "COMIXPLAY: Read it like a comic, play it like a strategy game—save the solar system while your heroes bicker like family.", "description": "COMIXPLAY is a 124-page digital superhero graphic novel blended with turn-based strategy gameplay. You follow the Solar Defenders, a genetically enhanced team tasked with saving the solar system from an alien menace—while also battling their own insecurities and rivalries. As the story unfolds from Pluto to Earth, players can seamlessly switch between reading the comic and engaging in tactical combat. Each hero has unique powers and team-based abilities, making every battle dynamic and story-driven. It's part comic, part game, and fully immersive.", "rating": 7, "players": 1, "online": "None", "genre": ["VisualNovel", "Action"], "img_legend": { "01v": "", "01i": "Turn Battle!", "02i": "Epic Monsters!", "03i": "Like a Comic!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Feels like I'm playing inside a comic book 😍", "The team fights more with each other than the aliens lol", "Turn-based battles + superhero drama = perfect combo", "Love how each hero's powers link up in fights", "The art makes me wanna keep reading even when I'm not playing"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const CursedCompanions$2 = { "title": "Cursed Companions", "one_line": "Cursed Companions: a horror dungeon crawler where your voice can cast spells, trigger traps, or totally doom your friends.", "description": "Cursed Companions is a co-op horror game where your voice is the key to survival—or disaster. The game listens to everything you and your teammates say: the right words unlock spells, treasures, and traps, while the wrong ones unleash chaos and danger. Explore procedurally generated dungeons filled with monsters, treasures, and secrets in either co-op or versus mode. Every run offers a new challenge, with opportunities to upgrade your home base for future survival. Whether sneaking past threats, working together, or sacrificing teammates, every word counts in this unpredictable voice-activated adventure.", "rating": 8, "players": 1, "online": "CoOp", "genre": ["Action", "Adventure"], "img_legend": { "01v": "", "01i": "Creepy!", "02i": "Be careful!", "03i": "Adventure!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Bro I literally killed the squad by saying the wrong word 😭", "It's like the dungeon is listening… creepy but fun", "Procedural maps keep it fresh every run", "Versus mode = instant betrayal energy lol", "Best/worst part? Your mic is basically a weapon"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Deltarune$2 = { "title": "deltarune", "one_line": "Deltarune: a strange journey where unlikely heroes, bullet-dodging battles, and cryptic choices question what it really means to save the world.", "description": `Deltarune is a spiritual follow-up to Undertale, set in a new continuity with familiar faces. You play as Kris, the only human in a monster-filled town, who alongside Susie and Ralsei becomes one of the prophesied "Delta Warriors." Together, you explore mysterious Dark Worlds, face quirky enemies, and uncover deeper questions about fate, choice, and identity. The combat retains Undertale's mix of dodging and pacifism options but expands to a three-member party system with unique roles, abilities, and a new TP mechanic for special actions. It's equal parts heartfelt, funny, and unsettling.`, "rating": 10, "players": 1, "online": "None", "genre": ["RPG"], "img_legend": { "01v": "", "01i": "RPG!", "02i": "Simple but quick!", "03i": "Many games!", "01a": "", "Title": "" }, "img_comments": { "01v": ["It's like Undertale's weirder, darker cousin", "Susie went from bully to bestie real quick 🐊", "Dodging bullets while vibing to that soundtrack 🔥", "The whole 'do choices matter?' thing messed with my head", "Ralsei is literally the sweetest goat ever"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const FatalFury$2 = { "title": "Fatal Fury: City of the Wolves", "one_line": "City of the Wolves: the legendary Fatal Fury returns, packing high-octane battles, stylish fighters, and a REV System that cranks the hype to max.", "description": `Fatal Fury: City of the Wolves revives SNK's iconic fighting series after 26 years with new energy, mechanics, and style. The all-new REV System introduces powerful offensive options that supercharge every match, while two control schemes—Arcade Style for veterans and Smart Style for newcomers—make it accessible to all players. Launching with 22 characters, including series favorites and new faces, each fighter is rendered in a striking art style. Beyond versus play, "Episodes of South Town" offers a single-player RPG mode where players level up fighters, earn skills, and carve out their legend in South Town's streets.`, "rating": 8, "players": 1, "online": "PvP", "genre": ["Action", "Fight"], "img_legend": { "01v": "", "01i": "Great Visuals!", "02i": "Long combos!", "03i": "Art style!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Fatal Fury is back and it looks insane 🔥", "REV System makes every match feel explosive", "Smart Style is perfect for casuals like me lol", "22 characters at launch?? That's stacked", "Episodes of South Town feels like RPG + fighter = win"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const GasPumpSimulator$2 = { "title": "Gas Pump Simulator", "one_line": "Gas Pump Simulator 2024: from broke car-owner to business tycoon, pump by pump, upgrade by upgrade", "description": "Gas Pump Simulator 2024 is a business management sim where you start small and build a thriving gas station empire. Begin with minimal assets, sell your car, and invest in an abandoned pump. Manage fuel supply, satisfy customers, and keep operations running smoothly to earn high ratings and boost growth. Expand with services like tire repair, restrooms, and even a grocery store, while balancing both personal and business life. Upgrade your station, hire staff, and handle daily challenges to maximize profit. Every decision counts on your journey to becoming a successful business tycoon.", "rating": 7, "players": 1, "online": "CoOp", "genre": ["Simulator", "Casual"], "img_legend": { "01v": "", "01i": "Great cars!", "02i": "Car wash!", "03i": "Uh oh!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Didn't think running a gas station would be this addicting 😂", "Customer ratings actually stress me out more than exams lol", "Upgrading my pump into a mini-mart feels so good", "Peak chaos = 5 cars waiting and no fuel left 😭", "Lowkey learning more about business than in school"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const HogwartsLegacy$2 = { "title": "Hogwarts Legacy", "one_line": "Hogwarts Legacy: craft your own magical destiny in an open-world wizarding adventure set long before Harry Potter's time.", "description": "Hogwarts Legacy is an open-world action RPG set in the wizarding world of the 1800s. As a Hogwarts student with access to a mysterious ancient secret, you shape your own path in a story that could change the fate of magic forever. Explore iconic locations like Hogwarts, Hogsmeade, and the Forbidden Forest, while mastering spells, brewing potions, and bonding with magical beasts. Forge friendships, choose your house, and grow into the witch or wizard you want to become. With battles against trolls, goblins, and Dark Wizards, the legacy you leave is entirely up to you.", "rating": 9, "players": 1, "online": "None", "genre": ["Action", "Adventure", "RPG"], "img_legend": { "01v": "", "01i": "Oh no!", "02i": "So detailed!", "03i": "My own wand!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Finally living my Hogwarts dream fr 🪄✨", "Flying over the castle on a broom = pure magic", "The combat feels way more badass than I expected", "Sorting hat moment had me sweating more than exams lol", "Exploring the Forbidden Forest at night is terrifying but awesome"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const JapaneseDriftMaster$2 = { "title": "Japanese Drift Master", "one_line": "JDM: race, drift, and live the tuner dream on Japan's legendary mountain passes and neon-lit city streets.", "description": "JDM is a racing and drifting game set in the heart of Japan's tuner culture. Explore over 250 km of roads across the fictional Guntama prefecture, from tight mountain passes to bustling city streets, with dynamic day-night cycles, traffic, and weather adding realism. Choose from licensed cars by brands like Nissan, Mazda, Honda, and Subaru, then customize and tune them to perfection. Experience a manga-inspired story as a foreigner chasing respect in Japan's drifting scene. With simcade driving physics, narrative-driven events, and plenty of side races, JDM blends authentic car culture with high-speed thrills.", "rating": 8, "players": 1, "online": "None", "genre": ["Racing", "Simulator", "Casual"], "img_legend": { "01v": "", "01i": "It's a race!", "02i": "Like a manga!", "03i": "Drifting!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Feels like Initial D but I'm the main character 😎", "Drifting through the mountains at night is pure vibes", "Finally a game where I can rep my Honda and not feel left out", "The weather + neon city streets = chef's kiss", "Story mode lowkey feels like a racing manga come to life"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Peak$2 = { "title": "Peak", "one_line": "PEAK: team up, climb hard, and try not to fall—because one wrong move means starting all over again", "description": "PEAK is a co-op climbing survival game from Aggro Crab where every step could be your last. Stranded on a mysterious island, you and up to three friends must scale a mountain that changes every day. Work together by placing ropes, pulling each other up, and sharing supplies while surviving on questionable food and scavenged gear. Each biome brings new hazards, from dangerous terrain to stamina-draining injuries. Earn badges, unlock cosmetics, and roast marshmallows by campfires along the way. Whether solo or with friends, the climb to the top is brutal, hilarious, and endlessly replayable.", "rating": 9, "players": 1, "online": "CoOp", "genre": ["Adventure", "Action"], "img_legend": { "01v": "", "01i": "Open Spaces!", "02i": "Camping!", "03i": "Scary!", "01a": "", "Title": "" }, "img_comments": { "01v": ["One slip and the whole squad's screaming 😂", "Lowkey harder than any Souls game I've played", "Daily new maps keep it fresh every climb", "Best part? Saving (or betraying) your friends with ropes", "Campfire marshmallows after dying 20 times hit different"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const RogueNight$2 = { "title": "Rogue Night", "one_line": "Rogue Night: survive the undead, rescue allies, and grow stronger with every death on your path to face Necrosarian", "description": "Rogue Night is a fantasy survival rogue-lite where danger and undead fill every corner. Gather resources, build shelters, and recruit rescued NPCs who provide aid and companionship. Explore forests, ruins, and puzzle-filled dungeons to uncover blueprints, weapons, potions, and treasures. Each run, you'll battle hordes of undead, harvesting their heads to unlock permanent upgrades that carry into your next attempt. With 3 unique classes, 15 weapons, and over 35 upgrades, you can adapt your character to fit your playstyle. Survive, grow stronger, and fight your way to the final confrontation with Necrosarian himself", "rating": 7, "players": 1, "online": "None", "genre": ["RPG", "Adventure", "Action"], "img_legend": { "01v": "", "01i": "Classic RPG!", "02i": "Long caves!", "03i": "Deep story!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Finally a survival game where dying actually helps lol", "Rescuing NPCs and building a squad feels so good", "Those dungeon puzzles lowkey mess with my brain 🧩", "Every run I get a little stronger, feels addictive af", "Necrosarian better be ready, Im coming for him"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const enGames = {
  BillionRoad: BillionRoad$2,
  ComixPlay: ComixPlay$2,
  CursedCompanions: CursedCompanions$2,
  Deltarune: Deltarune$2,
  FatalFury: FatalFury$2,
  GasPumpSimulator: GasPumpSimulator$2,
  HogwartsLegacy: HogwartsLegacy$2,
  JapaneseDriftMaster: JapaneseDriftMaster$2,
  Peak: Peak$2,
  RogueNight: RogueNight$2
};
const Action$2 = "Action";
const Adventure$2 = "Adventure";
const RPG$2 = "RPG";
const Simulator$2 = "Simulator";
const Casual$2 = "Casual";
const Racing$2 = "Racing";
const Strategy$2 = "Strategy";
const VisualNovel$2 = "VisualNovel";
const Fight$2 = "Fight";
const enGenres = {
  Action: Action$2,
  Adventure: Adventure$2,
  RPG: RPG$2,
  Simulator: Simulator$2,
  Casual: Casual$2,
  Racing: Racing$2,
  Strategy: Strategy$2,
  VisualNovel: VisualNovel$2,
  Fight: Fight$2
};
const None$2 = "None";
const PvP$2 = "PvP";
const CoOp$2 = "Co-Op";
const enOnline = {
  None: None$2,
  PvP: PvP$2,
  CoOp: CoOp$2
};
const GridTitle$2 = "Check our new releases!";
const Online$2 = "Online";
const Players$2 = "Players";
const enStrings = {
  GridTitle: GridTitle$2,
  Online: Online$2,
  Players: Players$2
};
const BillionRoad$1 = { "title": "Billion Road", "one_line": "Billion Road: donde los dados, los restaurantes de sushi y los monstruos traviesos deciden si serás el próximo multimillonario de Japón... o si terminarás en bancarrota en Akihabara.", "description": "Billion Road es una aventura estilo juego de mesa para toda la familia en la que viajas por todo Japón invirtiendo en propiedades como restaurantes de sushi o tiendas de anime para convertirte en el jugador más rico. Las tiradas de dados, los eventos aleatorios y más de 50 monstruos peculiares marcarán tu destino: a veces aumentarán tu fortuna y otras arruinarán tus planes. Con más de 30 ítems para ayudar o fastidiar rivales, modos de juego que van desde partidas rápidas hasta campañas de décadas, y multijugador local u online, el juego mezcla estrategia, suerte y caos en una divertida carrera por la riqueza.", "rating": 8, "players": 1, "online": "PvP", "genre": ["Casual", "Strategy"], "img_legend": { "01v": "", "01i": "Explora!", "02i": "Pelea!", "03i": "Coopera!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Se siente como Monopoly pero mucho más loco jaja", "Los monstruos son puro caos 😂", "Aprendiendo de dinero mientras molesto a mis amigos", "Modo Skirmish = fiesta de caos instantáneo", "El mapa me dan ganas de ir a Japón de verdad"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const ComixPlay$1 = { "title": "COMIXPLAY", "one_line": "COMIXPLAY: léelo como un cómic, juégalo como un juego de estrategia — salva el sistema solar mientras tus héroes discuten como familia.", "description": "COMIXPLAY es una novela gráfica digital de 124 páginas mezclada con jugabilidad de estrategia por turnos. Sigues a los Solar Defenders, un equipo de héroes genéticamente mejorados encargados de salvar el sistema solar de una amenaza alienígena — mientras también lidian con sus inseguridades y rivalidades internas. La historia se desarrolla desde Plutón hasta la Tierra, y el jugador puede alternar entre leer el cómic y entrar en combates tácticos. Cada héroe tiene poderes únicos y habilidades en equipo, lo que hace que cada batalla sea dinámica y parte de la historia. Es parte cómic, parte juego, totalmente inmersivo.", "rating": 7, "players": 1, "online": "None", "genre": ["VisualNovel", "Action"], "img_legend": { "01v": "", "01i": "Pelea por turnos!", "02i": "Monstruos épicos!", "03i": "Como los cómics!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Se siente como estar jugando dentro de un cómic 😍", "El equipo pelea más entre ellos que con los aliens jaja", "Combates por turnos + drama de superhéroes = combo perfecto", "Me encanta cómo los poderes se combinan entre héroes", "El arte hace que quiera seguir leyendo incluso sin jugar"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const CursedCompanions$1 = { "title": "Cursed Companions", "one_line": "Cursed Companions: un dungeon crawler de horror donde tu voz puede lanzar hechizos, activar trampas o arruinar totalmente a tus amigos.", "description": "Cursed Companions es un juego de horror cooperativo donde tu voz es la clave para sobrevivir... o para el desastre. El juego escucha todo lo que tú y tus compañeros dicen: las palabras correctas desbloquean hechizos, tesoros y trampas, mientras que las equivocadas desatan caos y peligro. Explora calabozos generados proceduralmente llenos de monstruos, tesoros y secretos, ya sea en modo cooperativo o versus. Cada partida es un nuevo reto, con la posibilidad de mejorar tu base para sobrevivir mejor en el futuro. Ya sea sigilosamente, trabajando juntos o sacrificando compañeros, cada palabra cuenta en esta aventura impredecible activada por voz.", "rating": 8, "players": 1, "online": "CoOp", "genre": ["Action", "Adventure"], "img_legend": { "01v": "", "01i": "Uuuyy!", "02i": "Cuidado!", "03i": "Una aventura!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Literal maté al equipo por decir la palabra equivocada 😭", "Es como si el calabozo estuviera escuchando... creepy pero divertido", "Los mapas aleatorios mantienen todo fresco", "Modo versus = energía de traición instantánea jaja", "Lo mejor/peor es que tu micrófono es básicamente un arma"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Deltarune$1 = { "title": "deltarune", "one_line": "Deltarune: un viaje extraño donde héroes improbables, combates de balas y elecciones crípticas cuestionan qué significa realmente salvar al mundo.", "description": "Deltarune es una continuación espiritual de Undertale, situada en una nueva continuidad con caras conocidas. Juegas como Kris, el único humano en un pueblo de monstruos, quien junto a Susie y Ralsei se convierte en uno de los 'Guerreros Delta' profetizados. Juntos exploran Mundos Oscuros llenos de enemigos peculiares y preguntas profundas sobre destino, elecciones e identidad. El combate mantiene la mezcla de esquivar balas y opciones pacifistas de Undertale, pero se expande con un sistema de tres personajes con roles únicos y una nueva mecánica de TP para acciones especiales. Es conmovedor, gracioso y perturbador al mismo tiempo.", "rating": 10, "players": 1, "online": "None", "genre": ["RPG"], "img_legend": { "01v": "", "01i": "RPG!", "02i": "Simple pero rápido!", "03i": "Muchos juegos!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Es como el primo más raro y oscuro de Undertale", "Susie pasó de bully a bestie rapidísimo 🐊", "Esquivar balas mientras vibro con la música 🔥", "La pregunta de '¿las decisiones importan?' me voló la cabeza", "Ralsei es literalmente la cabra más tierna del mundo"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const FatalFury$1 = { "title": "Fatal Fury: City of the Wolves", "one_line": "City of the Wolves: la legendaria saga Fatal Fury regresa con combates de alto voltaje, peleadores con estilo y un sistema REV que lleva la emoción al máximo.", "description": "Fatal Fury: City of the Wolves revive la icónica saga de peleas de SNK tras 26 años, con nuevas energías, mecánicas y estilo. El nuevo sistema REV introduce opciones ofensivas que intensifican cada pelea, mientras que dos esquemas de control —Arcade Style para veteranos y Smart Style para principiantes— lo hacen accesible para todos. Con 22 personajes de lanzamiento, entre rostros conocidos y nuevas incorporaciones, cada luchador está representado con un estilo visual vibrante. Además del versus, el modo RPG para un jugador 'Episodes of South Town' permite subir de nivel, ganar habilidades y forjar tu propia leyenda en las calles.", "rating": 8, "players": 1, "online": "PvP", "genre": ["Action", "Fight"], "img_legend": { "01v": "", "01i": "Se ve genial!", "02i": "Combos largos!", "03i": "Ese arte!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Fatal Fury está de vuelta y se ve brutal 🔥", "El sistema REV hace que cada pelea sea explosiva", "Smart Style es perfecto para casuales como yo jaja", "¿22 personajes de inicio? Está cargadísimo", "Episodes of South Town se siente como RPG + pelea = win"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const GasPumpSimulator$1 = { "title": "Gas Pump Simulator", "one_line": "Gas Pump Simulator 2024: de dueño de un carro viejo a magnate de los negocios, bomba por bomba, mejora tras mejora.", "description": "Gas Pump Simulator 2024 es un simulador de gestión de negocios donde empiezas desde cero y construyes un imperio gasolinero. Inicia con pocos recursos, vende tu coche y compra una bomba abandonada. Maneja el suministro de combustible, atiende rápido a los clientes y mantén la operación en orden para ganar buenas reseñas y crecer. Expande con servicios como reparación de llantas, baños o incluso un minimercado, equilibrando tu vida personal y profesional. Contrata empleados, enfrenta los retos diarios y maximiza las ganancias. Cada decisión cuenta en tu camino para convertirte en un magnate exitoso.", "rating": 7, "players": 1, "online": "CoOp", "genre": ["Simulator", "Casual"], "img_legend": { "01v": "", "01i": "Wooow!", "02i": "Lava autos!", "03i": "Ooh no!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Nunca pensé que manejar una gasolinera sería tan adictivo 😂", "Las reseñas de clientes me ponen más nervioso que un examen jaja", "Expandir mi bomba a un mini market se siente increíble", "Caos total = 5 autos esperando y yo sin gasolina 😭", "Estoy aprendiendo más de negocios aquí que en la escuela"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const HogwartsLegacy$1 = { "title": "Hogwarts Legacy", "one_line": "Hogwarts Legacy: crea tu propio destino mágico en una aventura de mundo abierto ambientada mucho antes de Harry Potter.", "description": "Hogwarts Legacy es un RPG de acción en mundo abierto ambientado en el siglo XIX en el universo mágico. Como estudiante de Hogwarts con acceso a un misterioso secreto ancestral, defines tu propio camino en una historia que puede cambiar el destino de la magia. Explora lugares icónicos como Hogwarts, Hogsmeade y el Bosque Prohibido, mientras dominas hechizos, preparas pociones y cuidas criaturas mágicas. Forja amistades, elige tu casa y conviértete en la bruja o mago que quieras ser. Con combates contra trolls, magos oscuros y duendes, el legado que dejes está en tus manos.", "rating": 9, "players": 1, "online": "None", "genre": ["Action", "Adventure", "RPG"], "img_legend": { "01v": "", "01i": "Dragón!", "02i": "Tanto detalle!", "03i": "Es mi varita!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Por fin viviendo mi sueño de Hogwarts 🪄✨", "Volar por el castillo en escoba = pura magia", "El combate se siente mucho más badass de lo que esperaba", "El sombrero seleccionador me puso más nervioso que un examen jaja", "Explorar el Bosque Prohibido de noche da miedo pero está buenísimo"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const JapaneseDriftMaster$1 = { "title": "Japanese Drift Master", "one_line": "JDM: corre, derrapa y vive el sueño tuner en los legendarios pasos de montaña y calles iluminadas de Japón.", "description": "JDM es un juego de carreras y derrapes ambientado en el corazón de la cultura tuner japonesa. Explora más de 250 km de carreteras en la prefectura ficticia de Guntama, desde estrechos pasos de montaña hasta calles urbanas llenas de tráfico, con ciclos de día y noche, clima dinámico y tráfico realista. Elige entre autos con licencia de marcas como Nissan, Mazda, Honda y Subaru, personalízalos y ajústalos a tu gusto. Vive una historia inspirada en el manga como un extranjero que busca respeto en la escena del drift en Japón. Con físicas tipo simcade, eventos narrativos y muchas competencias, JDM combina la cultura automotriz auténtica con pura adrenalina.", "rating": 8, "players": 1, "online": "None", "genre": ["Racing", "Simulator", "Casual"], "img_legend": { "01v": "", "01i": "Hora de correr!", "02i": "Como un manga!", "03i": "Drifting!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Se siente como Initial D pero yo soy el protagonista 😎", "Derrapar en la montaña de noche es pura vibra", "Al fin un juego donde puedo presumir mi Honda sin sentirme fuera", "El clima + las luces de neón = una joya", "El modo historia se siente como un manga de carreras en la vida real"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Peak$1 = { "title": "Peak", "one_line": "PEAK: coopera, escala fuerte y no caigas — un solo error significa empezar desde cero.", "description": "PEAK es un juego de supervivencia cooperativo de escalada creado con Aggro Crab donde cada paso puede ser el último. Atrapado en una isla misteriosa, tú y hasta tres amigos deben escalar una montaña que cambia cada día. Cooperen colocando cuerdas, ayudándose a subir y compartiendo provisiones, mientras sobreviven con comida dudosa y equipo improvisado. Cada bioma trae nuevos peligros, desde terrenos mortales hasta lesiones que reducen tu resistencia. Gana insignias, desbloquea cosméticos y asa malvaviscos en fogatas. Ya sea solo o con amigos, el ascenso es brutal, gracioso y siempre diferente.", "rating": 9, "players": 1, "online": "CoOp", "genre": ["Adventure", "Action"], "img_legend": { "01v": "", "01i": "Espacioso!", "02i": "Campamentos!", "03i": "Que miedo!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Un resbalón y todo el squad grita 😂", "Más difícil que cualquier Souls que jugué jaja", "Mapas nuevos cada día lo mantienen fresco", "Lo mejor es salvar (o traicionar) a tus amigos con las cuerdas", "Un malvavisco después de 20 muertes sabe distinto"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const RogueNight$1 = { "title": "Rogue Night", "one_line": "Rogue Night: sobrevive a los no-muertos, rescata aliados y hazte más fuerte con cada muerte en tu camino hacia Necrosarian.", "description": "Rogue Night es un rogue-lite de supervivencia fantástica donde cada esquina está llena de peligro y no-muertos. Recolecta recursos, construye refugios y recluta NPCs rescatados que aportan ayuda y compañía. Explora bosques, ruinas y calabozos llenos de acertijos para encontrar planos, armas, pociones y tesoros. En cada partida, enfréntate a hordas de no-muertos y usa sus cabezas para desbloquear mejoras permanentes que se conservan tras la muerte. Con 3 clases únicas, 15 armas y más de 35 mejoras, puedes adaptar a tu personaje a tu estilo. Sobrevive, hazte más fuerte y enfréntate a Necrosarian en el duelo final.", "rating": 7, "players": 1, "online": "None", "genre": ["RPG", "Adventure", "Action"], "img_legend": { "01v": "", "01i": "Clásico RPG!", "02i": "Cuevas largas!", "03i": "Buena historia!", "01a": "", "Title": "" }, "img_comments": { "01v": ["Por fin un survival donde morir te hace más fuerte jaja", "Rescatar NPCs y armar tu squad se siente genial", "Los acertijos de los calabozos me queman el cerebro 🧩", "Cada run me hago un poco más fuerte, es adictivo", "Necrosarian que se prepare, voy por él"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const esGames = {
  BillionRoad: BillionRoad$1,
  ComixPlay: ComixPlay$1,
  CursedCompanions: CursedCompanions$1,
  Deltarune: Deltarune$1,
  FatalFury: FatalFury$1,
  GasPumpSimulator: GasPumpSimulator$1,
  HogwartsLegacy: HogwartsLegacy$1,
  JapaneseDriftMaster: JapaneseDriftMaster$1,
  Peak: Peak$1,
  RogueNight: RogueNight$1
};
const Action$1 = "Acción";
const Adventure$1 = "Adventura";
const RPG$1 = "RPG";
const Simulator$1 = "Simulador";
const Casual$1 = "Casual";
const Racing$1 = "Carreras";
const Strategy$1 = "Estrategia";
const VisualNovel$1 = "VisualNovel";
const Fight$1 = "Peleas";
const esGenres = {
  Action: Action$1,
  Adventure: Adventure$1,
  RPG: RPG$1,
  Simulator: Simulator$1,
  Casual: Casual$1,
  Racing: Racing$1,
  Strategy: Strategy$1,
  VisualNovel: VisualNovel$1,
  Fight: Fight$1
};
const None$1 = "Ninguno";
const PvP$1 = "PvP";
const CoOp$1 = "Coop";
const esOnline = {
  None: None$1,
  PvP: PvP$1,
  CoOp: CoOp$1
};
const GridTitle$1 = "Nuevos Lanzamientos!";
const Online$1 = "Online";
const Players$1 = "Jugadores";
const esStrings = {
  GridTitle: GridTitle$1,
  Online: Online$1,
  Players: Players$1
};
const BillionRoad = { "title": "ビリオンロード", "one_line": "ビリオンロード：サイコロ、寿司屋、そしていたずら好きなモンスターたちが、あなたを日本一の大富豪にするか、秋葉原で破産させるかを決める！", "description": "『ビリオンロード』は家族でも楽しめるボードゲーム風アドベンチャー。日本全国を旅しながら、寿司屋やアニメショップといった物件に投資して一番のお金持ちを目指します。サイコロの出目やランダムイベント、50体以上のユニークなモンスターたちが運命を左右し、時には大儲け、時には大損も。30種類以上のアイテムでライバルを助けたり妨害したり、短期戦から数十年にわたる長期戦まで様々なモードが楽しめます。ローカルでもオンラインでも、戦略と運と混沌が入り乱れる億万長者レースを堪能しましょう。", "rating": 8, "players": 1, "online": "PvP", "genre": ["Casual", "Strategy"], "img_legend": { "01v": "", "01i": "探索ゆけ!", "02i": "戦え!", "03i": "協力せよ!", "01a": "", "Title": "" }, "img_comments": { "01v": ["モノポリーっぽいけど何倍もカオスｗ", "モンスターがマジで大混乱を招く 😂", "お金の勉強しながら友達いじめてる感ある", "スカーミッシュモード = 即カオスパーティー", "マップ見てると本当に日本行きたくなるわ"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const ComixPlay = { "title": "コミックスプレイ", "one_line": "COMIXPLAY：コミックとして読み、ストラテジーとして遊ぶ――ヒーローたちが家族のように口喧嘩しながら太陽系を救え！", "description": "『COMIXPLAY』は124ページのデジタル・スーパーヒーローコミックとターン制ストラテジーを融合させた作品です。プレイヤーは太陽系を脅かすエイリアンの脅威に立ち向かう遺伝子改造されたヒーローチーム「ソーラーディフェンダーズ」を率います。彼らは同時に自信のなさや仲間割れとも戦わなければなりません。物語は冥王星から地球まで展開し、コミックを読み進める合間に戦闘へ参加することも可能。各キャラには固有の能力やコンビネーションがあり、バトルをよりドラマチックにします。読む×遊ぶ、両方の魅力を備えた没入型体験です。", "rating": 7, "players": 1, "online": "None", "genre": ["VisualNovel", "Action"], "img_legend": { "01v": "", "01i": "ターン制！", "02i": "怪獣大暴れ！", "03i": "マンガみたい！", "01a": "", "Title": "" }, "img_comments": { "01v": ["マンガの中でプレイしてる感覚😍", "味方同士のケンカがエイリアン戦より激しいｗ", "ターン制バトル＋ヒーロードラマ = 神コンボ", "キャラ同士の連携技が最高", "絵がキレイで遊ばずに読み進めたくなる"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const CursedCompanions = { "title": "カースド・コンパニオンズ", "one_line": "Cursed Companions：声で呪文を唱え、罠を作動させ、仲間を破滅させることもできるホラー系ダンジョンクロウラー。", "description": "『Cursed Companions』は音声操作を活用した協力型ホラーゲーム。あなたや仲間が発する言葉をゲームが聞き取り、正しい言葉なら魔法や宝物、罠解除ができ、間違った言葉なら混乱と死が訪れます。毎回異なる自動生成ダンジョンでモンスターや宝を探索し、協力プレイや対戦モードも可能。拠点をアップグレードして次回の生存率を高めることもできます。ステルス、協力、あるいは仲間の犠牲――生き残りの鍵は言葉次第。予測不能なボイスアクティブ・アドベンチャーです。", "rating": 8, "players": 1, "online": "CoOp", "genre": ["Action", "Adventure"], "img_legend": { "01v": "", "01i": "こわっ！", "02i": "あぶない！", "03i": "冒険へ！", "01a": "", "Title": "" }, "img_comments": { "01v": ["変な言葉言って仲間全滅させた俺😭", "ダンジョンが会話聞いてる感覚…怖いけど楽しい", "毎回マップが違うから飽きない", "対戦モード = 即裏切りバトルｗ", "マイクが武器でもあり凶器でもあるの草"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Deltarune = { "title": "デルタルーン", "one_line": "Deltarune：奇妙な仲間と共に旅し、弾幕を避け、謎めいた選択を迫られる――本当に世界を救うとは何なのか？", "description": "『Deltarune』は『Undertale』の精神的後継作であり、同じキャラが登場しながらも別の世界線を描きます。プレイヤーは人間であるクリスとなり、スージーやラルセイと共に「デルタの戦士」として暗黒世界を冒険します。敵は奇妙でユーモラス、物語は運命や選択、そしてアイデンティティの謎へと迫っていきます。戦闘は弾幕回避や敵を殺さず倒す選択肢など『Undertale』の特徴を引き継ぎつつ、3人パーティー制やTPシステムを導入し戦略性を増しています。感動的で、時に笑えて、不穏さも漂う作品です。", "rating": 10, "players": 1, "online": "None", "genre": ["RPG"], "img_legend": { "01v": "", "01i": "RPG!", "02i": "簡単やけど速い！", "03i": "ゲーム多い！", "01a": "", "Title": "" }, "img_comments": { "01v": ["アンダーテイルのもっと奇妙でダークな従兄弟って感じ", "スージー、いじめっ子から親友へ昇格するの早すぎ🐊", "弾幕避けながらサントラ聴くの最高🔥", "『選択に意味ある？』って問いに脳を揺さぶられた", "ラルセイはマジで世界一かわいいヤギ"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const FatalFury = { "title": "餓狼伝説：City of the Wolves", "one_line": "City of the Wolves：伝説の『餓狼伝説』が復活！迫力のバトル、個性豊かなファイター、そして熱狂を極限まで高めるREVシステム。", "description": "『Fatal Fury: City of the Wolves』は26年ぶりに蘇るSNKの名作格闘シリーズ。新たな「REVシステム」で試合開始から怒涛の攻撃を仕掛けられ、試合は常に白熱。ベテラン向けの「アーケードスタイル」と初心者でも必殺技を繰り出せる「スマートスタイル」、2つの操作方式で誰でも楽しめます。シリーズおなじみのキャラから新顔まで22人が参戦し、鮮やかなビジュアルで描かれます。さらにシングルプレイRPGモード「Episodes of South Town」では経験値やスキルを獲得し、自分だけの伝説を築けます。", "rating": 8, "players": 1, "online": "PvP", "genre": ["Action", "Fight"], "img_legend": { "01v": "", "01i": "カッケー！", "02i": "コンボなっが！", "03i": "きれいい！", "01a": "", "Title": "" }, "img_comments": { "01v": ["餓狼が帰ってきた！見た目も超カッコいい🔥", "REVシステムで毎試合ド派手", "スマートスタイルで初心者でも必殺技余裕ｗ", "22キャラ初期から揃ってるの豪華すぎ", "Episodes of South TownはRPG×格ゲー感あって最高"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const GasPumpSimulator = { "title": "ガスポンプシミュレーター", "one_line": "Gas Pump Simulator 2024：車売ってポンプ買って、零細から大富豪へ。", "description": "『Gas Pump Simulator 2024』はガソリンスタンド経営を体験するビジネスシミュレーター。少ない資産から始め、車を売って古びたポンプを買い、燃料供給や接客をこなしながら高評価を獲得して成長していきます。タイヤ修理所やトイレ、ミニスーパーなどサービスを拡張し、顧客満足度を上げて収益を最大化。従業員を雇い、日々の課題に対応して利益を伸ばしましょう。プライベートとビジネスのバランスを取りながら、一流の経営者を目指します。", "rating": 7, "players": 1, "online": "CoOp", "genre": ["Simulator", "Casual"], "img_legend": { "01v": "", "01i": "カッケ！", "02i": "洗車も！", "03i": "アレっ", "01a": "", "Title": "" }, "img_comments": { "01v": ["ガソスタ経営がここまで中毒性あるとは😂", "顧客評価がテストより緊張するｗ", "ポンプからミニスーパーに拡張する瞬間気持ちいい", "ピーク時に燃料切れるの地獄😭", "ビジネスの勉強になるわこれｗ"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const HogwartsLegacy = { "title": "ホグワーツ・レガシー", "one_line": "Hogwarts Legacy：19世紀の魔法界で、自分だけの魔法の運命を切り開け！", "description": "『Hogwarts Legacy』は1800年代の魔法界を舞台にしたオープンワールドRPG。ホグワーツの生徒となったプレイヤーは、魔法界の運命を揺るがす古代の秘密に関わっていきます。ホグワーツやホグズミード、禁じられた森などを自由に探索し、呪文やポーション、魔法生物を習得。寮の選択や友情、スキル成長を経て、自分だけの魔女・魔法使いを作り上げましょう。トロールや闇の魔法使い、ゴブリンたちとの戦いを通じて、あなたのレガシーを築いてください。", "rating": 9, "players": 1, "online": "None", "genre": ["Action", "Adventure", "RPG"], "img_legend": { "01v": "", "01i": "ドラゴンだ！", "02i": "綺麗すごい！", "03i": "自分のつえ！", "01a": "", "Title": "" }, "img_comments": { "01v": ["ホグワーツ生活の夢がついに叶った🪄✨", "箒で城を飛び回るの楽しすぎ", "戦闘が想像以上にカッコいい", "組み分け帽子の瞬間マジでドキドキしたｗ", "禁じられた森の夜探索は怖いけど最高"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const JapaneseDriftMaster = { "title": "ジャパニーズ・ドリフト・マスター", "one_line": "JDM：日本の伝説的な峠道やネオン輝く街を舞台に、走り・ドリフト・チューナー文化を体験せよ。", "description": "『JDM』は日本のチューナー文化を体感できるレース＆ドリフトゲーム。架空の群玉県を舞台に、峠の下りや都市の大通りなど250km以上の道路を探索可能。昼夜の変化や交通、天候システムがリアルさを演出します。日産、マツダ、ホンダ、スバルなど実在メーカーのライセンス車を購入・チューン・カスタマイズし、自分好みのマシンに仕上げましょう。外国人として日本のドリフト界で尊敬を勝ち取る物語は、まるでマンガのよう。シム寄りの物理と豊富なイベントで、本格的な車文化と爽快感が融合します。", "rating": 8, "players": 1, "online": "None", "genre": ["Racing", "Simulator", "Casual"], "img_legend": { "01v": "", "01i": "レースだ！", "02i": "マンガみたいな！", "03i": "ドリフト！", "01a": "", "Title": "" }, "img_comments": { "01v": ["イニD気分で自分が主人公になれる😎", "夜の峠ドリフトは雰囲気最高", "ホンダ乗りでもちゃんと活躍できるの嬉しい", "ネオンと天候の組み合わせが神", "ストーリーモードがマンガそのまんまみたいで熱い"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const Peak = { "title": "ピーク", "one_line": "PEAK：仲間と協力し、全力で登れ――一度のミスで振り出しに戻る。", "description": "『PEAK』はAggro Crabが手掛ける協力型クライミング・サバイバルゲーム。謎の島に取り残されたプレイヤーは、毎日変化する山を仲間と共に登頂しなければなりません。ロープを設置したり仲間を引き上げたり、食料や装備を分け合って生き延びましょう。バイオームごとに異なる危険があり、怪我や体力消耗に注意。バッジやコスメを解放したり、焚き火でマシュマロを焼いたりと息抜き要素も。ソロでも協力でも、過酷で笑える挑戦が待っています。", "rating": 9, "players": 1, "online": "CoOp", "genre": ["Adventure", "Action"], "img_legend": { "01v": "", "01i": "広いわ！", "02i": "キャンピング！", "03i": "危ない！", "01a": "", "Title": "" }, "img_comments": { "01v": ["一人落ちた瞬間みんな絶叫するの草😂", "ソウルライクよりムズいかもｗ", "毎日マップ変わるの飽きなくていい", "仲間を助けるか裏切るかのローププレイ最高", "20回死んだ後のマシュマロが沁みる"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const RogueNight = { "title": "ローグナイト", "one_line": "Rogue Night：アンデッドを倒し、仲間を救い、死ぬたび強くなり、ネクロサリアンへ挑め！", "description": "『Rogue Night』はファンタジー系サバイバル・ローグライク。森や遺跡、謎解き満載のダンジョンを探索し、資源を集めて拠点を築き、救出したNPCを仲間にして生き残りを目指します。敵アンデッドを倒して得られる「首」を使い、死亡後も引き継がれる恒久的な強化をアンロック。3つのクラス、15種の武器、35以上のアップグレードを駆使して自分好みのビルドを構築できます。毎回少しずつ強くなり、最後にはネクロサリアンとの決戦が待ち受けます。", "rating": 7, "players": 1, "online": "None", "genre": ["RPG", "Adventure", "Action"], "img_legend": { "01v": "", "01i": "クラシクRPG！", "02i": "ダンジョンなっが", "03i": "いいストリー！", "01a": "", "Title": "" }, "img_comments": { "01v": ["死ぬほど強くなるサバイバルって新鮮ｗ", "NPC救出して仲間が増えるの最高", "ダンジョンの謎解きが普通にムズい🧩", "周回でどんどん強くなるの中毒性ヤバい", "ネクロサリアン待ってろよ、絶対倒す"], "01i": [], "02i": [], "03i": [], "01a": [], "Title": [] } };
const jaGames = {
  BillionRoad,
  ComixPlay,
  CursedCompanions,
  Deltarune,
  FatalFury,
  GasPumpSimulator,
  HogwartsLegacy,
  JapaneseDriftMaster,
  Peak,
  RogueNight
};
const Action = "アクション";
const Adventure = "アドベンチャー";
const RPG = "RPG";
const Simulator = "シミュレーター";
const Casual = "カジュアル";
const Racing = "レース";
const Strategy = "ストラテジー";
const VisualNovel = "ビジュアルノベル";
const Fight = "格闘";
const jaGenres = {
  Action,
  Adventure,
  RPG,
  Simulator,
  Casual,
  Racing,
  Strategy,
  VisualNovel,
  Fight
};
const None = "なし";
const PvP = "対戦";
const CoOp = "協力プレイ";
const jaOnline = {
  None,
  PvP,
  CoOp
};
const GridTitle = "新着作品をチェック！";
const Online = "オンライン";
const Players = "プレイヤー数";
const jaStrings = {
  GridTitle,
  Online,
  Players
};
var OnlineGameplay = /* @__PURE__ */ ((OnlineGameplay2) => {
  OnlineGameplay2[OnlineGameplay2["None"] = 0] = "None";
  OnlineGameplay2[OnlineGameplay2["PvP"] = 1] = "PvP";
  OnlineGameplay2[OnlineGameplay2["CoOp"] = 2] = "CoOp";
  return OnlineGameplay2;
})(OnlineGameplay || {});
var Genres = /* @__PURE__ */ ((Genres2) => {
  Genres2[Genres2["Action"] = 0] = "Action";
  Genres2[Genres2["Adventure"] = 1] = "Adventure";
  Genres2[Genres2["RPG"] = 2] = "RPG";
  Genres2[Genres2["Simulator"] = 3] = "Simulator";
  Genres2[Genres2["Casual"] = 4] = "Casual";
  Genres2[Genres2["Racing"] = 5] = "Racing";
  Genres2[Genres2["Strategy"] = 6] = "Strategy";
  Genres2[Genres2["VisualNovel"] = 7] = "VisualNovel";
  Genres2[Genres2["Fight"] = 8] = "Fight";
  return Genres2;
})(Genres || {});
const GenresColors = {
  Action: "crimson",
  Adventure: "forestgreen",
  RPG: "indigo",
  Simulator: "slategray",
  Casual: "deepskyblue",
  Racing: "orange",
  Strategy: "darkslateblue",
  VisualNovel: "hotpink",
  Fight: "firebrick"
};
var Languages = /* @__PURE__ */ ((Languages2) => {
  Languages2["en"] = "en";
  Languages2["es"] = "es";
  Languages2["ja"] = "ja";
  return Languages2;
})(Languages || {});
const resourcesLoader = (language) => {
  var resources = {};
  const extensionMap = {
    i: ".jpg",
    v: ".mp4",
    a: ".gif",
    e: ".jpg"
  };
  var _gamesRawData = {};
  var _genres = {};
  var _onlineGameplays = {};
  switch (language) {
    case "en":
      _gamesRawData = enGames;
      _genres = enGenres;
      _onlineGameplays = enOnline;
      resources = enStrings;
      break;
    case "es":
      _gamesRawData = esGames;
      _genres = esGenres;
      _onlineGameplays = esOnline;
      resources = esStrings;
      break;
    case "ja":
      _gamesRawData = jaGames;
      _genres = jaGenres;
      _onlineGameplays = jaOnline;
      resources = jaStrings;
      break;
  }
  Object.keys(_gamesRawData).forEach((game) => {
    const gameRawData = _gamesRawData[game];
    const onlineGameplayText = _onlineGameplays[gameRawData.online];
    const onlineGameplay = OnlineGameplay[gameRawData.online];
    const genres = gameRawData.genre.map((genre) => [
      Genres[genre],
      _genres[genre]
    ]);
    const media = {};
    Object.keys(gameRawData.img_legend).forEach((imageID) => {
      const ext = extensionMap[imageID.slice(-1)];
      media[imageID] = {
        uri: `/media/${game}${imageID}${ext}`,
        legend: gameRawData.img_legend[imageID],
        comments: gameRawData.img_comments[imageID]
      };
    });
    resources[game] = {
      title: _gamesRawData[game].title,
      oneLine: _gamesRawData[game].one_line,
      description: _gamesRawData[game].description,
      rating: _gamesRawData[game].rating,
      players: _gamesRawData[game].players,
      online: [onlineGameplay, onlineGameplayText],
      genres,
      media
    };
  });
  return resources;
};
const COMMENT_SPEED = 40;
const COMMENT_WS_SEPARATION = 12;
const CommentsMarquee = (comments) => {
  const content = ["", "", "", ...comments, ...comments].join(
    "	".repeat(COMMENT_WS_SEPARATION)
  );
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden whitespace-pre py-2", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "inline-block animate-[marquee_var(--speed,20s)_linear_infinite]",
      style: { ["--speed"]: `${COMMENT_SPEED}s` },
      children: /* @__PURE__ */ jsx("span", { className: "mx-4 text-xl md:text-lg lg:text-2xl comments-marquee-text", children: content })
    }
  ) });
};
const GAMES_INTERVAL = 15e3;
const GamesCarousel = (games) => {
  const [currentGame, setCurrentGame] = React.useState(0);
  const nextGame = () => setCurrentGame((prevGame2) => (prevGame2 + 1) % games.length);
  const prevGame = () => setCurrentGame((prevGame2) => (prevGame2 - 1 + games.length) % games.length);
  React.useEffect(() => {
    const timer = setInterval(nextGame, GAMES_INTERVAL);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl shadow-md shadow-gray-600 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-600 ease-out",
        style: { transform: `translateX(-${currentGame * 100}%)` },
        children: games.map((gameData, gameIdx, _) => /* @__PURE__ */ jsx("div", { className: "w-full flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[40vh] md:h-[50vh] lg:h-[60vh]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: gameData.media["Title"].uri,
              alt: gameData.media["Title"].legend,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute flex bottom-10 w-full justify-center", children: CommentsMarquee(gameData.media["01v"].comments) })
        ] }) }, gameIdx))
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevGame,
        className: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300",
        children: /* @__PURE__ */ jsx(PrevIcon, { className: "w-6 h-6 text-black" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextGame,
        className: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300",
        children: /* @__PURE__ */ jsx(NextIcon, { className: "w-6 h-6 text-black" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-0 right-0", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: games.map((_, idx) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `
              w-3 h-3 rounded-full transition-all duration-300
              ${currentGame === idx ? "bg-white scale-110" : "bg-white bg-opacity-50"}
            `,
        onClick: () => setCurrentGame(idx)
      },
      idx
    )) }) })
  ] });
};
const ScreenshotFrame = (key, media, accentColor = "red") => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex m-4 rounded-2xl shadow-2xl overflow-visible",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: media.uri,
            alt: key,
            className: "rounded-2xl top-0 left-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute flex top-7 -left-[1.5rem] text-extrabold text-5xl whitespace-nowrap",
            style: {
              color: accentColor,
              transform: "rotate(-25deg)",
              zIndex: 2,
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.85)",
              pointerEvents: "none"
            },
            children: media.legend
          }
        )
      ]
    },
    key
  );
};
const GameDetails = ({
  gameKey,
  gameData,
  translationStrings,
  open,
  onClose
}) => {
  const _onClose = (_e, _r) => onClose();
  const onlinePlay = `${translationStrings["Online"]}: ${gameData.online[1]}`;
  const players = `${translationStrings["Players"]}: ${gameData.players}`;
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      id: `${gameKey}-details`,
      open,
      onClose: _onClose,
      "aria-labelledby": "game-title",
      "aria-describedby": "game-description",
      children: [
        /* @__PURE__ */ jsx(DialogTitle, { id: "game-title", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-bold", children: gameData.title }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-600", children: [
            `${onlinePlay} | `,
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-800 text-bold", children: gameData.rating }),
            `/10 | ${players}`
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(Box, { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-row mb-4", children: [
            /* @__PURE__ */ jsx("video", { autoPlay: true, loop: true, muted: true, className: "w-full h-auto rounded-md", children: /* @__PURE__ */ jsx("source", { src: gameData.media["01v"].uri, type: "video/mp4" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute flex top-10 w-full justify-center", children: CommentsMarquee(gameData.media["01v"].comments) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-row", children: /* @__PURE__ */ jsx(DialogContentText, { id: "game-oneliner", className: "font-bold mb-2", children: gameData.oneLine }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-row justify-center mx-auto m-5", children: gameData.genres.map((genre, idx) => {
            const genreColorKey = Genres[genre[0]];
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: "inline-block rounded-2xl text-white px-4 mx-4 py-1",
                style: { backgroundColor: GenresColors[genreColorKey] },
                children: genre[1]
              },
              idx
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-row", children: /* @__PURE__ */ jsx(DialogContentText, { id: "game-description", children: gameData.description }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-row", children: Object.keys(gameData.media).map((mediaKey) => {
            if (mediaKey.endsWith("i")) {
              return ScreenshotFrame(mediaKey, gameData.media[mediaKey]);
            }
          }) })
        ] }) })
      ]
    }
  );
};
const GamesGrid = (games, featured) => {
  const gamesInitStates = Object.keys(games).map((key) => [key, false]);
  const [state, setState] = React.useState(
    Object.fromEntries(gamesInitStates)
  );
  const openDetails = (gameKey) => {
    setState((prev) => ({ ...prev, [gameKey]: true }));
  };
  const closeDetails = (gameKey) => {
    setState((prev) => ({ ...prev, [gameKey]: false }));
  };
  const gridTitle = typeof games["GridTitle"] === "string" ? games["GridTitle"] : "New Releases!";
  const translationStrings = {};
  translationStrings["Online"] = typeof games["Online"] === "string" ? games["Online"] : "Online";
  translationStrings["Players"] = typeof games["Players"] === "string" ? games["Players"] : "Players";
  return /* @__PURE__ */ jsx("div", { className: "w-full text-white text-center md:text-left my-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "pb-8", children: /* @__PURE__ */ jsx("p", { className: "text-4xl text-black font-bold inline border-b-4 border-gray-500", children: gridTitle }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5", children: Object.keys(games).map((gameKey) => {
      if (typeof games[gameKey] === "string") return null;
      const highlight = featured.includes(gameKey) ? "flame-border" : "";
      const gameData = games[gameKey];
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${highlight} relative flex h-[8rem] items-center shadow-md shadow-gray-600 rounded-lg overflow-hidden`,
            onClick: () => openDetails(gameKey),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: gameData.media["Title"].uri,
                  alt: gameData.title,
                  className: "rounded-md duration-200 hover:scale-105 top-0 left-0 w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: gameData.media["01a"].uri,
                  alt: `${gameData.title}-animation`,
                  className: "absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          GameDetails,
          {
            gameKey,
            gameData,
            translationStrings,
            open: state[gameKey],
            onClose: () => closeDetails(gameKey)
          }
        )
      ] }, gameKey);
    }) })
  ] }) });
};
const FEATURED_GAMES = ["Peak", "HogwartsLegacy", "FatalFury", "BillionRoad"];
function Showcase() {
  const [language, setLanguage] = React.useState(Languages.en);
  const resources = resourcesLoader(language);
  const carouselResources = FEATURED_GAMES.map(
    (gameKey) => resources[gameKey].title === void 0 ? null : resources[gameKey]
  ).filter((x) => !!x);
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: /* @__PURE__ */ jsx("div", { className: "flex w-full space-y-6 px-4 justify-center", children: /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex-col", width: 3 / 4 }, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-end w-full mx-auto my-4", children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          fontSize: "2rem",
          component: "span",
          className: language === Languages.en ? "selected-language" : "",
          sx: { mx: 1, cursor: "pointer" },
          onClick: () => setLanguage(Languages.en),
          children: "🇬🇧"
        }
      ),
      /* @__PURE__ */ jsx(
        Typography,
        {
          fontSize: "2rem",
          component: "span",
          className: language === Languages.es ? "selected-language" : "",
          sx: { mx: 1, cursor: "pointer" },
          onClick: () => setLanguage(Languages.es),
          children: "🇪🇸"
        }
      ),
      /* @__PURE__ */ jsx(
        Typography,
        {
          fontSize: "2rem",
          component: "span",
          className: language === Languages.ja ? "selected-language" : "",
          sx: { mx: 1, cursor: "pointer" },
          onClick: () => setLanguage(Languages.ja),
          children: "🇯🇵"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: GamesCarousel(carouselResources) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: GamesGrid(resources, FEATURED_GAMES) })
  ] }) }) }) });
}
function meta({}) {
  return [{
    title: "Game Showcase"
  }, {
    name: "description",
    content: "Friendly game showcase web app"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Showcase, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/n_gamerecommendations/assets/entry.client-BZ07yuMJ.js", "imports": ["/n_gamerecommendations/assets/chunk-PVWAREVJ-wuwjIFqh.js", "/n_gamerecommendations/assets/index-B9rtC5Z8.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/n_gamerecommendations/assets/root-DHMmeQRz.js", "imports": ["/n_gamerecommendations/assets/chunk-PVWAREVJ-wuwjIFqh.js", "/n_gamerecommendations/assets/index-B9rtC5Z8.js", "/n_gamerecommendations/assets/DefaultPropsProvider-DFj9h72y.js"], "css": ["/n_gamerecommendations/assets/root-BpRhiIH2.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/n_gamerecommendations/assets/home-C41vQF--.js", "imports": ["/n_gamerecommendations/assets/chunk-PVWAREVJ-wuwjIFqh.js", "/n_gamerecommendations/assets/DefaultPropsProvider-DFj9h72y.js", "/n_gamerecommendations/assets/index-B9rtC5Z8.js"], "css": ["/n_gamerecommendations/assets/home-Bvpf3tbJ.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/n_gamerecommendations/assets/manifest-179b61fb.js", "version": "179b61fb", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/n_gamerecommendations/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
