import React from "react";

export default function StatisticsHomePage() {
  let styleStatistics = "flex flex-col items-center gap-4";
  return (
    <div className="w-full bg-red px-6 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className={styleStatistics}>
          <h1 className="text-3xl md:text-5xl font-extrabold">5,000+</h1>
          <h2 className="text-sm md:text-lg font-normal">Active Members</h2>
        </div>

        <div className={styleStatistics}>
          <h1 className="text-3xl md:text-5xl font-extrabold">25+</h1>
          <h2 className="text-sm md:text-lg font-normal">Expert Coaches</h2>
        </div>

        <div className={styleStatistics}>
          <h1 className="text-3xl md:text-5xl font-extrabold">8</h1>
          <h2 className="text-sm md:text-lg font-normal">Training Courses</h2>
        </div>

        <div className={styleStatistics}>
          <h1 className="text-3xl md:text-5xl font-extrabold">24/7</h1>
          <h2 className="text-sm md:text-lg font-normal">Gym Access</h2>
        </div>
      </div>
    </div>
  );
}
