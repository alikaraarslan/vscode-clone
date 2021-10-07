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
  width: 300px;
  height: 100%;
  background: #252526;
`;

export default Content;
