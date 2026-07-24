import React from "react";
import { Link } from "react-router-dom";

export default function ReadyToTrain() {
  return (
    <div className="py-15 flex justify-center items-center flex-col gap-8 font-oswald">
      <h1 className="text-6xl uppercase font-extrabold  text-white">
        Ready to <span className="text-red">Train</span>?
      </h1>
      <p className="text-gray text-2xl font-normal">
        Book a free intro session and tour the gym with a coach.
      </p>
      <Link to="/contact" className="text-2xl p-6 font-semibold btn bg-red">
        BOOK FREE SESSIONS
      </Link>
    </div>
  );
}
