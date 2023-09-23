import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
   const [jobs, setJobs] = useState([]);
   const [dataLength, setDataLength] = useState(4);
  useEffect(()=>{
      fetch("jobs.json")
      .then(res=>res.json())
      .then(data=> setJobs(data)); 
  }, [])


    return (
        <div>
            <h2 className="lg:text-5xl text-3xl mb-4 text-center text-[#1A1919] font-extrabold">Featured Jobs</h2>
            <p className="text-[#757575] text-center font-medium text-base mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-2 grid-cols-1 mb-20">  
                {
                    jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>) 
                } 
            </div>
            <div className="text-center mb-24">
            <button onClick={()=>setDataLength(jobs.length)} className="bg-gradient-to-r px-3 py-2.5 text-white font-extrabold text-lg from-blue-500 via-blue-600 to-purple-700 rounded-md  ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs; 