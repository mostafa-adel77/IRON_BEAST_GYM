export default function HowWeTrainYou() {
  let styleCard =
    "p-8 flex flex-col gap-3 hover:cursor-pointer border-4 border-l-red border-black  rounded-2xl bg-grayDark shadow transition duration-300 hover:translate-y-1";
  const arr = [
    {
      title: "Personal Training",
      desc: "1-on-1 coaching to crush plateaus and build a body you're proud of.",
    },
    {
      title: "Group Classes",
      desc: "HIIT, gymnastics, strength, mobility — daily classes on the schedule.",
    },
    {
      title: "Online Programs",
      desc: "Custom remote programming with weekly check-ins and video feedback.",
    },
    {
      title: "Nutrition Plans",
      desc: "Macro plans built for cutting, bulking, or staying lean year-round.",
    },
  ];
  return (
    <div className="py-15 flex flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        How We<span className="text-red"> Train You</span>
      </h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {arr.map((el, index) => (
          <div key={index} className={styleCard}>
            <p className="text-3xl uppercase font-extrabold  text-red">
              {el.title}
            </p>
            <p className="text-gray text-lg font-normal">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
