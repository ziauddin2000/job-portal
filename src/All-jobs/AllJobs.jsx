import JobCard from "../pages/Home/components/JobCard";
import useJobs from "../hooks/useJobs";
import { useState } from "react";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-center text-2xl font-semibold text-center mb-4">
        All Job
      </h2>

      <div className="bg-base-200 p-4 rounded-sm flex items-center gap-5 mb-2">
        <button
          onClick={() => setSort(!sort)}
          className={`btn  ${sort ? "btn-primary" : "btn-soft"}`}
        >
          {sort ? "Job Sorted" : "Sort Jobs"}
        </button>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="input"
          placeholder="Search by location..."
        />
        <div className="flex gap-2">
          <input
            type="number"
            onChange={(e) => setMinSalary(e.target.value)}
            className="input"
            placeholder="Min Salary"
          />
          <input
            type="number"
            onChange={(e) => setMaxSalary(e.target.value)}
            className="input"
            placeholder="Max Salary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
