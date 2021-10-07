import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Navigation />
        <Content />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100vh - 52px);
`;
