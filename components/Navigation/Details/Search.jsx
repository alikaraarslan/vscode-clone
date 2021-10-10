const Search = () => {
  return (
    <div className="title">
      <h2>SEARCH</h2>
      <div className="actions">
        <ul>
          <li>
            <button title="Refresh">
              <img src="/icons/refresh.svg" />
            </button>
          </li>
          <li>
            <button title="Clear Search Results">
              <img src="/icons/clear-all.svg" />
            </button>
          </li>
          <li>
            <button title="Open New Search Editor">
              <img src="/icons/go-to-file.svg" />
            </button>
          </li>
          <li>
            <button title="Collapse All">
              <img src="/icons/collapse-all.svg" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
