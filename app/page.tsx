'use client';
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Rules from "./components/Rules";

export default function Home() {
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);

  const toggleRules = () => {
    setIsRulesOpen((isRulesOpen) => !isRulesOpen);
  }

  return (
    <div className="flex min-h-screen">
      {
        isRulesOpen
          ? <Rules closeRules={toggleRules} />
          : <MainMenu viewRules={toggleRules} />
      }
    </div>
  )
}
