export default function ShopByCategory() {
  let styleCard =
    "p-8 flex flex-col items-center gap-3 border-4 border-t-red border-black rounded-2xl bg-grayDark shadow transition duration-300 hover:translate-y-1 hover:cursor-pointer";
  const arr = [
    {
      logo: " 💊",
      title: "Supplements",
      desc: "Protein, Pre-WorkOut & Recovery. ",
    },
    {
      logo: "🏋️",
      title: "Equipments",
      desc: "Dumbbells, Belts & Sleeves.",
    },
    {
      logo: "👕",
      title: "Apparel",
      desc: " Hoodies, Tees & Gym Wear.",
    },
    {
      logo: "🎒",
      title: "Accessoires",
      desc: "Shakers, Ropes & Gloves",
    },
  ];
  return (
    <div className="py-15 flex flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        Shop <span className="text-red">by Category</span>
      </h1>
      <p className="text-gray text-2xl font-normal">
        Four dedicated stores. Pick your weapon.
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
