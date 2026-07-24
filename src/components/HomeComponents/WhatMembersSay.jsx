export default function WhatMembersSay() {
  let styleCard =
    "p-8 flex flex-col gap-3 hover:cursor-pointer border-4 border-l-red border-black  rounded-2xl bg-grayDark shadow transition duration-300 hover:translate-y-1";
  const arr = [
    {
      name: "— Jake R.",
      desc: "'Best gym I've ever trained in. The gymnastics course took my pull-ups from 5 to 20 in 3 months.'",
    },
    {
      name: "— Mei L.",
      desc: "'Coach Lara's HIIT class destroyed my fat loss plateau. Down 12kg and stronger than ever.'",
    },
    {
      name: "— Sam O.",
      desc: "'I came for powerlifting, stayed for the community. PR'd my deadlift at 220kg.'",
    },
  ];
  return (
    <div className="py-15 flex flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        What<span className="text-red"> Members Say</span>
      </h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {arr.map((el, index) => (
          <div key={index} className={styleCard}>
            <p className="text-3xl uppercase font-extrabold  text-red">
              {el.name}
            </p>
            <p className="text-gray italic text-lg font-normal">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
