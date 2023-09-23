import { Link } from "react-router-dom";
import locationIcon from "../../assets/icons/Location.png";
import salaryIcon from "../../assets/icons/money.png";
const Job = ({ job }) => {
  const {
    id, 
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <>
      <div className="bg-[#E8E8E8] shadow-md w-full mx-auto p-10 rounded-md">
        <img className=" mb-6" src={logo} alt="logo" />   
        <h2 className="card-title">{job_title}</h2> 
        <p className="my-4">{company_name}</p>
        <div className="flex  font-medium text-base gap-2">
          <button className="border-2 btn border-[#7E90FE] p-2 rounded-md text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="border-2 btn focus:border-2 border-[#7E90FE] p-2 rounded-md text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-6 my-4">
        <p className="flex gap-2">
          <img src={locationIcon} alt="location icon" /> {location}
        </p>
        <p className="flex gap-2">
          <img src={salaryIcon} alt="salary icon" /> {salary} 
        </p>
      </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`} className="bg-gradient-to-r px-3 py-2 text-white font-extrabold text-lg from-blue-500 via-blue-600 to-purple-700 rounded-md  ">View Details</Link>
        </div> 
      </div>
    </>
  );
};

export default Job;
