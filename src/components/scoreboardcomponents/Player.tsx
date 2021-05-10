import React from "react";

type Props = {
  name: string;
  score: number;
  incrementscore: () => void;
};

export default function Player(props: Props) {
  return (
    <div>
      <li className="Player">
        <p>
          {props.name} (score: {props.score})
          <button onClick={props.incrementscore}>increment</button>
        </p>
      </li>
    </div>
  );
}
