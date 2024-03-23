import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Feature = ({ job, apply, removeAppliedJobs }) => {
  const navigate = useNavigate();
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;

  const goToDetails = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div
      className={`relative primary-bg p-8 rounded-md space-y-2 border-2 hover:border-primary ${
        !apply && "hover:scale-105 transition-all"
      }`}
    >
      <figure>
        <img src={logo} alt={company_name} />
      </figure>
      <h4 className="text-xl font-extrabold">{job_title}</h4>
      <p className="text-[#A3A3A3] font-medium">{company_name}</p>
      <div>
        <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
            {remote_or_onsite}
          </span>
        </button>
        <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
            {job_type}
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-[#757575] text-2xl font-semibold">
        <p className="flex items-center gap-1">
          <CiLocationOn /> {location}
        </p>
        <p className="flex items-center gap-1">
          <LuCircleDollarSign /> Salary : {salary}
        </p>
      </div>
      <div>
        <button
          onClick={() => goToDetails(id)}
          className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
            View Details
          </span>
        </button>
      </div>
      {apply && (
        <h1 onClick={()=> removeAppliedJobs(id)} className="absolute -top-3 right-1 text-4xl cursor-pointer">
          <FaDeleteLeft />
        </h1>
      )}
    </div>
  );
};
Feature.propTypes = {
  job: PropTypes.object.isRequired,
  apply: PropTypes.bool.isRequired,
  removeAppliedJobs: PropTypes.func,
};
export default Feature;
