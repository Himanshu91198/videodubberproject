import React from "react";

export const How = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-14">
      <h1 className="text-3xl font-black">How does it work?</h1>
      <div className="flex items-center gap-6 w-[1140px] pt-16">
        <div className="flex h-40 gap-6 flex-col px-6 py-6 border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-white bg-[#FF7A85] rounded-md text-base">
              1
            </span>
            Upload.
          </div>
          <p>
            Upload your French videos, your URLs, or pull from Youtube, Vimeo,
            Drive, and more.
          </p>
        </div>
        <div className="flex h-40 flex-col gap-6 px-4 py-4 border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-white bg-[#0064DF] rounded-md text-base">
              2
            </span>
            Create & Translate.
          </div>
          <p>
            A subtitler will create the original (French) subtitles. A English
            subtitle translator will translate the subtitles.
          </p>
        </div>
        <div className="flex h-40 flex-col gap-6 px-4 py-4 border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-white bg-[#004BA7] rounded-md text-base">
              3
            </span>
            Download.
          </div>
          <p>
            Your file will appear on your dashboard with the perfect English
            subtitles.
          </p>
        </div>
      </div>
    </div>
  );
};
