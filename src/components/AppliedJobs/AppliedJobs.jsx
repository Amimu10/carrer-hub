import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../Utility/LocalStorage";
import AppliedJob from "./AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJob();
        if(jobs.length){
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job=>job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied); 
        }
    
        
    }, []);
    
    return (
        <div>
         <h2 className="text-center text-[#1A1919] text-3xl font-extrabold my-12">Applied Jobs</h2>
            <div className=" mb-24">
            {
                appliedJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>)
             }
            </div>
       
        </div>
    );
};

export default AppliedJobs;
