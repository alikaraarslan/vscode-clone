const SourceControl = () => {
  return (
    <div className="title">
      <h2>SOURCE CONTROL</h2>
      <div className="actions">
        <ul>
          <li>
            <button>
              <img src="/icons/list-tree.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/git-pull-request.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/check.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/refresh.svg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/icons/ellipsis.svg" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SourceControl;
