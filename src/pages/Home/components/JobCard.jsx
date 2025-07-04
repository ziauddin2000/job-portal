import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex items-center gap-4 px-5">
        <img src={job.company_logo} className="w-16" alt={job.company} />
        <div>
          <h2 className="card-title">{job.company}</h2>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{job.category}</h2>
        <p>{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, idx) => {
            return (
              <span
                key={idx}
                className="border border-[#ccc] px-2 py-2 rounded"
              >
                {req}
              </span>
            );
          })}
        </div>
        <div className="card-actions flex items-center justify-between mt-4">
          <p>
            Salary: {job.salaryRange.min} - {job.salaryRange.max}{" "}
            {job.salaryRange.currency}
          </p>
          <Link className="block" to={`/job/${job._id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
