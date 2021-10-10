const Search = () => {
  return (
    <div className="title">
      <h2>SEARCH</h2>
      <div className="actions">
        <ul>
          <li>
            <button>
              <img src="/icons/refresh.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/clear-all.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/go-to-file.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/collapse-all.svg" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
