const getStoredJob = () => {
    const storedJob = localStorage.getItem("job-application");
    if(storedJob){
        return JSON.parse(storedJob); 
    }
    return [];
}

const saveJob = id =>{
    const storedJob = getStoredJob();
    const exist = storedJob.find(jobId=> jobId === id);
    if(!exist){
        storedJob.push(id);
        localStorage.setItem("job-application", JSON.stringify(storedJob));
    }
}
 

export {getStoredJob, saveJob}