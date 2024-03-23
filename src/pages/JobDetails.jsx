import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiSubtitlesBold } from "react-icons/pi";
import { MdPhoneForwarded } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAppliedJobs } from "../utils/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveAppliedJobs(parseInt(id));
  };

  return (
    <div>
      <div className="py-20 md:py-28 flex justify-center items-center detailsBg">
        <h1 className="text-3xl font-extrabold">Job Details</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-5 p-6 md:p-32">
        <div className="space-y-6 flex-1">
          <p className="leading-8">
            <span className="text-base font-extrabold">Job Description : </span>
            <span className="text-base font-medium text-[#757575]">
              {job_description}
            </span>
          </p>
          <p className="leading-8">
            <span className="text-base font-extrabold">
              Job Responsibility :
            </span>
            <span className="text-base font-medium text-[#757575]">
              {job_responsibility}
            </span>
          </p>
          <p className="leading-8">
            <span className="text-base font-extrabold">
              Educational Requirements :
            </span>
            <span className="text-base font-medium text-[#757575]">
              {educational_requirements}
            </span>
          </p>
          <p className="leading-8">
            <span className="text-base font-extrabold">Experiences : </span>
            <span className="text-base font-medium text-[#757575]">
              {experiences}
            </span>
          </p>
        </div>
        <div className="flex-1 detailsBg2 h-full p-8 space-y-5">
          <h1 className="text-xl font-extrabold">Job Details</h1>
          <hr />
          <p className="text-base font-medium text-[#757575] flex gap-2">
            <span className="text-base font-extrabold flex items-center gap-2">
              <LuCircleDollarSign /> Salary :
            </span>
            {salary}
          </p>
          <p className="text-base font-medium text-[#757575] flex gap-2">
            <span className="text-base font-extrabold flex items-center gap-2">
              <PiSubtitlesBold /> Job Title :
            </span>
            {job_title}
          </p>
          <h1 className="text-xl font-extrabold">Contact Information</h1>
          <hr />
          <p className="text-base font-medium text-[#757575] flex gap-2">
            <span className="text-base font-extrabold flex items-center gap-2">
              <MdPhoneForwarded /> Phone :
            </span>
            {contact_information.phone}
          </p>
          <p className="text-base font-medium text-[#757575] flex gap-2">
            <span className="text-base font-extrabold flex items-center gap-2">
              <MdOutlineMarkEmailRead /> Email :
            </span>
            {contact_information.email}
          </p>
          <p className="text-base font-medium text-[#757575] flex gap-2">
            <span className="text-base font-extrabold flex items-center gap-2">
              <CiLocationOn /> Address :
            </span>
            {contact_information.address}
          </p>
          <div className="text-center">
            <button
              onClick={handleApplyJob}
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
                Apply Now
              </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
