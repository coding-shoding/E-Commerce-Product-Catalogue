function SearchBar({search, setSearch}){
    return (
        <input
        type = "text"
        placeholder = "Search products across categories..."
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchBar