import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useState } from "react"
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react"

import { talkToHope } from ".././../api/chatbot/index";

import { useMutation } from '@tanstack/react-query';

export const TalkToHope = () => {
  
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello i am HOPE, a chatbot.",
      sender: "HOPE"
    }
  ])

  const mutation = useMutation({
    mutationFn: async (data) => talkToHope(data),
    onSuccess: (data) => {
      const newMessage = {
        message : data,
        sender: 'HOPE',
        direction: "incoming"
      }
      const responses = [...messages, newMessage]
      setMessages(responses);
      // ?set typing indicator
      setTyping(false);
    },
    
  })

  const handlesend = (message) =>{
    console.log("mutation called!");
    mutation.mutate(message);
    const newMessage = {
      message : message,
      sender: 'user',
      direction: "outgoing"
    }
    const newMessages = [...messages,newMessage]
    // update messagestate
    setMessages(newMessages);
    // ?set typing indicator
    setTyping(true);
    // ?send it over and send response

  }


  return (
    <>
      <div className="w-full min-h-screen overflow-y-scroll bot-background">
        <div className="flex justify-center items-center my-7">
          <button
            onClick={()=>setOpen(!open)}
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
          <div style={{ position: "relative", height: "500px", width:"400px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
              typingIndicator = {typing? <TypingIndicator content="HOPE is typing..." />: null}
              >
                {messages.map((message, i)=>{
                    if(!message){
                      return null;
                    }
                    return(
                      <Message key={i}
                      model ={message}
                  />
                    )
                  })
                }
                
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handlesend} />
            </ChatContainer>
          </MainContainer>
        </div>
          </div>
        )}
        </div>
      </div>
    </>
  )
}
