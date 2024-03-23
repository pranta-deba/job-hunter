import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../utils/localStorage";
import Feature from "../components/Feature";

const ApplyJobs = () => {
  const jobs = useLoaderData();
  const [findJob, setFindJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  useEffect(() => {
    const storeJobs = getAppliedJobs();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storeJobs.includes(job.id));
      setFindJob(jobApplied);
      setDisplayJob(jobApplied);
    }
  }, [jobs]);

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setDisplayJob(findJob);
    } else if (e.target.value === "remote") {
      const remoteJobs = findJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJobs);
    } else if (e.target.value === "onsite") {
      const remoteJobs = findJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(remoteJobs);
    }
  };

  const removeAppliedJobs = (id) => {
    const storeJobsId = getAppliedJobs();
    const newJobsId = storeJobsId.filter((i) => i !== id);
    const newJobs = jobs.filter((job) => newJobsId.includes(job.id));
    localStorage.setItem("jobs", JSON.stringify(newJobsId));
    setDisplayJob(newJobs);
  };

  return (
    <div>
      <div className="py-28 flex justify-center items-center detailsBg">
        <h1 className="text-3xl font-extrabold">Applied Jobs</h1>
      </div>
      <div className="my-16 p-6 max-w-[1280px] mx-auto">
        <div className="text-right">
          Filter By :{" "}
          <select
            onChange={handleFilter}
            className="select select-bordered max-w-xs"
          >
            <option value="all">All</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className="my-8 grid grid-cols-1 gap-4 md:gap-8">
          {displayJob.map((job) => (
            <Feature
              key={job.id}
              job={job}
              apply={true}
              removeAppliedJobs={removeAppliedJobs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyJobs;
