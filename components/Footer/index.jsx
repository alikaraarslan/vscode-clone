import styled from "styled-components";

const Footer = () => {
  return <Container>
    <ul className="bottom-lists">
      <li>
        <button className="with-text">
          <img src="/icons/git.svg"/>
          master
        </button>
      </li>
      <li>
        <button>
          <img src="/icons/sync.svg"/>
        </button>
      </li>
      <li>
        <button className="with-text">
          <span>
            <img src="/icons/x-mark.svg"/>
            0
          </span>
          <span>
            <img src="/icons/danger.svg"/>
            0
          </span>
        </button>
      </li>
      <li>
        <button>
          <img src="/icons/share.svg"/>
        </button>
      </li>
      <li>
        <button>
          Git Graph
        </button>
      </li>
    </ul>
    <ul className="bottom-lists">
      <li>
      <button>
        Ln 22, Col 10
        </button>
      </li>
      <li>
        <button>
          Spaces: 2
        </button>
      </li>
      <li>
        <button>
          UTF-8
        </button>
      </li>
      <li>
        <button>
          LF
        </button>
      </li>
      <li>
        <button>
          Babel Javascript
        </button>
      </li>
      <li>
        <button className="with-text">
          <img src="/icons/radio.svg"/>
          Go Live
        </button>
      </li>
      <li>
        <button className="with-text">
          <img src="/icons/double-tick.svg"/>
          Prettier
        </button>
      </li>
      <li>
        <button>
        <img src="/icons/people-carry-solid.svg"/>
        </button>
      </li>
      <li>
        <button>
          <img src="/icons/bell.svg"/>
        </button>
      </li>
    </ul>
  </Container>
};

const Container = styled.div`
  background-color: rgb(0, 122, 204);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  ul {
    display: flex;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        height: 22px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        margin:0 3px;
        padding:0 5px;
        cursor: pointer;
        span {
          display: flex;
          align-items: end;
          line-height: 12px;
          &:first-child {
            margin-right: 3px;
          }
        }
        img {
          width: auto;
          height: 13px;
          object-fit: contain;
        }
        &.with-text {
          img {
            margin-right: 4px;
          }
        }
      }
      button {
        &:hover {
          background-color: rgba(255, 255, 255, 0.12);
        }
      }
    }
  }
`

export default Footer;
