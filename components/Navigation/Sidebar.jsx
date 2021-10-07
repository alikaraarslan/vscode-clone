import styled from 'styled-components';
import NavigationTopItems from '@db/navigationTopItems.json';
import NavigationBottomItems from '@db/navigationBottomItems.json';

const Sidebar = ({ active }) => {
  return (
    <Container>
      <ul>
        {NavigationTopItems.map((m) => (
          <li key={m.id}>
            <button
              className={active.value === m.id ? 'active' : null}
              onClick={() =>
                active.value === m.id ? active.set(null) : active.set(m.id)
              }
            >
              <img src={`/icons/${m.icon}.svg`} title={m.label} />
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {NavigationBottomItems.map((m) => (
          <li key={m.id}>
            <button>
              <img src={`/icons/${m.icon}.svg`} title={m.label} />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(51, 51, 51);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ul {
    li {
      button {
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        padding-left: 1px;
        border-left: 2px solid transparent;
        transition: 200ms;
        cursor: pointer;
        &:hover {
          img {
            opacity: 0.8;
          }
        }
        img {
          width: 24px;
          opacity: 0.4;
          transition: 200ms;
        }
        &.active {
          border-color: white;
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default Sidebar;
