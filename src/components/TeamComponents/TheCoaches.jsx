import { Link } from "react-router-dom";
import CardCoaches from "./CardCoaches";

export default function TheCoaches() {
  return (
    <div className="w-full py-20 font-oswald">
      <div className="border-b-2 border-gray pb-10 space-y-5">
        <h1 className="text-red text-2xl uppercase">The Coaches</h1>
        <h1 className="text-7xl font-extrabold text-white uppercase">
          <span className="text-red">Meet</span> The Team
        </h1>
        <p className="text-gray text-2xl">
          Certified pros who live and breathe training. Each coach leads one of
          our signature courses.
        </p>
      </div>
      <CardCoaches />
      <div className="py-20 flex flex-col gap-6 justify-center items-center bg-grayDark">
        <h1 className="text-6xl font-extrabold font-oswald text-white">
          Want to<span className="text-red"> Coach</span> with us?
        </h1>
        <p className="text-gray text-2xl">
          We're always looking for qualified strength, gymnastics and
          conditioning coaches.
        </p>
        <Link
          to="/contact"
          className="btn bg-red p-8 text-3xl font-semibold hover:bg-red-700"
        >
          APPLY NOW
        </Link>
      </div>
    </div>
  );
}
