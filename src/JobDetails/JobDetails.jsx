import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  let job = useLoaderData();

  return (
    <div className="py-6">
      <h2 className="text-3xl mb-5">Job Details Page</h2>

      <div className="hero bg-base-200 py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{job.company}</h1>
            <h1 className="text-3xl font-bold">{job.category}</h1>
            <p className="py-2">{job.description}</p>
            <p className="py-2">
              Salary: {job.salaryRange.min} - {job.salaryRange.max}{" "}
              {job.salaryRange.currency}
            </p>
            <Link to={`/jobApply/${job._id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
