import dynamic from 'next/dynamic';

import styled from 'styled-components';
import navList from '@db/navigationTopItems.json';

const Content = ({ active }) => {
  if (!active) return null;

  const ActiveContent = dynamic(() =>
    import(`./Details/${navList.find((f) => f.id === active).key}`)
  );

  return (
    <Container>
      <ActiveContent />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: #252526;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 0 20px;
  }
  h2 {
    font-size: 11px;
    line-height: 35px;
    font-weight: 400;
    color: #bbb;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .actions {
    ul {
      display: flex;
      justify-content: end;
      li {
        button {
          padding: 3px;
          display: flex;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background-color: rgba(90, 93, 94, 0.31);
          }
          &:not(:last-child) {
            margin-right: 4px;
          }
        }
      }
    }
  }
`;

export default Content;
