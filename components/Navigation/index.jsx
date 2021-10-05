import React from 'react';
import styled from 'styled-components';
const Navigation = () => {
  return (
    <Container>
      <ul>
        <li>
          <button>
            <img src="/icons/browser.svg" />
          </button>
        </li>
        <li>
          <button>
            <img src="/icons/search.svg" />
          </button>
        </li>
        <li>
          <button>
            <img src="/icons/git-merge.svg" />
          </button>
        </li>
        <li>
          <button>
            <img src="/icons/extensions.svg" />
          </button>
        </li>
        <li>
          <button>
            <img src="/icons/debug-alt.svg" />
          </button>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(51, 51, 51);
  height: calc(100vh - 52px);
  .icon {
    width: 100px;
    display: inline-block;
    margin: 8px;
  }
`;

export default Navigation;
