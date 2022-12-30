import MDEditor, { commands } from '@uiw/react-md-editor';
import styled from 'styled-components';
import { useState } from 'react';

const EditorWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  &:focus-within {
    border-color: rgb(0 116 204);
    box-shadow: 0 0 0 4px rgb(0 116 204 / 15%);
    & > div {
      box-shadow: 0 0 0 1px rgb(0 116 204), 0 0 0 rgb(0 116 204),
        0 1px 1px rgb(0 116 204);
    }
  }
`;

export const ContentEditor = ({
  id = '',
  placeholder = '',
  value = '',
  changeHandler = () => {},
  clickHandler = () => {},
  refer = null,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <EditorWrapper
      className="editor-container"
      focus={focus}
      data-color-mode="light"
    >
      <MDEditor
        id={id}
        value={value}
        placeholder={placeholder}
        ref={refer}
        components={{
          textarea: (props) => {
            return (
              <textarea
                {...props}
                onClick={(e) => clickHandler(e)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            );
          },
        }}
        onChange={(value) => changeHandler(value)}
        commands={[
          commands.title,
          commands.bold,
          commands.italic,
          commands.code,
          commands.divider,
          commands.link,
          commands.quote,
          commands.codeBlock,
          commands.divider,
          commands.orderedListCommand,
          commands.unorderedListCommand,
          commands.hr,
        ]}
        extraCommands={[
          commands.codeEdit,
          commands.codeLive,
          commands.codePreview,
        ]}
        highlightEnable="true"
        preview="edit"
        visibleDragbar="false"
      />
    </EditorWrapper>
  );
};

export const AnswerEditor = ({
  value = '',
  changeHandler = () => {},
  clickHandler = () => {},
}) => {
  return (
    <EditorWrapper
      className="editor-container"
      focus={focus}
      data-color-mode="light"
    >
      <MDEditor
        id="answer-editor"
        value={value}
        components={{
          textarea: (props) => {
            return <textarea {...props} onClick={(e) => clickHandler(e)} />;
          },
        }}
        onChange={(value) => changeHandler(value)}
        commands={[
          commands.bold,
          commands.italic,
          commands.divider,
          commands.link,
          commands.quote,
          commands.code,
          commands.codeBlock,
          commands.divider,
          commands.orderedListCommand,
          commands.unorderedListCommand,
          commands.hr,
        ]}
        extraCommands={[]}
        highlightEnable="true"
        preview="live"
        visibleDragbar="false"
      />
    </EditorWrapper>
  );
};
