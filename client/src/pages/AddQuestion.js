import styled from 'styled-components';
import { useState } from 'react';
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
  textarea {
    width: 100%;
    height: 200px;
    padding: 8px 9px;
    outline: none;
    border: 1px solid rgb(193, 193, 193);
    border-radius: 3px;
    resize: vertical;
    &:focus {
      border-color: rgb(0 116 204);
      box-shadow: 0 0 0 4px rgb(0 116 204 / 15%);
    }
  }
`;

const NextButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  color: #fff;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 hsl(206deg 100% 52%),
    inset 0 2px 0 0 hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
  font-size: 13px;
  padding: 0.8em;
  margin-top: 16px;
  &:hover {
    background-color: hsl(206deg 100% 40%);
  }
`;

const AddQuestion = () => {
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
          />
          <NextButton>Next</NextButton>
        </InputBox>
        <InputBox>
          <label htmlFor="problem">What are the details of your problem?</label>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <textarea id="problem" />
          <NextButton>Next</NextButton>
        </InputBox>
        <InputBox>
          <label htmlFor="tryForProblem">
            What did you try and what were you expecting?
          </label>
          <p>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </p>
          <textarea id="tryForProblem" />
          <NextButton>Next</NextButton>
        </InputBox>
        <InputBox>
          <label htmlFor="tags">Tags</label>
          <p>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
          <div className="tag-editer">
            <input
              id="tags"
              type="text"
              placeholder={'e.g. (css sql-server asp.net-mvc)'}
            />
          </div>
          <NextButton>Next</NextButton>
        </InputBox>
        <button
          type="form"
          form="addQuestion--form"
          className="addQuestion--submit submitButton"
        >
          Review your question
        </button>
        <button className="addQuestion--draft-save submitButton">
          Save draft
        </button>
        <button className="addQuestion--draft-discard submitButton">
          Discard draft
        </button>
      </form>
    </section>
  );
};

export default AddQuestion;
