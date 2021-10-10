import { useState } from 'react';
import styled from 'styled-components';

const explorerSubContents = [
  {
    id: 1,
    key: 'Editor',
    title: 'OPEN EDITORS',
    desc: 'File list will be added',
  },
  {
    id: 2,
    key: 'Outline',
    title: 'OUTLINE',
    desc: 'The active editor cannot provide outline information.',
  },
  {
    id: 3,
    key: 'Timeline',
    title: 'TIMELINE',
    desc: 'The active editor cannot provide timeline information.',
  },
];

const Explorer = () => {
  const [activeContent, setactiveContent] = useState('');

  return (
    <>
      <div className="title">
        <h2>EXPLORER</h2>
        <div className="actions">
          <ul>
            <li>
              <button title="Views and More Actions...">
                <img src="/icons/ellipsis.svg" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="folder-main-item">
        <AccordionContainer className="tabs">
          <ul>
            {explorerSubContents.map((m) => (
              <li
                className={`explorer-${
                  m.key === activeContent ? 'active-' : ''
                }item`}
              >
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={`${m.key === activeContent ? 'checked' : ''}`}
                />
                <div
                  className={`card-title noselect collapseBox${m.key} ${
                    m.key === activeContent ? 'enable-sub' : 'disable-sub'
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    activeContent === m.key
                      ? setactiveContent('')
                      : setactiveContent(m.key);
                  }}
                >
                  <img src="/icons/chevron-right.svg" />
                  {m.title}
                </div>
                <div className="tab-content">{m.desc}</div>
              </li>
            ))}
          </ul>
        </AccordionContainer>
      </div>
    </>
  );
};

export const AccordionContainer = styled.div`
  &.tabs {
    width: 100%;
    overflow: hidden;
    input.checkbox {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }
    .tab-content {
      max-height: 0;
      opacity: 0;
    }
    input:checked {
      ~ .tab-content {
        max-height: 100vh;
        border-color: rgba(244, 245, 249, 0.1);
        padding: 10px 22px;
        opacity: 0.5;
        pointer-events: none;
        z-index: 1;
        color: #cccccc;
        font-size: 13px;
      }
    }
    .card-title {
      font-size: 11px;
      font-weight: bold;
      line-height: 12px;
      color: #cccccc;
      display: flex;
      align-items: center;
      height: 22px;
      cursor: pointer;
      img {
        margin: 0 2px;
        transition: 100ms;
      }
      &.enable-sub {
        img {
          transform: rotate(90deg);
        }
      }
    }
    ul {
      li {
        position: relative;
        &:not(:last-child) {
          border-bottom: 1px solid rgba(204, 204, 204, 0.2);
        }
        height: 22px;
        transition: 100ms;
        &.explorer-active-item {
          height: calc(100vh - 131px);
        }
      }
    }
  }
`;

export default Explorer;
