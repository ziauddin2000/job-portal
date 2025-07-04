import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  let applications = useLoaderData();

  // handleStatus
  let handleStatus = (e, id) => {
    let status = e.target.value;
    let app_id = id;

    let updateStatus = {
      status,
    };

    fetch(`http://localhost:5000/application/status/${app_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="py-6">
      <h2 className="text-3xl mb-5">
        View Job Applications: {applications.length}
      </h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>SL</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{app.email}</td>
                <td>{app.linkedin}</td>
                <td>
                  <select
                    onChange={(e) => handleStatus(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select"
                  >
                    <option disabled={true}>Change Status</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
