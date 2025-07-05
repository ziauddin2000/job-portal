import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const JobApply = () => {
  let { id } = useParams();
  let { user } = UseAuth();

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let linkedin = form.linkedin.value;
    let github = form.github.value;
    let portfolio = form.portfolio.value;

    let jobApplication = {
      job_id: id,
      email: user.email,
      linkedin,
      github,
      portfolio,
    };

    fetch("https://job-portal-server-ten-mu.vercel.app/job-apply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          alert("Job application submit successfully");
          navigate("/my-applications");
        }
      });
  };

  return (
    <div className="py-5">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Linkedin URL</label>
              <input
                type="url"
                name="linkedin"
                className="input"
                placeholder="Linkedin URL"
              />
              <label className="label">Github URL</label>
              <input
                type="url"
                name="github"
                className="input"
                placeholder="Github URL"
              />
              <label className="label">Portfolio URL</label>
              <input
                type="url"
                name="portfolio"
                className="input"
                placeholder="Portfolio URL"
              />
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
