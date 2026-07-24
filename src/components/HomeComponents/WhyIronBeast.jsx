export default function WhyIronBeast() {
  let styleCard =
    "p-8 flex flex-col gap-3 hover:cursor-pointer border-2 border-black hover:border-red rounded-2xl bg-grayDark shadow transition duration-300 hover:translate-y-1";
  const arr = [
    {
      logo: "🏋️",
      title: "Heavy Iron",
      desc: " Olympic platforms, racks, plates. Built for serious lifters.",
    },
    {
      logo: "🤸",
      title: "Gymnastics Zone",
      desc: " Rings, parallettes, pull-up rigs and crash mats for skill work.",
    },
    {
      logo: "🔥",
      title: "24/7 Access",
      desc: " Train when the fire hits. Members lift on their own schedule.",
    },
    {
      logo: "💪",
      title: "Pro Coaches",
      desc: "Certified strength, gymnastics and conditioning specialists.",
    },
  ];
  return (
    <div className="py-15 flex flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        Why<span className="text-red"> IronBEAST</span>
      </h1>
      <p className="text-gray text-2xl font-normal">
        A complete training facility — from heavy iron to gymnastics rings, we
        cover every discipline
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
