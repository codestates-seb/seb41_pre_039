import styled, { css } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ContentEditor } from '../components/Editor';
import './AddQuestion.css';

const InputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 24px;
  border: 1px solid #e3e6e8;
  color: #0c0d0e;
  text-align: left;
  margin-bottom: 16px;
  position: relative;

  .disable {
    width: 100%;
    height: 100%;
    background-color: rgba(235, 235, 235, 0.7);
    cursor: not-allowed;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  label {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px 9px;
    outline: none;
    border: 1px solid rgb(193, 193, 193);
    border-radius: 3px;
    &:focus {
      border-color: rgb(0 116 204);
      box-shadow: 0 0 0 4px rgb(0 116 204 / 15%);
    }
    &::placeholder {
      color: #ccc;
    }
  }
  .validation {
    font-size: 12px;
    color: #ab262a;
  }
`;

const Button = styled.button`
  color: #fff;
  border: 1px solid transparent;
  background-color: hsl(206deg 100% 52%);
  box-shadow: inset 0 0.4px 0 0 hsl(206deg 100% 52%),
    inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 13px;
  padding: 0.8em;
  margin-top: 16px;
  &:hover {
    cursor: pointer;
    background-color: hsl(206deg 100% 40%);
  }
  ${(props) =>
    props.disabled
      ? css`
          background-color: #85caff;
          box-shadow: none;
          &:hover {
            cursor: default;
            background-color: #85caff;
          }
        `
      : undefined}
`;

const SaveButton = styled(Button)`
  background-color: rgba(255, 104, 10, 0.8);
  box-shadow: inset 0 0.4px 0 0 rgba(255, 104, 10, 0.8),
    inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  &:hover {
    background-color: rgba(255, 104, 10, 1);
  }
`;

const DiscardButton = styled(Button)`
  background-color: transparent;
  box-shadow: none;
  color: #ab262a;
  &:hover {
    background-color: #fdf2f2;
  }
`;

const TagWrapper = styled.span`
  background-color: #e1ecf4;
  font-size: 12px;
  margin: 2px;
  padding: 2px 4px;
  border-radius: 3px;
  color: rgb(57, 115, 157);
  span {
    padding: 0 4px;
  }
  button {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 3px;
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 3px;
    svg {
      vertical-align: text-top;
      fill: rgb(57, 115, 157);
    }
    &:hover {
      cursor: pointer;
      background-color: rgb(57, 115, 157);
      svg {
        fill: #e1ecf4;
      }
    }
  }
`;

const TagEditor = styled.div`
  width: 100%;
  padding: 2px 4px;
  outline: none;
  border: 1px solid
    ${(props) => (props.valid ? 'rgb(193, 193, 193)' : '#ab262a')};
  border-radius: 3px;

  .tags-list {
    display: flex;
    align-items: center;
  }

  .tags-list #tag {
    flex: 1 0 0;
    height: 28px;
    border: none;
    outline: none;
    box-shadow: none;
  }

  .svg-icon.iconAlertCircle {
    margin-right: 5px;
    fill: #ab262a;
  }
