import Content from './Content';
import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Navigation = () => {
  const [activeVSContent, setActiveVSContent] = useState(1);
  return (
    <Container>
      <Sidebar active={{ value: activeVSContent, set: setActiveVSContent }} />
      <Content active={activeVSContent} />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
`;

export default Navigation;
