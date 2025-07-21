import React, { useState } from "react";

const MovieCards = () => {
  const [chat, setChat] = useState('');
  const [response, setResponse] = useState('');

  const prompts = [
    { msg: 'hi', responce: 'hi, there how can I help you today' },
    { msg: 'h', responce: 'hi, there how can I help you today' }
  ];

  const handleChat = (e) => {
    e.preventDefault();

    const found = prompts.find(item => item.msg === chat.toLowerCase());
    
    if(found){
      setResponse(found.responce);
    } else {
      setResponse("Sorry, I don't understand. Try 'hi' or 'h'.");
    }

    setChat('');
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black flex flex-col h-screen w-screen justify-center items-center">
      <h1 className="text-green-400 text-4xl mb-6 font-bold capitalize">
        Chat Here
      </h1>

      <form onSubmit={handleChat} className="bg-white w-[90%] max-w-md rounded-lg p-6 shadow-2xl flex flex-col gap-4">
        <textarea
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full h-40 outline-none focus:ring-2 focus:ring-green-400 resize-none"
          placeholder="Enter your text here..."
        ></textarea>

        <button
          type="submit"
          className="bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 active:scale-95 transition-transform duration-150"
        >
          Send
        </button>
      </form>

      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md max-w-md w-[90%]">
          <p className="text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCards;
