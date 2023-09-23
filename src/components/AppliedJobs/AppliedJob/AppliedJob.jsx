import locationIcon from "../../../assets/icons/Location.png";
import salaryIcon from "../../../assets/icons/money.png";

const AppliedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <div className="mb-4">
      <div className="card card-side bg-[#E8E8E8] shadow-md items-center p-5">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body">
        <div>
        <div>
            <h2 className="card-title">{job_title}</h2>
          </div>
          <div>
            <p>{company_name}</p>
          </div>
          <div className="flex font-medium text-base gap-2">
            <button className="border-2 btn border-[#7E90FE] p-2 rounded-md text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="border-2 btn focus:border-2 border-[#7E90FE] p-2 rounded-md text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex flex-col my-4 w-full">
            <p className="flex gap-2">
              <img src={locationIcon} alt="location icon" /> {location}
            </p>
            <p className="flex gap-2">
              <img src={salaryIcon} alt="salary icon" /> {salary}
            </p>
          </div>
        </div>
          <div className="card-actions justify-end items-center">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
