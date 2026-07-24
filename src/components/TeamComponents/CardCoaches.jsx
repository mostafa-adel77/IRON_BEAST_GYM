import coach1 from "../../assets/images/coach1.jpg";
import coach2 from "../../assets/images/coach2.jpg";
import coach3 from "../../assets/images/coach3.jpg";
import coach4 from "../../assets/images/coach4.jpg";

export default function CardCoaches() {
  const coaches = [
    {
      image: coach1,
      name: "Marcus Steel",
      job: "Head Strength Coach",
      desc: "15+ years of powerlifting and S&C coaching. IPF national-level competitor.",
    },
    {
      image: coach2,
      name: "Lara Cruz",
      job: "HIIT & Conditioning",
      desc: "NASM-CPT, ex-national track athlete. Specializes in fat loss and athletic conditioning.",
    },
    {
      image: coach3,
      name: "Dmitri Volkov",
      job: "Powerlifting & Bodybuilding",
      desc: "Pro bodybuilder and 300kg+ deadlifter. Builds size, strength and mindset.",
    },
    {
      image: coach4,
      name: "Sofia Reyes",
      job: "Yoga, Mobility & Gymnastics",
      desc: "500hr RYT yoga instructor and gymnastics coach. Recovery, flexibility and bodyweight skills.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-20">
      {coaches.map((coach, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-2xl bg-grayDark shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red/30 cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={coach.image}
              alt={coach.name}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-bold text-white">{coach.name}</h2>

            <p className="text-red font-semibold uppercase tracking-wide">
              {coach.job}
            </p>

            <p className="text-gray text-base leading-7">{coach.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
