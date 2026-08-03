function Filters({
  category,
  setCategory,
  price,
  setPrice,
}) {
  return (
    <div>

      <label>Category : </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
      </select>

      <br /><br />

      <label>Maximum Price : ₹{price}</label>

      <br />

      <input
        type="range"
        min="0"
        max="5000"
        step="100"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

    </div>
  );
}

export default Filters;