import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase is clicked!' + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to uppercase" , 'Succes');
  };

  const handleDownClick = () => {
    // console.log('Lowercase is clicked!' + text);
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to Lowercase" , 'Succes');
  };

  const handleClearClick = () => {
    console.log('clear is clicked!' + text);
    let newText = '';
    setText(newText);
    // props.showAlert("Page is clean" , 'Succes');
  };

  const handleOnChange = (event) => {
    // console.log('Handle On Change!');
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log('Copy Done');
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy is Done" , 'Succes');
  };

  //extra space remove
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    // props.showAlert("Remove all the Extra Spaces" , 'Succes');
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <div
          className='mb-3'
          style={{
            backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          <h2>{props.heading} </h2>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#d1d5df' : '#d1d5df',
              color: props.mode === 'dark' ? '#042743' : 'purple',
            }}
            id='myBox'
            rows='8'
          ></textarea>
        </div>

        <button className='btn btn-info mx-1' onClick={handleUpClick}>
          Uppercase
        </button>
        <button className='btn btn-info mx-1' onClick={handleDownClick}>
          Lowercase
        </button>
        <button
          className='btn btn-info mx-1'
          onClick={handleExtraSpaces}
        >
          Remove Extra space
        </button>
        <button className='btn btn-info mx-1' onClick={handleCopy}>
          Copy
        </button>
        <button className='btn btn-info mx-1' onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div
        className='container my-3 '
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h3>Text Summery : </h3>
        <p>
          {text.split(' ').length} words and {text.length} characters{' '}
        </p>
        <p>{0.0008 * text.split(' ').length} Minutes for read this content</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter Something to preview it here'}</p>
      </div>
    </>
  );
}
