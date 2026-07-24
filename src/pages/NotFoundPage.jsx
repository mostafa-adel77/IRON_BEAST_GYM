import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black font-oswald px-5">
      <div className="max-w-4xl text-center flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold leading-none text-red drop-shadow-[0_0_25px_red]">
          404 | Page Not Found
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">
          Beast Lost?
        </h2>
        <p className="max-w-2xl text-gray text-lg md:text-2xl leading-8">
          Looks like this page skipped leg day and disappeared. The page you're
          looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-10 py-4 rounded-xl bg-red text-white text-xl font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-white hover:text-red"
        >
          Back Home
        </Link>
        <p className="text-gray text-lg mt-6 uppercase tracking-widest">
          Iron Never Quits.
        </p>
      </div>
    </section>
  );
}
