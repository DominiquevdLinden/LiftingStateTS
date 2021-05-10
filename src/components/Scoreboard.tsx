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

  const incrementScore = (id: number) => {
    console.log("incrementing", id);
    const updatedPlayerArray = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(updatedPlayerArray);
  };

  const resetScore = () => {
    const updatedPlayerArray = players.map((player) => {
      player.score = 0;
      return player;
    });
    setPlayers(updatedPlayerArray);
  };

  const randomizeScore = () => {
    const updatedPlayerArray = players.map((player) => {
      player.score = Math.floor(Math.random() * 101);
      console.log(player.score);
      return player;
    });
    setPlayers(updatedPlayerArray);
  };

  const addPlayer = (name: string) => {
    setPlayers([...players, { id: players.length + 1, name: name, score: 0 }]);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <button onClick={resetScore}>Reset</button>
      <button onClick={randomizeScore}>Randomize</button>
      {playersSorted.map((player) => {
        return (
          <Player
            key={player.id}
            name={player.name}
            score={player.score}
            incrementscore={() => {
              incrementScore(player.id);
            }}
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
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
