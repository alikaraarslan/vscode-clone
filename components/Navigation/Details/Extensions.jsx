const Extensions = () => {
  return (
    <div className="title">
      <h2>EXTENSIONS</h2>
      <div className="actions">
        <ul>
          <li>
            <button title="Filter Extensions...">
              <img src="/icons/filter.svg" />
            </button>
          </li>
          <li>
            <button title="Refresh">
              <img src="/icons/refresh.svg" />
            </button>
          </li>
          <li>
            <button title="Clear Extensions Search Results">
              <img src="/icons/clear-all.svg" />
            </button>
          </li>
          <li>
            <button title="Views and More Actions...">
              <img src="/icons/ellipsis.svg" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Extensions;
