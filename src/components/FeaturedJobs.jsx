import { useEffect, useState } from "react";
import Feature from "./Feature";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLoad, setDataLoad] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);


  return (
    <>
      <div className="my-16 max-w-[1280px] mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Featured Jobs</h1>
          <p className="text-[#757575] text-base font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="my-8 p-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {jobs.slice(0, dataLoad).map((job) => (
            <Feature
              key={job.id}
              job={job}
              apply={false}
            />
          ))}
        </div>
        <div
          className={`text-center mt-6 ${dataLoad === jobs.length && "hidden"}`}
        >
          <button
            onClick={() => setDataLoad(jobs.length)}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
              See All Jobs
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
