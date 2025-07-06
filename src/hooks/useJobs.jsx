import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort, search, minSalary, maxSalary) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://job-portal-server-ten-mu.vercel.app/jobs?sort=${sort}&search=${search}&minSalary=${minSalary}&maxSalary=${maxSalary}`
      )
      .then((res) => {
        setLoading(false);
        setJobs(res.data);
      });
  }, [sort, search, minSalary, maxSalary]);

  return { jobs, loading };
};

export default useJobs;
