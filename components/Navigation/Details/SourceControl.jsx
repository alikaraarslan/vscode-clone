const SourceControl = () => {
  return (
    <div className="title">
      <h2>SOURCE CONTROL</h2>
      <div className="actions">
        <ul>
          <li>
            <button title="View as Tree">
              <img src="/icons/list-tree.svg" />
            </button>
          </li>
          <li>
            <button title="Create Pull Request">
              <img src="/icons/git-pull-request.svg" />
            </button>
          </li>
          <li>
            <button title="Commit">
              <img src="/icons/check.svg" />
            </button>
          </li>
          <li>
            <button title="Refresh">
              <img src="/icons/refresh.svg" />
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

export default SourceControl;
