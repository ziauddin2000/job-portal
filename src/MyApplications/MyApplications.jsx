import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyApplications = () => {
  let { user } = UseAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div className="py-6">
      <h2 className="text-center text-2xl">My Applications: {jobs?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => {
              return (
                <tr key={idx}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={job.company_logo} alt={job.company} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.company}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>{job.title}</td>
                  <th>
                    <button className="btn btn-error btn-xs">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
