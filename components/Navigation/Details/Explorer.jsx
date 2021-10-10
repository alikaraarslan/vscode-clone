import { useState } from 'react';
import styled from 'styled-components';

const Explorer = () => {
  const [collapseBoxEditor, setCollapseBoxEditor] = useState(false);
  const [collapseBoxOutline, setCollapseBoxOutline] = useState(false);
  const [collapseBoxTimeline, setCollapseBoxTimeline] = useState(false);

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
            <li
              className={`explorer-${collapseBoxEditor ? 'active-' : ''}item`}
            >
              <input
                className="checkbox"
                type="checkbox"
                id="chck1"
                checked={collapseBoxEditor}
                readOnly
                disabled
              />
              <div
                className={`card-title noselect ${
                  collapseBoxEditor ? 'enable-sub' : 'disable-sub'
                }`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setCollapseBoxEditor(!collapseBoxEditor);
                  setCollapseBoxTimeline(false);
                  setCollapseBoxOutline(false);
                }}
              >
                <img src="/icons/chevron-right.svg" />
                OPEN EDITORS
              </div>
              <div className="tab-content">Add Folder List</div>
            </li>
            <li
              className={`explorer-${collapseBoxOutline ? 'active-' : ''}item`}
            >
              <input
                className="checkbox"
                type="checkbox"
                id="chck1"
                checked={collapseBoxOutline}
                readOnly
                disabled
              />
              <div
                className={`card-title noselect ${
                  collapseBoxOutline ? 'enable-sub' : 'disable-sub'
                }`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setCollapseBoxOutline(!collapseBoxOutline);
                  setCollapseBoxEditor(false);
                  setCollapseBoxTimeline(false);
                }}
              >
                <img src="/icons/chevron-right.svg" />
                OUTLINE
              </div>
              <div className="tab-content">
                The active editor cannot provide outline information.
              </div>
            </li>
            <li
              className={`explorer-${collapseBoxTimeline ? 'active-' : ''}item`}
            >
              <input
                className="checkbox"
                type="checkbox"
                id="chck1"
                checked={collapseBoxTimeline}
                readOnly
                disabled
              />
              <div
                className={`card-title noselect ${
                  collapseBoxTimeline ? 'enable-sub' : 'disable-sub'
                }`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setCollapseBoxTimeline(!collapseBoxTimeline);
                  setCollapseBoxEditor(false);
                  setCollapseBoxOutline(false);
                }}
              >
                <img src="/icons/chevron-right.svg" />
                TIMELINE
              </div>
              <div className="tab-content">
                The active editor cannot provide timeline information.
              </div>
            </li>
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
