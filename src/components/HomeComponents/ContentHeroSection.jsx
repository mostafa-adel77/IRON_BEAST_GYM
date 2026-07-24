import { Link } from "react-router-dom";

export default function ContentHeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl flex flex-col gap-7 font-oswald">
            <h2 className=" uppercase font-bold text-red text-lg sm:text-xl md:text-2xl">
              Welcome to IronBeast
            </h2>
            <h1
              className="
                uppercase
                font-black
                text-white
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
              "
            >
              Forge Your <span className="text-red">Strength</span>
            </h1>
            <p className=" max-w-2xl text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
              Elite coaching. Brutal equipment. Training courses for every
              level—fitness, gymnastics, strength and conditioning.
            </p>
            <div className=" flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="btn bg-red hover:bg-red-800 transition duration-300 uppercase px-8 py-6 text-sm md:text-base"
              >
                Join The Pack
              </Link>
              <Link
                to="/"
                className="btn bg-black border-2 border-red text-white hover:bg-red transition duration-300 uppercase px-8 py-6 text-sm md:text-base"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
