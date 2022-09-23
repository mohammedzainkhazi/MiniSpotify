import React from "react";
import CustomCard from "./CustomCard";

function CustomCards() {
  const data = [
    {
      song: "Dj Wale Babu",
      singer: "BadShah",
    },
    {
      song: "Lungi Dance",
      singer: "Yo Yo Honey Singh",
    },
    {
      song: "SDIV IZz",
      singer: "sidv ziudv ",
    },
    {
      song: "Dj Wale Babu",
      singer: "BadShah",
    },
    {
      song: "Lungi Dance",
      singer: "Yo Yo Honey Singh",
    },
    {
      song: "SDIV IZz",
      singer: "sidv ziudv ",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap">
        {
            data.map((album, i) => (
                <CustomCard singer={album.singer} song={album.song} />
            ))
        }
      </div>
    </div>
  );
}

export default CustomCards;
