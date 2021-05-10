import React from "react";

type Props = {
  name: string;
  score: number;
  incrementscore: Function;
};

export default function Player(props: Props) {
  return (
    <div>
      <li className="Player">
        <p>
          {props.name} (score: {props.score})
        </p>
      </li>
    </div>
  );
}
