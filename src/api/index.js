export const getRepositories = async (userName) => {
  try {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    if (res.status === 404) {
      throw new Error("User Not Found");
    } else if (res.status === 403) {
      throw new Error("Forbidden");
    }
    const repos = await res.json();
    const notForkedRepos = repos.filter((repo) => !repo.fork);
    const reposSortedByStarCount = notForkedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return reposSortedByStarCount.slice(0, 5);
  } catch (err) {
    if (err.message === "User Not Found")
      return {
        status: 404,
        message: "User Not Found",
      };
    else if (err.message === "Forbidden") {
      return {
        status: 403,
        message: "Forbidden",
      };
    } else
      return {
        status: 400,
        message: "There was an error with this request",
      };
  }
};
