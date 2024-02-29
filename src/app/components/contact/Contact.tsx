"use client";

import React from "react";
import FloatingLabelInput from "./sub-components/Input";
import { SliderHover } from "./sub-components/Slider";
import Textbox from "./sub-components/Textbox";

function handleform(e: any) {
  e.preventDefault();
  const data = e.value;
}

export const Contact = () => {
  return (
    <div className="flex flex-col w-3/4 gap-8 pt-32">
      <form action="POST">
        <FloatingLabelInput />
        <SliderHover />
        <Textbox />
        <button
          className="px-6 bg- py-4 border rounded-lg bg-sky-600 text-white"
          onClick={handleform}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
