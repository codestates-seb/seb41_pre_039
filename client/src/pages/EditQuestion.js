import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ContentEditor } from '../components/Editor';
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const InputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #0c0d0e;
  text-align: left;
  margin-bottom: 24px;
  position: relative;

  label {
    display: block;
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
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
`;

const CancelButton = styled(Button)`
  background-color: transparent;
  box-shadow: none;
  color: #0074cc;
  margin-left: 20px;
  &:hover {
    background-color: #eff8ff;
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
  margin-top: 5px;

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
export default function EditQuestion() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');
  const [summary, setSummary] = useState('');
  const { questionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const axiosData = async () => {
      await axios
        .get(`/questions/${questionId}`)
        .then((res) => {
          setTitle(res.data.title);
          setBody(res.data.content);
          setTags(res.data.tags);
        })
        .catch((err) => console.error(err));
    };
    axiosData();
  }, []);

  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const tagsRef = useRef(null);

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

  const editSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/questions/${questionId}`, {
        title: title,
        content: body,
        tags: tags,
      })
      .then((res) => {
        console.log(res);
        navigate(`/question/${questionId}`);
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="edit--container">
      <article className="edit--advice">
        <p>Your edit will be placed in a queue until it is peer reviewed.</p>
        <p>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </p>
      </article>
      <form id="edit--form">
        <InputBox>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="body">Body</label>
          <ContentEditor
            id="body"
            value={body}
            changeHandler={setBody}
            refer={bodyRef}
          />
        </InputBox>
        <InputBox>
          <label htmlFor="tags">Tags</label>
          <TagEditor valid={tags.length <= 5}>
            <div className="tags-list">
              {tags.map((tag, idx) => (
                <Tag tag={tag} key={idx} idx={idx} />
              ))}
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
        </InputBox>
        <InputBox>
          <label htmlFor="summary">Edit Summary</label>
          <input
            id="summary"
            type="text"
            placeholder="briefly explain your changes (corrected spelling, fixed, grammar, improved formatting)"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </InputBox>
        <Button
          type="form"
          form="edit--form"
          className="edit--submit submitButton"
          onClick={editSubmitHandler}
        >
          Save edits
        </Button>
        <CancelButton className="edit--draft-discard submitButton">
          Cancel
        </CancelButton>
      </form>
    </section>
  );
}
