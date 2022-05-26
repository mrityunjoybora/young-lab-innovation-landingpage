import { ChevronDownIcon as ChevronDownIconSolid } from "@heroicons/react/solid";
import { ChevronDownIcon as ChevronDownIconOutline } from "@heroicons/react/outline";
import React, { useState } from "react";

function DescriptionCard() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="my-4 px-6 py-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-out">
      <h2 className="text-blue-400 font-bold text-xl ">Description</h2>
      <p className="my-4">
        The course aims at enhancing mathematical skills and brain development.
        It improves one's number sense and helps them gain the ability to
        understand relationships between quantities, while stimulating their
        brain and improving observation skills.
      </p>

      <div className=" flex items-center gap-4 py-2">
        <h2 className="text-blue-400 font-bold text-lg ">Details</h2>

        {toggle ? (
          <ChevronDownIconSolid
            className="h-6 w-6 border-2 cursor-pointer rounded-full text-white bg-blue-400"
            onClick={() => handleClick()}
          />
        ) : (
          <ChevronDownIconOutline
            className="h-6 p-0.5 w-6 cursor-pointer border-2 rounded-full text-blue-400"
            onClick={() => handleClick()}
          />
        )}
      </div>

      {toggle && (
        <p className="mt-2 whitespace-pre-line list-none">
          <li className="my-1">CLASS 1 - Criss-cross multiplication </li>
          <li className="my-1">
            CLASS 2 - Subtraction with numbers near to 10 and multiples of 10
            Cutoff method addition/ Vyavakalanam method Dot method addition/
            Rekhanth method{" "}
          </li>
          <li className="my-1">
            CLASS 3 - Multiplication upto 100 (Done mentally){" "}
          </li>
          <li className="my-1">
            CLASS 4 - Subtraction with Numbers near 10 and multiple of 10{" "}
          </li>
          <li className="my-1">
            CLASS 5 - Digit sum method Multiplication using base method part 1/
            Nikhilam method, Fractions{" "}
          </li>
          <li className="my-1">
            CLASS 6 - Base method multiplication part 2 Division part 1{" "}
          </li>
          <li className="my-1">CLASS 7 - LCM and HCF </li>
          <li className="my-1">
            CLASS 8 - Multiplication with series of 9 Division part 2{" "}
          </li>
          <li className="my-1">
            CLASS 9 - Multiplication with series of 1 Multiplication with 21,31
            41 91 Base complement method subtraction/ Nikhilam method ,Division
            of any number by 11{" "}
          </li>
          <li className="my-1">
            CLASS 10 - Division with series of 9 Multiplication by digits 12 to
            19 Multiplication with 5 25 125 Percentage
          </li>
        </p>
      )}
    </div>
  );
}

export default DescriptionCard;
