export default function AboutIronBeast() {
  const arr = [
    { logo: "5,000+", title: "Active Members" },
    { logo: "20+", title: "Certified Coaches" },
    { logo: "10", title: "Years Strong" },
    { logo: "24/7", title: "Open Access" },
  ];

  return (
    <section className="w-full py-20 font-oswald">
      <div className="mx-auto max-w-7xl px-5 flex flex-col gap-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white">
            About <span className="text-red">IronBeast</span>
          </h1>

          <p className="text-gray text-lg sm:text-xl lg:text-2xl">
            Built by lifters, for lifters. No fluff. Just iron.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-5">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white">
              Our <span className="text-red">Story</span>
            </h2>

            <p className="text-gray text-lg lg:text-2xl leading-relaxed">
              IronBeast started in 2015 in a garage with two squat racks, one
              bench, and a relentless belief that strength changes lives. Today
              we're a full-scale strength facility serving thousands of lifters,
              athletes, and weekend warriors.
            </p>

            <p className="text-gray text-lg lg:text-2xl leading-relaxed">
              We don't sell shortcuts. We sell the platform, the coaches, and
              the community that turns work into results.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-5 w-full">
            {arr.map((el, index) => (
              <div
                key={index}
                className="rounded-3xl border-l-4 border-l-red border border-black bg-grayDark p-6 text-center shadow-xl hover:scale-95 transition duration-300 cursor-pointer"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red">
                  {el.logo}
                </h3>

                <p className="mt-2 text-sm sm:text-lg lg:text-xl text-gray">
                  {el.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
