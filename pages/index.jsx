import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import styled from 'styled-components';
import Split from 'react-split';
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Split
          className="split"
          sizes={[20, 75]}
          minSize={230}
          expandToMin={false}
          gutterSize={6}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <Navigation />
          <Content />
        </Split>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100vh - 52px);
  .split {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .gutter {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter.gutter-horizontal {
    cursor: col-resize;
    background-color: #252526;
    &:focus {
      background-color: red;
    }
  }
`;
