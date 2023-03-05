'use client';
import { useState } from "react";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import Rules from "./components/Rules";

const Views = ["menu", 'game', 'rules'] as const;
type View = typeof Views[number];

export default function Home() {
  const [view, setView] = useState<View>("menu");

  const viewRules = () => {
    setView('rules');
  }

  const viewMenu = () => {
    setView('menu');
  }

  const startGame = () => {
    setView('game');
  }

  return (
    <div className="flex min-h-screen">
      {(view === "menu") && <MainMenu viewRules={viewRules} startGame={startGame} />}
      {(view === "game") && <Game viewMenu={viewMenu} />}
      {(view === "rules") && <Rules closeRules={viewMenu} />}
    </div>
  )
}
