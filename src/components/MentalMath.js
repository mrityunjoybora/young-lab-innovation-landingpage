import React from "react";
import {
  CakeIcon,
  CalendarIcon,
  ClockIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import rishiImage from "../images/file-a1-1603352187.png";
import DescriptionCard from "./DescriptionCard";
import ValueProp from "./ValueProp";
import Card from "./Card";

function MentalMath() {
  return (
    <div className="px-10 md:px-20 sm:px-16 pt-6 max-w-6xl mx-auto">
      <div className="">
        <div className="flex gap-2 items-center text-blue-400">
          <PlusCircleIcon className="h-6 w-6" />
          <p className="font-semibold text-lg">MATH</p>
        </div>
        <p className="mt-4 text-2xl font-bold">MENTAL MATH</p>
        <div>
          <div className="lg:flex block lg:items-start lg:justify-evenly lg:flex-row-reverse lg:gap-10">
            <div className="flex justify-center items-center">
              <img className="object-cover" src={rishiImage} alt="" />
            </div>

            <div className="lg:max-w-[500px] ">
              <p className="text-lg my-4 ">
                Have Fun with Math! Get rid of your Math phobia. Become a Human
                Calculator yourself and be able to calculate 10-15 times faster
                than before!
              </p>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-8">
                <ValueProp Icon={CakeIcon} title={"7 - 8 Years"} />
                <ValueProp Icon={UserGroupIcon} title={"7 - 8 Students"} />
                <ValueProp Icon={ClockIcon} title={"60 Mins Per Class"} />
                <ValueProp Icon={CalendarIcon} title={"5 Weeks Duration"} />
              </div>
              <button className="shadow-lg py-4 w-full mt-2 mb-8 bg-gray-300 font-medium hover:scale-105 transition-transform duration-200 ease-out">
                ₹1499 INR For 10 live classes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <p className="font-bold text-xl my-6">Available Batches</p>

        <DescriptionCard />
        <Card
          title={"Homework"}
          description={
            "Comprehensive home assignments will be provided , which will be an extension of what is done is the class."
          }
        />
        <Card
          title={"Learning Goals"}
          description={
            "Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!"
          }
        />

        
      </div>
    </div>
  );
}

export default MentalMath;
