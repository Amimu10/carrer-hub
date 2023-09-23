import { useLoaderData, useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import salaryIcon from "../../../assets/icons/money.png";
import jobIcon from "../../../assets/icons/calendar.png";
import phoneIcon from "../../../assets/icons/money.png";
import emailIcon from "../../../assets/icons/money.png";
import addressIcon from "../../../assets/icons/Location.png";
import { saveJob } from "../../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();  
     const {id} = useParams(); 
     const idInt = parseInt(id) 
     const job = jobs.find(job=> job.id == parseInt(idInt)); 
     console.log(job); 
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    
    const handleApplyJob = ()=>{ 
        saveJob(idInt);  
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'You have applied successfully',
            showConfirmButton: false, 
            timer: 2000
          })
    }
    return (
     <div className=" mb-24"> 
           <h2 className="text-center my-20 text-[#1A1919] text-3xl font-extrabold">Job Details</h2> 
           <div className="grid gap-4 lg:grid-cols-5 grid-cols-1">
           <div className="border-2 md:col-span-3"> 
            <div className=" p-4">
            <span className="text-[#1A1919] text-base font-extrabold">Job Description: </span>{job_description} 
            </div>
            <div className=" p-4">
            <span className="text-[#1A1919] text-base font-extrabold">job_responsibility: </span>{job_responsibility} 
            </div>
            <div className="p-4"> 
            <span className="text-[#1A1919] text-base font-extrabold">educational_requirements: </span>{educational_requirements} 
            </div>
            <div className="p-4"> 
            <span className="text-[#1A1919] text-base font-extrabold">experiences: </span>{experiences} 
            </div>
           </div>
           <div className="border-2 col-span-2 p-4"> 
              <h2 className="text-[#1A1919] font-extrabold text-lg mb-8">Job Details</h2>
              <p className="flex gap-2 items-center mb-4"><img src={salaryIcon} alt="salary icon" /><span className="text-[#474747] font-bold text-lg">Salary: </span> {salary} (per month) </p>
              <p className="flex gap-2 items-center mb-4"><img src={jobIcon} alt="salary icon" /> <span className="text-[#474747] font-bold text-lg">Job Title: </span> {job_title} </p> 
              <p className="flex gap-2 items-center mb-4"><img src={phoneIcon} alt="salary icon" /> <span className="text-[#474747] font-bold text-lg">Phone: </span> {contact_information.phone} </p>
              <p className="flex gap-2 items-center mb-4"><img src={emailIcon} alt="salary icon" /> <span className="text-[#474747] font-bold text-lg">Email: </span> {contact_information.email} </p>
              <p className="flex gap-2 mb-14"><img  className="w-[24px] h-[24px]" src={addressIcon} alt="salary icon" /> <span className="text-[#474747] font-bold text-lg">Address: </span> {contact_information.address} </p>
              <button className="bg-gradient-to-r px-3 py-2 text-white font-extrabold text-lg from-blue-500 via-blue-600 to-purple-700 rounded-md w-full" onClick={handleApplyJob}>Apply Now</button>
           </div>
        </div>z
     </div>
    );
};

export default JobDetails;