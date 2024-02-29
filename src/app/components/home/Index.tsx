import React from "react";
import { Hero } from "./Hero";
import { Ratings } from "./Ratings";
import { Companies } from "./Companies";
import { How } from "./How";
import { Features } from "./Features";
import { Info } from "./Info";
import { Howto } from "./Howto";
import { Reviews } from "./Reviews";

export const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Ratings />
      <Companies />
      <How />
      <Features />
      <Info />
      <Howto />
      <Reviews />
    </div>
  );
};
