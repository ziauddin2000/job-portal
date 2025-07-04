import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  let [jobs, setJobs] = useState([]);
  let { user } = UseAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div className="py-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Posted Jobs: {jobs?.length}
      </h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>App. Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/view-application/${job._id}`}>
                    <button className="btn btn-link btn-xs">
                      View Applications
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
