function Repo({ repo }) {
  const repoStyle = {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    listStyleType: "none",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#0366d6",
    fontWeight: "bold",
  };

  const spanStyle = {
    fontWeight: 700,
  };
  return (
    <li style={repoStyle}>
      <a style={linkStyle} href={repo.html_url}>
        {repo.name}
      </a>
      {repo.description && (
        <p>
          <span style={spanStyle}>Project description:</span>
          {repo.description}
        </p>
      )}

      <p>
        {" "}
        <span style={spanStyle}>Languages used:</span> {repo.language}
      </p>
    </li>
  );
}

export default Repo;
