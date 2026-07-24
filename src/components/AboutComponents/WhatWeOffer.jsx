export default function WhatWeOffer() {
  const arr = [
    {
      name: "Strength Training:",
      desc: " Full powerlifting and Olympic lifting setups.",
    },
    {
      name: "Group Conditioning: ",
      desc: " Daily HIIT, metcons, and bootcamps.",
    },
    {
      name: "Personal Coaching:",
      desc: "  Programming and accountability tailored to you.",
    },
    {
      name: "Nutrition Guidance:",
      desc: " Meal planning, macros, and habit coaching.",
    },
    {
      name: "Recovery Zone:",
      desc: " Sauna, foam rolling station, and mobility area.",
    },
  ];
  return (
    <div className="w-full py-20 font-oswald space-y-10">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white">
        What<span className="text-red"> We Offers</span>
      </h1>
      <div className="flex flex-col gap-4">
        {arr.map((el, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-l-red border border-black bg-grayDark p-6 shadow-xl hover:scale-95 transition duration-300 cursor-pointer"
          >
            <h1 className="text-2xl font-semibold text-white">
              <span className="text-red">{el.name}</span>
              {el.desc}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
