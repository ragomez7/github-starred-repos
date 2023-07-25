import { useState } from "react";

function SearchBar({ setUserName }) {
  const [input, setInput] = useState("");

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    margin: "20px auto",
    width: "40%",
  };
  const inputStyle = {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    flex: "1",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "#0366d6",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    outline: "none",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(input);
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        style={inputStyle}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={buttonStyle} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
