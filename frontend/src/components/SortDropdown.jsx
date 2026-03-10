function SortDropdown({ sortBy, onChange }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Urutkan berdasarkan:</label>
      <select value={sortBy} onChange={(e) => onChange(e.target.value)} style={styles.select}>
        <option value="name">Nama</option>
        <option value="price">Harga</option>
        <option value="latest">Terbaru</option>
      </select>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#555",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "0.9rem",
  },
}

export default SortDropdown