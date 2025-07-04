import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  let [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-semibold mb-5">Featured Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
