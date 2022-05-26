import { ChevronDownIcon as ChevronDownIconSolid } from "@heroicons/react/solid";
import { ChevronDownIcon as ChevronDownIconOutline } from "@heroicons/react/outline";
import React, { useState } from "react";

function Card({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="my-6 px-6 py-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-out">
      <div className=" flex items-center gap-4">
        <h2 className="text-blue-400 font-bold text-xl ">{title}</h2>
        {toggle ? (
          <ChevronDownIconSolid
            className="h-6 w-6 border-2 rounded-full cursor-pointer text-white bg-blue-400"
            onClick={handleClick}
          />
        ) : (
          <ChevronDownIconOutline
            className="h-6 p-0.5 w-6 border-2 rounded-full cursor-pointer text-blue-400"
            onClick={handleClick}
          />
        )}
      </div>

      {toggle && <p className="mt-2 whitespace-pre-line">{description}</p>}
    </div>
  );
}

export default Card;
