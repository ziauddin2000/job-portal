import { useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const PostJob = () => {
  let { user } = UseAuth();

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/job/new", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset(); // Form reset
          alert("Post added successfully");
          navigate("/my-posted-job");
        }
      });
  };

  return (
    <div className="py-6">
      <h2 className="text-3xl text-center">Post a Job</h2>

      <div className="mt-5 card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                required
                className="input input-bordered w-full"
                placeholder="Title"
              />
              <label className="label mt-4">Location</label>
              <input
                type="text"
                name="location"
                required
                className="input input-bordered w-full"
                placeholder="Location"
              />
              <label className="label mt-4">Job Type</label>
              <select
                name="jobType"
                required
                defaultValue="Select"
                className="select w-full"
              >
                <option disabled={true}>Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
              </select>
              <label className="label mt-4">Category</label>
              <select
                name="category"
                required
                defaultValue="Select"
                className="select w-full"
              >
                <option disabled={true}>Select</option>
                <option value="Data Science">Data Science</option>
                <option value="Technician">Technician</option>
                <option value="Finance">Finance</option>
              </select>
              <label className="label mt-4">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                required
                className="input input-bordered w-full"
              />

              <label className="label mt-4">Salary Range (BDT)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="min"
                  required
                  className="input input-bordered w-full"
                  placeholder="Min Salary"
                />
                <input
                  type="number"
                  name="max"
                  required
                  className="input input-bordered w-full"
                  placeholder="Max Salary"
                />
                <select
                  name="currency"
                  required
                  defaultValue="USD"
                  className="select w-full"
                >
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="INR">INR</option>
                </select>
              </div>
              <label className="label mt-4">Description</label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered w-full"
                placeholder="Job Description"
              />
              <label className="label mt-4">Company</label>
              <input
                type="text"
                name="company"
                required
                className="input input-bordered w-full"
                placeholder="Company"
              />
              <label className="label mt-4">Requirements</label>
              <textarea
                name="requirements"
                required
                className="textarea textarea-bordered w-full"
                placeholder="Write each requirements in new line"
              />
              <label className="label mt-4">Responsibilities</label>
              <textarea
                name="responsibilities"
                required
                className="textarea textarea-bordered w-full"
                placeholder="Write each responsibilities in new line"
              />
              <label className="label mt-4">HR Email</label>
              <input
                type="email"
                name="hr_email"
                required
                value={user?.email}
                className="input input-bordered w-full"
                placeholder="HR Email"
              />
              <label className="label mt-4">HR Name</label>
              <input
                type="text"
                name="hr_name"
                required
                className="input input-bordered w-full"
                placeholder="HR Name"
              />
              <label className="label mt-4">Company Logo</label>
              <input
                type="text"
                name="company_logo"
                required
                className="input input-bordered w-full"
                placeholder="Company Logo URL"
              />
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
