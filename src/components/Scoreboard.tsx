import React, { useState } from "react";

import Player from "./scoreboardcomponents/Player";
import AddPlayerForm from "./scoreboardcomponents/AddPlayerForm";

type PlayerObj = {
  id: number;
  name: string;
  score: number;
};

function SortByScore(playerA: PlayerObj, playerB: PlayerObj) {
  return playerB.score - playerA.score;
}

function SortByName(playerA: PlayerObj, playerB: PlayerObj) {
  return playerA.name.localeCompare(playerB.name);
}

export default function Scoreboard() {
  const [players, setPlayers] = useState<PlayerObj[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sortBy, setSortBy] = useState("score");

  let playersSorted = [...players].sort(
    sortBy === "score" ? SortByScore : SortByName
  );

  const incrementscore = () => {};

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {playersSorted.map((player) => {
        return (
          <Player
            key={player.id}
            name={player.name}
            score={player.score}
            incrementscore={incrementscore}
          />
        );
      })}
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <AddPlayerForm />
    </div>
  );
}
