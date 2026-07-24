import React from "react";

export default function TrainingCourses() {
  let styleCard =
    "p-8 flex flex-col gap-3 border-4 border-t-red border-black rounded-2xl bg-grayDark shadow transition duration-300 hover:translate-y-1 hover:cursor-pointer";
  const arr = [
    {
      logo: "🏋️",
      title: "Strength & Powerlifting",
      desc: "Squat, bench, deadlift programs from beginner to competition prep.",
    },
    {
      logo: "🤸",
      title: "Gymnastics & Calisthenics",
      desc: " Handstands, muscle-ups, levers and bodyweight strength progressions.",
    },
    {
      logo: "🔥",
      title: "HIIT & Conditioning",
      desc: " High-intensity interval training to burn fat and build a savage engine.",
    },
    {
      logo: "🥊",
      title: "Boxing & Kickboxing",
      desc: " Footwork, combos, pad work and sparring with certified coaches",
    },
    {
      logo: "🧘",
      title: "Yoga & Mobility",
      desc: " Improve flexibility, recovery and joint health with daily mobility classes.",
    },
    {
      logo: "💪",
      title: "Bodybuilding",
      desc: "Hypertrophy plans for size, symmetry and stage-ready conditioning.",
    },
    {
      logo: "🏃",
      title: "CrossFit Style",
      desc: "Functional WODs mixing lifting, gymnastics and conditioning",
    },
    {
      logo: "🥗",
      title: "Nutrition Coaching",
      desc: "Macro plans for cutting, bulking or staying lean year-round.",
    },
  ];
  return (
    <div className="py-15 flex flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        Training<span className="text-red"> Courses</span>
      </h1>
      <p className="text-gray text-2xl font-normal">
        We run structured training courses for every fitness and gymnastics
        level — pick your path and let our coaches guide you.
      </p>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {arr.map((el, index) => (
          <div key={index} className={styleCard}>
            <p className="text-2xl">{el.logo}</p>
            <p className="text-3xl uppercase font-extrabold  text-white">
              {el.title}
            </p>
            <p className="text-gray text-lg font-normal">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
