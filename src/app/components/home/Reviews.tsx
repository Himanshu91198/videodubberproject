import React from "react";
import { Rating } from "@mantine/core";
import { Button } from "@mantine/core";
import { IoMdArrowDropright } from "react-icons/io";

export const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-8 px-64">
      <h1 className="text-3xl font-extrabold">Customer Reviews</h1>
      <h3 className=" text-slate-600 text-base">
        Rated{" "}
        <span className="text-black ml-1 mr-1 font-extrabold">
          Excellent 4.8/5
        </span>{" "}
        based on 850+ reviews
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 px-4 py-4 border rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className=" text-black text-xl">
                I tried the trial version of the…
              </h3>
              <Rating value={4.5} fractions={2} readOnly />
            </div>
            <p className="text-slate-600 text-base pt-4">
              I tried the trial version of the service for subtitles and was
              very surprised at the excellent transcription work for the
              subtitles.
            </p>
            <p className="pt-16 text-slate-600 text-base">
              UneGrenadeCa - Trustpilot
            </p>
          </div>
        </div>
        <div className="col-span-2 px-4 py-4 border rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-black text-xl">
                Happy Scribe is an awesome platform I…
              </h3>
              <Rating value={4.5} fractions={2} readOnly />
            </div>
            <p className="text-slate-600 text-base pt-4">
              Happy Scribe is an awesome platform I found to use in my Social
              Work class. It is super handy, easy to use, and has great UX
              design.
            </p>
            <p className="pt-16 text-slate-600 text-base">
              samantha koland - Trustpilot
            </p>
          </div>
        </div>
        <div className="col-span-2 px-4 py-4 border rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-black text-xl">Easy</h3>
              <Rating value={4.5} fractions={2} readOnly />
            </div>
            <p className="text-slate-600 text-base pt-4">
              Easy, fast and surprisingly good auto-transcription
            </p>
            <p className="pt-16 text-slate-600 text-base">Paul - Trustpilot</p>
          </div>
        </div>
        <div className="col-span-2 px-4 py-4 border rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-black text-xl">I love Happy Scribe!</h3>
              <Rating value={4.5} fractions={2} readOnly />
            </div>
            <p className="text-slate-600 text-base pt-4">
              As a podcaster, blogger, course creator, and youtuber, Happy
              Scribe has been invaluable! I now can add transcripts to all my
              course video and audio files, adding value to my clients. Thank
              you!
            </p>
            <p className="pt-16 text-slate-600 text-base">
              5c37ba825f534a319202599c3f12abe1 - AppSumo
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className=" text-slate-600 text-base">See all reviews</p>
        <IoMdArrowDropright />
      </div>
      <Button variant="filled" color="indigo" size="xl" radius="md">
        Get Started
      </Button>
    </div>
  );
};
