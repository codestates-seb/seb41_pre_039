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

  .answer-title {
    font-size: 20px;
    margin-bottom: 20px;
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

export default function EditAnswer() {
  const { commentId } = useParams();
  const [body, setBody] = useState([]);
  const [summary, setSummary] = useState('');
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/comments/${commentId}`)
      .then((res) => {
        setBody(res.data.content);
      })
      .catch((err) => console.error(err));
  }, []);

  const editAnswerHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/comments/${commentId}`, {
        content: body,
      })
      .then((res) => {
        setBody(res.data);
        navigate(-1);
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
          <label htmlFor="body" className="answer-title">
            Answer
          </label>
          <ContentEditor
            id="body"
            value={body}
            changeHandler={setBody}
            refer={bodyRef}
          />
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
          onClick={editAnswerHandler}
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
