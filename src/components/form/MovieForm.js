import React, { useState } from "react";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const titleChangehandler = (event) => {
    setTitle(event.target.value);
  };

  const textAreaChangehandler = (event) => {
    setTextArea(event.target.value);
  };

  const releaseDateChangehandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, textArea, releaseDate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='exampleFormControlInput1'>Title</label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            name='title'
            // value={title}
            onChange={titleChangehandler}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='exampleFormControlTextarea1'>Textarea</label>
          <textarea
            className='form-control'
            name='textArea'
            id='exampleFormControlTextarea1'
            // value={textArea}
            onChange={textAreaChangehandler}
            rows='3'
          ></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleFormControlInput3'>Release Date</label>
          <input
            type='text'
            name='releaseDate'
            className='form-control'
            id='exampleFormControlInput3'
            placeholder='name@example.com'
            // value={releaseDate}
            onChange={releaseDateChangehandler}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Add Movies
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
