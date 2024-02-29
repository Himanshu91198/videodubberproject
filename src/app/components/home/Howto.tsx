import React from "react";
import Image from "next/image";

const info = [
  {
    title: "1. Upload your file.",
    text: "With our uploader, you can import your file from anywhere, whether its on your laptop, Google Drive, Youtube, or Dropbox.",
  },
  {
    title: '2. Select "French".',
    text: "Determine the language of the audio of your video.",
  },
  {
    title: '3. Select "Human made".',
    text: "With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer.",
  },
  {
    title: '4. Toggle "Translate subtitles to another language".',
    text: 'Select "English" to determine the target language for the subtitle translation process.',
  },
  {
    title: "5. Get notified when your French and English subtitles are ready.",
    text: "Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles.",
  },
  {
    title: "6. Receive your subtitles.",
    text: "Access your subtitles from the dashboard.",
  },
  {
    title: '7. Click on "Export" and choose your preferred file format.',
    text: "You can export to SRT, VTT, and many more. It's that easy to have your video professionally subtitled!",
  },
];

export const Howto = () => {
  return (
    <div className="flex items-start gap-16 px-16 pt-32">
      <Image
        src="https://www.happyscribe.com/assets/landing/illustrations/subtitle-editor-145f5d99a593843c3a0771d4f5a06fce37ffb9639281bacad91526a16ca4421c.jpg"
        alt="image3"
        height={800}
        width={600}
      ></Image>
      <div className=" px-8 py-8 flex flex-col gap-6 border rounded-lg">
        <h1 className="text-3xl font-extrabold">
          How to create English subtitles for an French video?
        </h1>
        {info.map((det, i) => (
          <div className="flex flex-col gap-2" key={i}>
            <h1 className="text-xl font-extrabold">{det.title}</h1>
            <p className=" text-slate-600 text-base">{det.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
