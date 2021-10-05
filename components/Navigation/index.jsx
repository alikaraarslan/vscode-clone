import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationTopItems = [
  {
    id: 1,
    icon: 'files',
    label: 'Explorer',
  },
  {
    id: 2,
    icon: 'search',
    label: 'Search',
  },
  {
    id: 3,
    icon: 'git-merge',
    label: 'Source Control',
  },
  {
    id: 4,
    icon: 'extensions',
    label: 'Extensions',
  },
  {
    id: 5,
    icon: 'debug-alt',
    label: 'Run and Debug',
  },
];
const NavigationBottomItems = [
  {
    id: 6,
    icon: 'account',
    label: 'Account Settings',
  },
  {
    id: 7,
    icon: 'settings-gear',
    label: 'Manage',
  },
];
const Navigation = () => {
  const [activeVSContent, setActiveVSContent] = useState(1);
  return (
    <Container>
      <ul>
        {NavigationTopItems.map((m) => (
          <li key={m.id}>
            <button
              className={activeVSContent === m.id ? 'active' : null}
              onClick={() => setActiveVSContent(m.id)}
            >
              <img src={`/icons/${m.icon}.svg`} title={m.label} />
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {NavigationBottomItems.map((m) => (
          <li key={m.id}>
            <button
              className={activeVSContent === m.id ? 'active' : null}
              onClick={() => setActiveVSContent(m.id)}
            >
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
  height: calc(100vh - 52px);
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

export default Navigation;
