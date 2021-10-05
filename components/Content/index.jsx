import styled from 'styled-components';

const Content = () => {
  return (
    <Container className="content-main">
      <img src="/icons/vscode-transparent.svg" />
      <ul>
        <li>
          <b>Show All Commands</b>
          <label>
            <span>Ctrl</span> + <span>Shift</span> + <span>P</span>
          </label>
        </li>
        <li>
          <b>Go to File</b>
          <label>
            <span>Ctrl</span> + <span>P</span>
          </label>
        </li>
        <li>
          <b>Find in Files</b>
          <label>
            <span>Ctrl</span> + <span>Shift</span> + <span>F</span>
          </label>
        </li>
        <li>
          <b>Start Debugging</b>
          <label>
            <span>F5</span>
          </label>
        </li>
        <li>
          <b>Toggle Terminal</b>
          <label>
            <span>Ctrl</span> + <span>"</span>
          </label>
        </li>
      </ul>
    </Container>
  );
};
const Container = styled.div`
  height: calc(100vh - 52px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 260px;
    margin-bottom: 15px;
  }
  ul {
    li {
      color: rgb(204, 204, 204);
      opacity: 0.8;
      margin-block-start: 1em;
      margin-block-end: 1em;
      b {
        color: rgba(255, 255, 255, 0.6);
        min-width: 140px;
        display: inline-block;
        text-align: right;
        padding-right: 15px;
      }
      span {
        display: inline-block;
        border-style: solid;
        border-width: 1px;
        border-radius: 3px;
        vertical-align: middle;
        font-size: 11px;
        padding: 3px 5px;
        line-height: 10px;
        background-color: rgba(128, 128, 128, 0.17);
        border-color: rgba(51, 51, 51, 0.6) rgba(51, 51, 51, 0.6)
          rgba(68, 68, 68, 0.6);
        box-shadow: rgb(0 0 0 / 36%) 0px -1px 0px inset;
        &:last-child {
          margin-right: 0;
        }
      }
      label {
        min-width: 120px;
        display: inline-block;
        text-align: left;
      }
    }
  }
`;
export default Content;
