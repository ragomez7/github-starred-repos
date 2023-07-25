import { useEffect, useState } from "react";
import Repo from "./Repo";
import { getRepositories } from "../api";

function RepoList({ userName }) {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState({});

  const listStyle = {
    padding: 0,
    width: "50%",
    margin: "0 auto",
  };
  const errorStyle = {
    color: "red",
    fontWeight: 700,
    width: "50%",
    margin: "0 auto",
  };
  useEffect(() => {
    setLoading(true);
    if (userName) {
      const fetchRepos = async () => {
        const fetchedRepos = await getRepositories(userName);
        if (fetchedRepos.status >= 400) {
          if (fetchedRepos.status === 404) {
            setError({
              message: "This user was not found",
            });
          } else {
            setError({
              message: "There was an error when fetching",
            });
          }
        }
        setRepos(fetchedRepos);
      };
      fetchRepos();
    }
    setLoading(false);
  }, [userName]);

  if (error.message) return <p style={errorStyle}>{error.message}</p>;
  if (loading) return "Loading...";
  return (
    <ul style={listStyle}>
      {repos?.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}
export default RepoList;
