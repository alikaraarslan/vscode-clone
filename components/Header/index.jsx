import styled from 'styled-components';

import MenuList from './menu.json';

const Header = () => {
  return (
    <Container>
      <div className="menu">
        <button className="logo">
          <img src="/icons/vs-code.svg" />
        </button>
        <ul>
          {MenuList?.map((menu, key) => (
            <li key={key}>
              <button>{menu.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="page-title">
        index.jsx - vscode-clone - Visual Studio Code
      </div>
      <ul className="actions">
        <li>
          <button>
            <img src="/icons/minimize.svg" />
          </button>
        </li>
        <li>
          <button>
            <img src="/icons/full-screen.svg" />
          </button>
        </li>
        <li>
          <button className="close">
            <img src="/icons/close.svg" />
          </button>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  background: #252526;

  > div,
  > ul {
    flex: 1;
  }

  .menu {
    display: flex;
    .logo {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 10px;
      cursor: pointer;

      img {
        width: 16px;
      }
    }
    ul {
      height: 100%;
      display: flex;
      margin-left: 5px;
      li button {
        height: 100%;
        padding: 0 10px;
        font-size: 12px;
        color: #ddd;
        transition: 250ms;

        &:hover {
          color: #fff;
          background: #505050;
        }
      }
    }
  }

  .page-title {
    height: 100%;
    color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .actions {
    display: flex;
    justify-content: end;
    li button {
      height: 100%;
      padding: 0 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #505050;
      }
      &.close {
        img {
          width: 14px;
        }
        &:hover {
          background: red;
        }
      }
      img {
        width: 10px;
      }
    }
  }
`;

export default Header;
