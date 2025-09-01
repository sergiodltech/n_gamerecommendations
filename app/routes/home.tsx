import type { Route } from "./+types/home";
import { Showcase } from "../showcase/Showcase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Game Showcase" },
    { name: "description", content: "Friendly game showcase web app" },
  ];
}

export default function Home() {
  return <Showcase />;
}
