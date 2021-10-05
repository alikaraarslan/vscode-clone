import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import Navigation from "components/Navigation";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div>
        <Header/>
        <Menu/>
        <div className="navigation">
          <Navigation/>
        </div>
        <div className="board">
          <Content/>
        </div>
        <Footer/>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .navigation {
    width: 48px;
  }
  .board {
    width: calc(100% - 48px);
  }
`