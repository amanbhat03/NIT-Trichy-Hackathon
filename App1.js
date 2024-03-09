import React, { useState, useEffect } from 'react';
import './App.css';

const HealthcareAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [assistantResponses, setAssistantResponses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAskAssistant = () => {
    if (userInput.toLowerCase().includes('fever')) {
      setResponse('How long have you been experiencing the fever?');
    } else if (userInput.toLowerCase().includes('past 4 days')) {
      setResponse('Have you noticed any changes in water and food intake??');
    } else if (userInput.toLowerCase().includes('yes')) {
      setResponse('Could you please explain the changes in detail?');
    } else if (userInput.toLowerCase().includes('i took crocin')) {
      setResponse('I understand that you took crocin for the fever, but regarding the changes, please specify what changes you have observed? For example, do you feel dehydrated and drained?');
    } else if (userInput.toLowerCase().includes('thanks for helping me')) {
      setResponse('You are welcome. It is important for us to understand the specific changes to provide the best care. Have you had any breast surgeries or biopsies in the past?');
    } else if (userInput.toLowerCase().includes('let us end the chat')) {
      setResponse('I have asked all the questions. Thank you for your responses. I will send the summary of our conversation to your care team.');
    } else {
      setResponse('I am here to help. Please let me know by typing in the box.');
    }

    setUserInput('');
  };

  const setResponse = (response) => {
    setAssistantResponses((prevResponses) => [
      ...prevResponses,
      { role: 'user', content: userInput },
      { role: 'assistant', content: response }
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 10);

    return () => clearTimeout(timer);
  }, [assistantResponses]);

  return (
    <div className="healthcare-assistant">
      <div className="assistant-container">
        <h1>Dana your Virtual Healthcare Assistant</h1>
        <div className="user-input">
          <label htmlFor="userInput">Hello, I'm Dana! I specialize in oncology, and I'm here to talk with you about your health and any concerns you might have. Let's start with some questions to better understand your situation:</label>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your message"
          />
          <button onClick={handleAskAssistant}>Ask</button>
        </div>
        <img
          src="https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg"
          alt="Chatbot"
          className="chatbot-image"
        />
        <div className="conversation">
          {assistantResponses.slice(0, currentIndex + 1).map((message, index) => (
            <div key={index} className={message.role}>
              <strong>{message.role.charAt(0).toUpperCase() + message.role.slice(1)}:</strong> {message.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareAssistant;