`;

const AddQuestion = () => {
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [tryFor, setTryFor] = useState('');
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');
  const [inputStep, setInputStep] = useState(1);

  const titleRef = useRef(null);
  const problemRef = useRef(null);
  const tryForRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    if (localStorage.draft) {
      console.log(localStorage.draft);
      const draft = JSON.parse(localStorage.getItem('draft'));
      setTitle(draft.title || '');
      setProblem(draft.problem || '');
      setTryFor(draft.tryFor || '');
      setTags(draft.tags || []);
      setInputStep(draft.inputStep || 1);
    }
  }, []);

  const Tag = ({ tag, idx }) => {
    const removeTagHandler = (idx) => {
      setTags((prev) => prev.filter((_, i) => i !== idx));
    };

    return (
      <TagWrapper>
        <span>{tag}</span>
        <button onClick={() => removeTagHandler(idx)}>
          <svg
            className="svg-icon iconClearSm"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
          </svg>
        </button>
      </TagWrapper>
    );
  };

  const moveNextInput = (e) => {
    const name = e.target.name;
    e.preventDefault();
    switch (name) {
      case 'titleNext':
        problemRef.current.textarea.focus();
        // problemRef.current.focus();
        setInputStep(2);
        break;
      case 'problemNext':
        tryForRef.current.textarea.focus();
        setInputStep(3);
        break;
      case 'tryForNext':
        tagsRef.current.focus();
        setInputStep(4);
        break;
      case 'tagsNext':
        tagsRef.current.blur();
        setInputStep(5);
        break;
      default:
        return undefined;
    }
  };

  const saveDraftHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      'draft',
      JSON.stringify({ title, problem, tryFor, tags, inputStep })
    );
  };

  const deleteDraftHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('draft');
    location.reload();
  };

  const addTagHandler = (e) => {
    e.preventDefault();
    if (e.code === 'Space' || e.key === 'Enter') {
      if (tag === ' ' || tag === '') setTag('');
      else {
        setTags((prev) => [...prev, tag.slice(0, -1)]);
        setTag('');
      }
    }
  };

  return (
    <section className="addQuestion-container">
      <h2>Ask a public question</h2>
      <article className="addQuestion--advice">
        <h3>Writing a good question</h3>
        <p>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <h4>Steps</h4>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </article>
      <form id="addQuestion--form">
        <InputBox>
          <label htmlFor="title">Title</label>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input
            id="title"
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
          {inputStep === 1 ? (
            <Button name="titleNext" onClick={(e) => moveNextInput(e)}>
              Next
            </Button>
          ) : undefined}
        </InputBox>
        <InputBox>
          {inputStep >= 2 ? undefined : <div className="disable"></div>}
          <label htmlFor="problem">What are the details of your problem?</label>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <ContentEditor
            id="problem"
            value={problem}
            changeHandler={setProblem}
            refer={problemRef}
          />
          {inputStep === 2 ? (
            <Button
              name="problemNext"
              onClick={(e) => moveNextInput(e)}
              disabled={problem.length < 20}
            >
              Next
            </Button>
          ) : undefined}
        </InputBox>
        <InputBox>
          {inputStep >= 3 ? undefined : <div className="disable"></div>}
          <label htmlFor="tryForProblem">
            What did you try and what were you expecting?
          </label>
          <p>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </p>
          <ContentEditor
            id="tryForProblem"
            value={tryFor}
            changeHandler={setTryFor}
            refer={tryForRef}
          />
          {inputStep === 3 ? (
            <Button
              name="tryForNext"
              onClick={(e) => moveNextInput(e)}
              disabled={tryFor.length < 20}
            >
              Next
            </Button>
          ) : undefined}
        </InputBox>
        <InputBox>
          {inputStep >= 4 ? undefined : <div className="disable"></div>}
          <label htmlFor="tags">Tags</label>
          <p>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
          <TagEditor valid={tags.length <= 5}>
            <div className="tags-list">
              {tags.map((tag, idx) => (
                <Tag tag={tag} key={idx} idx={idx} />
              ))}{' '}
              <input
                id="tag"
                type="text"
                value={tag}
                ref={tagsRef}
                onChange={(e) => setTag(e.target.value)}
                onKeyUp={(e) => addTagHandler(e)}
                placeholder={
                  tag.length || tags.length
                    ? ''
                    : 'e.g. (css sql-server asp.net-mvc)'
                }
              />
              {tags.length <= 5 ? undefined : (
                <svg
                  aria-hidden="true"
                  className="svg-icon iconAlertCircle"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"></path>
                </svg>
              )}
            </div>
          </TagEditor>
          {tags.length <= 5 ? undefined : (
            <div className="validation">Please enter no more than 5 tags.</div>
          )}
          {inputStep === 4 ? (
            <Button
              name="tagsNext"
              onClick={(e) => moveNextInput(e)}
              disabled={tags.length < 1 || tags.length > 5}
            >
              Next
            </Button>
          ) : undefined}
        </InputBox>
        <Button
          type="form"
          form="addQuestion--form"
          className="addQuestion--submit submitButton"
          disabled={inputStep < 5}
        >
          Review your question
        </Button>
        <SaveButton
          className="addQuestion--draft-save submitButton"
          onClick={(e) => saveDraftHandler(e)}
        >
          Save draft
        </SaveButton>
        <DiscardButton
          className="addQuestion--draft-discard submitButton"
          onClick={(e) => deleteDraftHandler(e)}
        >
          Discard draft
        </DiscardButton>
      </form>
    </section>
  );
};

export default AddQuestion;
