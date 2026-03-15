const categories = [
  "Coding",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Sports",
  "Education",
];

function Sidebar({ setCategory }) {
  return (
    <div style={{ width: "200px", padding: "10px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
