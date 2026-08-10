import { useState } from "react";
import SearchBar from "./components/SearchBar";
import products from "./data/products";
import Filters from "./components/Filter";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All")
  const [price, setPrice] = useState(5000);

  const filteredProducts = products.filter((product) => { const searchMatch = product.name.toLowerCase().includes(search.toLowerCase()); const categoryMatch = category === "All" || product.category === category; const priceMatch = product.price <= price; return searchMatch && categoryMatch && priceMatch; });

  return (
    <div>
      <h1>
        SuperrrMart Product Catelogue
      </h1>
      <h3>
        Search Text : {search}
      </h3>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />



      <h3>Products Found: {filteredProducts.length}</h3>

      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              width="150"
            />
          )}
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>₹{product.price}</p>
          {product.quantity === 0 ? (
            <p style={{ color: "red" }}>Out of Stock</p>
          ) : (
            <p>Quantity: {product.quantity}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;