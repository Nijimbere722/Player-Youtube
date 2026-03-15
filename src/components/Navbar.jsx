import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#202020",
        color: "white",
        position: "sticky",
        top: 0,
      }}
    >
      <h2>YouTube Player</h2>

      <SearchBar />
    </nav>
  );
}

export default Navbar;
