import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { talkToHope } from ".././../api/chatbot/index";
import { useMutation } from "@tanstack/react-query";
import { useModalStates } from "@/Modal/useModalStore";
import { Button } from "@/components/ui/button";

export const TalkToHope = () => {
  const [open, setOpen] = useState(true);
  const [typing, setTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [messages, setMessages] = useState([]);
  // const count = useModalStates((state) => state.count);
  // const incremnet = useModalStates((state) => state.increment);
  const addSentiment = useModalStates((state) => state.addSentiment);
  const sentiment = useModalStates((state) => state.sentiment);

  useEffect(() => {
    // Load conversation history from localStorage when component mounts
    const savedMessages = localStorage.getItem("conversation");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const mutation = useMutation({
    mutationFn: async (data) => talkToHope(data),
    onSuccess: (data) => {
      const newMessage = {
        message: data.response,
        sender: "HOPE",
        direction: "incoming",
      };
      const responses = [...messages, newMessage];
      setMessages(responses);
      setTyping(false);
      // console.log(data.sentiment)
      // if (messageCount >= 2) {
        addSentiment(data.sentiment);
      // }
      // Save conversation history to localStorage after receiving response
      localStorage.setItem("conversation", JSON.stringify(responses));
    },
  });

  const handleSend = (message) => {
    mutation.mutate(message);
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    setMessageCount(messageCount + 1);
    // Save conversation history to localStorage after sending message
    localStorage.setItem("conversation", JSON.stringify(newMessages));
  };

  const resetConversations = ()=>{
    localStorage.removeItem('conversation')
    setMessages([]);
  }

  return (
    <>
      <div className="w-full h-screen lg:ml-52 bot-background"></div>
      <div className="absolute z-10 flex justify-center items-center mt-7 lg:left-[600px] mx-auto px-4">
        <button
          onClick={() => setOpen(!open)}
          className="fixed bottom-4 right-10 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white block border-gray-200 align-middle"
          >
            <path
              d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
              className="border-gray-200"
            ></path>
          </svg>
        </button>

        {open && (
          <div className="mx-auto sm:mx-0 px-6 sm:px-4 bottom-[calc(4rem+1.5rem)] sm:mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-full sm:w-[440px] h-[634px] sm:h-[auto]">
            
            <h1>Try asking: How to get started with meditation?</h1>
            <div className="">
              <div
                style={{
                  position: "relative",
                  height: "500px",
                  width: "400px",
                }}
              >
                <MainContainer>
                  <ChatContainer>
                    <MessageList
                      typingIndicator={
                        typing ? (
                          <TypingIndicator content="HOPE is typing..." />
                        ) : null
                      }
                    >
                      {messages.map((message, i) => {
                        if (!message) {
                          return null;
                        }
                        return <Message key={i} model={message} />;
                      })}
                    </MessageList>
                    <MessageInput
                      placeholder="Type message here"
                      onSend={handleSend}
                    />
                  </ChatContainer>
                </MainContainer>
              </div>
            </div>
            <div className="text-right mt-4">
              <Button className='' onClick={resetConversations}>Reset</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
