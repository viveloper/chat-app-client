import React from 'react';
import './styles.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        sendMessage(e);
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        // onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default Input;
