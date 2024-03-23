import { Flip, toast } from "react-toastify";

const getAppliedJobs = () => {
  const storeJobs = localStorage.getItem("jobs");
  if (storeJobs) {
    return JSON.parse(storeJobs);
  }
  return [];
};

const saveAppliedJobs = (id) => {
  const storeJobs = getAppliedJobs();
  const exits = storeJobs.find((jonId) => jonId === id);
  if (!exits) {
    storeJobs.push(id);
    localStorage.setItem("jobs", JSON.stringify(storeJobs));
    toast.success("You have applied successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  } else {
    toast.error("Sorry, already applied job!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  }
};

export { saveAppliedJobs, getAppliedJobs };
