

function Search({search, setSearch, setSortBy}) {

  const handleSort = e => {
    setSortBy(e.target.value)
  }
  

  return (
    <div>
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
      </div>
      <select onChange = {handleSort} style = {{color: 'green'}}>
        <option value = 'All'>All</option>
        <option value = 'Price'>Price</option>
        <option value = 'ABC'>ABC</option>
      </select>
    </div>
  );
}

export default Search;
